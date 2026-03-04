import { Send, User, Phone, Mail, Building, MessageSquare, CheckCircle, Loader2, MapPin, Laptop, Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbzjfBE4IcMwAr4KqBFEnePkbxUzXzm25VehtuerUrTzAvriTdw1IVrPmmoG6YD64QsO/exec";

type FormMode = "business" | "private";

const inputClass =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm";

const selectClass =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm appearance-none";

const ContactFormSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].contact;
  const { ref, visible } = useScrollReveal();

  const [mode, setMode] = useState<FormMode>("business");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Business form state
  const [biz, setBiz] = useState({ name: "", business: "", location: "", teamSize: "", phone: "", email: "", message: "" });
  const [bizServiceIdxs, setBizServiceIdxs] = useState<number[]>([]);
  const [bizErrors, setBizErrors] = useState<Record<string, string>>({});

  // Private form state
  const [priv, setPriv] = useState({ name: "", device: "", issue: "", phone: "", email: "" });
  const [privErrors, setPrivErrors] = useState<Record<string, string>>({});

  const toggleService = (i: number) =>
    setBizServiceIdxs(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

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

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--contact-bg))" }}>
      <div ref={ref} className={`container mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {tr.sub}
          </p>

          {/* Mode toggle */}
          <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => switchMode("business")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                mode === "business"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {tr.modeB}
            </button>
            <button
              type="button"
              onClick={() => switchMode("private")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                mode === "private"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Laptop className="w-4 h-4" />
              {tr.modeP}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-white rounded-xl border border-border p-10 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tr.sent}</h3>
                <p className="text-muted-foreground text-sm">{tr.sentSub}</p>
              </div>
            ) : mode === "business" ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="text" placeholder={tr.namePh} value={biz.name} onChange={e => setBiz({ ...biz, name: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                  </div>
                  {bizErrors.name && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.name}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Building className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="text" placeholder={tr.bizPh} value={biz.business} onChange={e => setBiz({ ...biz, business: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                  </div>
                  {bizErrors.business && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.business}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                      <input type="text" placeholder={tr.cityPh} value={biz.location} onChange={e => setBiz({ ...biz, location: e.target.value })} className={`${inputClass} pl-10`} maxLength={80} />
                    </div>
                    {bizErrors.location && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.location}</p>}
                  </div>
                  <div>
                    <div className="relative">
                      <select value={biz.teamSize} onChange={e => setBiz({ ...biz, teamSize: e.target.value })} className={selectClass}>
                        <option value="">{tr.teamPh}</option>
                        {tr.teamSizes.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                    </div>
                    {bizErrors.teamSize && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.teamSize}</p>}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 ml-1">{tr.serviceLabel}</p>
                  <div className="space-y-2">
                    {tr.serviceOptions.map((s, i) => (
                      <label key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={bizServiceIdxs.includes(i)}
                          onChange={() => toggleService(i)}
                          className="w-4 h-4 rounded border-border accent-primary"
                        />
                        <span className="text-sm text-foreground">{s}</span>
                      </label>
                    ))}
                  </div>
                  {bizErrors.services && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.services}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="tel" placeholder={tr.phonePh} value={biz.phone} onChange={e => setBiz({ ...biz, phone: e.target.value })} className={`${inputClass} pl-10`} maxLength={20} />
                  </div>
                  {bizErrors.phone && <p className="text-destructive text-xs mt-1 ml-1">{bizErrors.phone}</p>}
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                  <input type="email" placeholder={tr.emailPh} value={biz.email} onChange={e => setBiz({ ...biz, email: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                  <textarea placeholder={tr.msgPh} value={biz.message} onChange={e => setBiz({ ...biz, message: e.target.value })} rows={3} className={`${inputClass} pl-10 resize-none`} maxLength={1000} />
                </div>

                <Button variant="hero" size="lg" className="w-full text-base py-6 btn-glow" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {status === "sending" ? tr.sending : tr.send}
                </Button>
                {status === "error" && <p className="text-center text-xs text-destructive">{tr.error}</p>}
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="text" placeholder={tr.namePh} value={priv.name} onChange={e => setPriv({ ...priv, name: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                  </div>
                  {privErrors.name && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.name}</p>}
                </div>

                <div>
                  <div className="relative">
                    <select value={priv.device} onChange={e => setPriv({ ...priv, device: e.target.value })} className={selectClass}>
                      <option value="">{tr.devicePh}</option>
                      {tr.deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                  </div>
                  {privErrors.device && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.device}</p>}
                </div>

                <div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <textarea placeholder={tr.issuePh} value={priv.issue} onChange={e => setPriv({ ...priv, issue: e.target.value })} rows={4} className={`${inputClass} pl-10 resize-none`} maxLength={1000} />
                  </div>
                  {privErrors.issue && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.issue}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="tel" placeholder={tr.phonePh} value={priv.phone} onChange={e => setPriv({ ...priv, phone: e.target.value })} className={`${inputClass} pl-10`} maxLength={20} />
                  </div>
                  {privErrors.phone && <p className="text-destructive text-xs mt-1 ml-1">{privErrors.phone}</p>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                  <input type="email" placeholder={tr.emailPh} value={priv.email} onChange={e => setPriv({ ...priv, email: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                </div>

                <Button variant="hero" size="lg" className="w-full text-base py-6 btn-glow" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {status === "sending" ? tr.sending : tr.send}
                </Button>
                {status === "error" && <p className="text-center text-xs text-destructive">{tr.error}</p>}
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-foreground mb-1">Ben Goldenberg</h3>
            <p className="text-muted-foreground mb-6">Bentech — IT Support for Businesses</p>

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
