import { Send, User, Phone, Mail, Building, MessageSquare, CheckCircle, Loader2, MapPin, Laptop, Briefcase, ChevronDown } from "lucide-react";
import benPhoto from "@/assets/ben-photo.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import WorkflowAnimation from "@/components/animations/WorkflowAnimation";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbzjfBE4IcMwAr4KqBFEnePkbxUzXzm25VehtuerUrTzAvriTdw1IVrPmmoG6YD64QsO/exec";

type FormMode = "business" | "private";

const inputClass =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm rtl:text-right ltr:text-left";

const iconInputClass =
  "w-full bg-white border border-border rounded-lg ltr:pl-10 ltr:pr-4 rtl:pr-10 rtl:pl-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm rtl:text-right ltr:text-left";

const selectClass =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm appearance-none rtl:text-right ltr:text-left";

const InputIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute ltr:left-3 rtl:right-3 top-3.5 w-4 h-4 text-muted-foreground/50 flex items-center justify-center">
    {children}
  </span>
);

const ContactFormSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].contact;
  const { ref, visible } = useScrollReveal();

  const [mode, setMode] = useState<FormMode>("business");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showFullForm, setShowFullForm] = useState(false);

  // Quick form state
  const [quick, setQuick] = useState({ name: "", phone: "", painPoint: "" });
  const [quickErrors, setQuickErrors] = useState<Record<string, string>>({});

  // Business form state
  const [biz, setBiz] = useState({ name: "", business: "", location: "", teamSize: "", phone: "", email: "", message: "" });
  const [bizServiceIdxs, setBizServiceIdxs] = useState<number[]>([]);
  const [bizErrors, setBizErrors] = useState<Record<string, string>>({});

  // Private form state
  const [priv, setPriv] = useState({ name: "", device: "", issue: "", phone: "", email: "" });
  const [privErrors, setPrivErrors] = useState<Record<string, string>>({});

  const toggleService = (i: number) =>
    setBizServiceIdxs(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  const validateQuick = () => {
    const e: Record<string, string> = {};
    if (!quick.name.trim()) e.name = "Required";
    if (!quick.phone.trim()) e.phone = "Required";
    if (!quick.painPoint) e.painPoint = "Required";
    setQuickErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateBiz = () => {
    const e: Record<string, string> = {};
    if (!biz.name.trim()) e.name = "Required";
    if (!biz.business.trim()) e.business = "Required";
    if (!biz.location.trim()) e.location = "Required";
    if (!biz.teamSize) e.teamSize = "Required";
    if (bizServiceIdxs.length === 0) e.services = "Required";
    if (!biz.phone.trim()) e.phone = "Required";
    setBizErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePriv = () => {
    const e: Record<string, string> = {};
    if (!priv.name.trim()) e.name = "Required";
    if (!priv.device) e.device = "Required";
    if (priv.issue.trim().length < 5) e.issue = "Required";
    if (!priv.phone.trim()) e.phone = "Required";
    setPrivErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateQuick()) return;
    setStatus("sending");
    try {
      const painIdx = (tr.painPoints as readonly string[]).indexOf(quick.painPoint);
      const painLabel = painIdx >= 0 ? t.en.contact.painPoints[painIdx] : quick.painPoint;
      const payload = { type: "quick", name: quick.name.trim(), phone: quick.phone.trim(), painPoint: painLabel };
      await fetch(SHEETS_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      setStatus("sent");
    } catch { setStatus("error"); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = mode === "business" ? validateBiz() : validatePriv();
    if (!valid) return;

    setStatus("sending");
    try {
      const services = bizServiceIdxs.map(i => t.en.contact.serviceOptions[i]).join(", ");
      const payload = mode === "business"
        ? { type: "business", name: biz.name.trim(), business: biz.business.trim(), location: biz.location.trim(), teamSize: biz.teamSize, services, phone: biz.phone.trim(), email: biz.email.trim(), message: biz.message.trim() }
        : { type: "private", name: priv.name.trim(), device: priv.device, issue: priv.issue.trim(), phone: priv.phone.trim(), email: priv.email.trim() };

      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const switchMode = (m: FormMode) => {
    setMode(m);
    setStatus("idle");
    setBizErrors({});
    setPrivErrors({});
  };

  const renderSentState = () => (
    <div className="bg-white rounded-xl border border-border p-10 text-center">
      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{tr.sent}</h3>
      <p className="text-muted-foreground text-sm">{tr.sentSub}</p>
    </div>
  );

  const renderQuickForm = () => (
    <form onSubmit={handleQuickSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">שם מלא</label>
        <div className="relative">
          <InputIcon><User className="w-4 h-4" /></InputIcon>
          <input id="contact-name" type="text" placeholder={tr.namePh} value={quick.name} onChange={e => setQuick({ ...quick, name: e.target.value })} className={iconInputClass} maxLength={100} required aria-required="true" autoComplete="name" />
        </div>
        {quickErrors.name && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{quickErrors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="sr-only">טלפון</label>
        <div className="relative">
          <InputIcon><Phone className="w-4 h-4" /></InputIcon>
          <input id="contact-phone" type="tel" placeholder={tr.phonePh} value={quick.phone} onChange={e => setQuick({ ...quick, phone: e.target.value })} className={iconInputClass} maxLength={20} required aria-required="true" autoComplete="tel" />
        </div>
        {quickErrors.phone && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{quickErrors.phone}</p>}
      </div>

      <div>
        <label htmlFor="contact-service" className="sr-only">שירות נדרש</label>
        <div className="relative">
          <select id="contact-service" value={quick.painPoint} onChange={e => setQuick({ ...quick, painPoint: e.target.value })} className={selectClass} required aria-required="true">
            <option value="">{tr.painPointPh}</option>
            {tr.painPoints.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <ChevronDown className="absolute ltr:right-3 rtl:left-3 top-3.5 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
        </div>
        {quickErrors.painPoint && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{quickErrors.painPoint}</p>}
      </div>

      <p className="text-xs text-muted-foreground text-center">{tr.callbackNote}</p>

      <Button variant="hero" size="lg" className="w-full text-sm sm:text-base py-5 sm:py-6 btn-glow" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
        {status === "sending" ? tr.sending : tr.send}
      </Button>
      {status === "error" && <p className="text-center text-xs text-destructive" role="alert">{tr.error}</p>}

      <button
        type="button"
        onClick={() => setShowFullForm(true)}
        className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors pt-1"
      >
        {tr.detailedFormToggle}
      </button>
    </form>
  );

  const renderBusinessForm = () => (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-4">
      <button
        type="button"
        onClick={() => setShowFullForm(false)}
        className="text-sm text-muted-foreground hover:text-foreground mb-2 underline underline-offset-2 transition-colors"
      >
        ← {tr.backToQuick}
      </button>

      {/* Mode toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-muted p-1 shadow-sm">
          <button
            type="button"
            onClick={() => switchMode("business")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${mode === "business" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Briefcase className="w-4 h-4" />
            {tr.modeB}
          </button>
          <button
            type="button"
            onClick={() => switchMode("private")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${mode === "private" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Laptop className="w-4 h-4" />
            {tr.modeP}
          </button>
        </div>
      </div>

      {mode === "business" ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="biz-name" className="sr-only">שם מלא</label>
            <div className="relative">
              <InputIcon><User className="w-4 h-4" /></InputIcon>
              <input id="biz-name" type="text" placeholder={tr.namePh} value={biz.name} onChange={e => setBiz({ ...biz, name: e.target.value })} className={iconInputClass} maxLength={100} required aria-required="true" autoComplete="name" />
            </div>
            {bizErrors.name && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.name}</p>}
          </div>

          <div>
            <label htmlFor="biz-business" className="sr-only">שם העסק</label>
            <div className="relative">
              <InputIcon><Building className="w-4 h-4" /></InputIcon>
              <input id="biz-business" type="text" placeholder={tr.bizPh} value={biz.business} onChange={e => setBiz({ ...biz, business: e.target.value })} className={iconInputClass} maxLength={100} required aria-required="true" />
            </div>
            {bizErrors.business && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.business}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="biz-location" className="sr-only">עיר</label>
              <div className="relative">
                <InputIcon><MapPin className="w-4 h-4" /></InputIcon>
                <input id="biz-location" type="text" placeholder={tr.cityPh} value={biz.location} onChange={e => setBiz({ ...biz, location: e.target.value })} className={iconInputClass} maxLength={80} required aria-required="true" />
              </div>
              {bizErrors.location && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.location}</p>}
            </div>
            <div>
              <label htmlFor="biz-team" className="sr-only">גודל צוות</label>
              <div className="relative">
                <select id="biz-team" value={biz.teamSize} onChange={e => setBiz({ ...biz, teamSize: e.target.value })} className={selectClass} required aria-required="true">
                  <option value="">{tr.teamPh}</option>
                  {tr.teamSizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute ltr:right-3 rtl:left-3 top-3.5 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
              </div>
              {bizErrors.teamSize && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.teamSize}</p>}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2 ml-1">{tr.serviceLabel}</p>
            <div className="space-y-2">
              {tr.serviceOptions.map((s, i) => (
                <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <input type="checkbox" checked={bizServiceIdxs.includes(i)} onChange={() => toggleService(i)} className="w-4 h-4 rounded border-border accent-primary" />
                  <span className="text-sm text-foreground">{s}</span>
                </label>
              ))}
            </div>
            {bizErrors.services && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.services}</p>}
          </div>

          <div>
            <label htmlFor="biz-phone" className="sr-only">טלפון</label>
            <div className="relative">
              <InputIcon><Phone className="w-4 h-4" /></InputIcon>
              <input id="biz-phone" type="tel" placeholder={tr.phonePh} value={biz.phone} onChange={e => setBiz({ ...biz, phone: e.target.value })} className={iconInputClass} maxLength={20} required aria-required="true" autoComplete="tel" />
            </div>
            {bizErrors.phone && <p className="text-destructive text-xs mt-1 ml-1" role="alert">{bizErrors.phone}</p>}
          </div>
          <div className="relative">
            <InputIcon><Mail className="w-4 h-4" /></InputIcon>
            <input type="email" placeholder={tr.emailPh} value={biz.email} onChange={e => setBiz({ ...biz, email: e.target.value })} className={iconInputClass} maxLength={100} />
          </div>

          <div className="relative">
            <InputIcon><MessageSquare className="w-4 h-4" /></InputIcon>
            <textarea placeholder={tr.msgPh} value={biz.message} onChange={e => setBiz({ ...biz, message: e.target.value })} rows={3} className={`${iconInputClass} resize-none`} maxLength={1000} />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <div className="relative">
              <InputIcon><User className="w-4 h-4" /></InputIcon>
              <input type="text" placeholder={tr.namePh} value={priv.name} onChange={e => setPriv({ ...priv, name: e.target.value })} className={iconInputClass} maxLength={100} />
            </div>
            {privErrors.name && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.name}</p>}
          </div>

          <div>
            <div className="relative">
              <select value={priv.device} onChange={e => setPriv({ ...priv, device: e.target.value })} className={selectClass}>
                <option value="">{tr.devicePh}</option>
                {tr.deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <ChevronDown className="absolute ltr:right-3 rtl:left-3 top-3.5 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
            </div>
            {privErrors.device && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.device}</p>}
          </div>

          <div>
            <div className="relative">
              <InputIcon><MessageSquare className="w-4 h-4" /></InputIcon>
              <textarea placeholder={tr.issuePh} value={priv.issue} onChange={e => setPriv({ ...priv, issue: e.target.value })} rows={4} className={`${iconInputClass} resize-none`} maxLength={1000} />
            </div>
            {privErrors.issue && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.issue}</p>}
          </div>

          <div>
            <div className="relative">
              <InputIcon><Phone className="w-4 h-4" /></InputIcon>
              <input type="tel" placeholder={tr.phonePh} value={priv.phone} onChange={e => setPriv({ ...priv, phone: e.target.value })} className={iconInputClass} maxLength={20} />
            </div>
            {privErrors.phone && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.phone}</p>}
          </div>

          <div className="relative">
            <InputIcon><Mail className="w-4 h-4" /></InputIcon>
            <input type="email" placeholder={tr.emailPh} value={priv.email} onChange={e => setPriv({ ...priv, email: e.target.value })} className={iconInputClass} maxLength={100} />
          </div>
        </div>
      )}

      <Button variant="hero" size="lg" className="w-full text-sm sm:text-base py-5 sm:py-6 btn-glow" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
        {status === "sending" ? tr.sending : tr.send}
      </Button>
      {status === "error" && <p className="text-center text-xs text-destructive">{tr.error}</p>}
    </form>
  );

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--contact-bg))" }}>
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <WorkflowAnimation />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {tr.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            {status === "sent"
              ? renderSentState()
              : showFullForm
                ? renderBusinessForm()
                : renderQuickForm()
            }
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={benPhoto}
                alt="Ben Goldenberg"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-0.5">Ben Goldenberg</h3>
                <p className="text-muted-foreground text-sm">Bentech — IT Support for Businesses</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{tr.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="tel:+972526379747" className="text-foreground hover:text-primary transition-colors">052-637-9747</a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.797 1.836 6.787L2 30l7.43-1.812A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.39 19.342c-.35-.175-2.072-1.022-2.394-1.138-.32-.115-.554-.174-.787.175-.234.35-.905 1.138-1.11 1.371-.204.233-.408.263-.758.088-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.203-.35-.022-.539.153-.713.157-.156.35-.408.524-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.088-.175-.787-1.897-1.078-2.598-.284-.682-.573-.59-.787-.6l-.67-.012a1.286 1.286 0 0 0-.932.437c-.32.35-1.224 1.197-1.224 2.918s1.253 3.385 1.427 3.619c.175.233 2.466 3.765 5.977 5.277.835.36 1.487.575 1.995.737.838.267 1.601.229 2.204.139.672-.1 2.072-.847 2.365-1.664.29-.816.29-1.516.203-1.663-.086-.146-.32-.233-.67-.408z" />
                </svg>
                <a href="https://wa.me/972526379747" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">{tr.whatsapp}</a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              <strong>Hours:</strong> {tr.hours}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {tr.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
