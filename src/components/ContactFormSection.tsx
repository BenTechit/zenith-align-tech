import { Send, User, Phone, Mail, Building, MessageSquare, CheckCircle, Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwFl6-cpxSd67gjN4Dt069YetTXspVUi2hqhhaC1iY0VL2ClFctTyMXciCMXWKJ4L6N/exec";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.phone.trim()) errs.phone = "Please enter your phone number";
    if (form.message.trim().length < 5) errs.message = "Please describe your IT situation";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          device: form.business.trim(),
          message: form.message.trim(),
        }),
      });
      setStatus("sent");
      setForm({ name: "", business: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm";

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--contact-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            I'll respond the same day during business hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-white rounded-xl border border-border p-10 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                <p className="text-muted-foreground text-sm">Thank you. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                  </div>
                  {errors.name && <p className="text-destructive text-xs mt-1 ml-1">{errors.name}</p>}
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                  <input type="text" placeholder="Business Name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${inputClass} pl-10`} maxLength={20} />
                  </div>
                  {errors.phone && <p className="text-destructive text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${inputClass} pl-10`} maxLength={100} />
                </div>

                <div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
                    <textarea placeholder="Brief description of your IT situation" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={`${inputClass} pl-10 resize-none`} maxLength={1000} />
                  </div>
                  {errors.message && <p className="text-destructive text-xs mt-1 ml-1">{errors.message}</p>}
                </div>

                <Button variant="hero" size="lg" className="w-full text-base py-6" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "error" && (
                  <p className="text-center text-xs text-destructive">Something went wrong. Please try again or call directly.</p>
                )}
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
                <span className="text-foreground">Modi'in, Israel</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="tel:+972544991540" className="text-foreground hover:text-primary transition-colors">+972-54-499-1540</a>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href="https://wa.me/972544991540" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">WhatsApp</a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              <strong>Hours:</strong> Sunday–Thursday, 8:00–18:00
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "I work with business owners directly, not through layers of support staff. When you contact Bentech, you're talking to the person who will actually fix it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
