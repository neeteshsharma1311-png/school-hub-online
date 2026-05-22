import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Facebook, Phone, Clock, Navigation, GraduationCap, Sparkles, Send, Loader2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Engineer's Colony Senior Secondary School", "Quarsi By Pass Road,", "Aligarh, Uttar Pradesh"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 89798 36229", "+91 79835 20713"],
  },
  {
    icon: Clock,
    title: "School Hours",
    lines: ["Monday to Saturday", "8:00 AM – 2:00 PM", "Office: 9:00 AM – 3:00 PM"],
  },
  {
    icon: GraduationCap,
    title: "Admissions",
    lines: ["Session 2026-27 — Open Now", "Play Group to Class 10", "Visit office for details"],
  },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  query: z.string().trim().min(5, "Please describe your query").max(1500),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", query: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", { body: parsed.data });
      if (error || (data as any)?.error) throw new Error(error?.message || "Failed to send");
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", query: "" });
    } catch (err: any) {
      toast({ title: "Could not send message", description: err.message || "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Visit our campus or connect with us online."
      />
      <section className="container pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border glass p-6 hover-lift overflow-hidden"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-soft transition-transform group-hover:rotate-6">
                <c.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-serif text-xl font-bold">{c.title}</h2>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed space-y-0.5">
                {c.lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form + Connect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]"
        >
          <form
            onSubmit={submit}
            className="rounded-2xl border border-border bg-card-soft p-6 md:p-8 shadow-soft"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Send className="h-3 w-3" /> Send a Message
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold">Have a Query? Write to Us</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the form and our team will reach out to you soon.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Contact Number</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." required />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="query">Your Query</Label>
                <Textarea id="query" rows={5} value={form.query} onChange={(e) => setForm({ ...form, query: e.target.value })} placeholder="How can we help you?" required />
              </div>
            </div>

            <Button type="submit" disabled={loading} className="mt-5 w-full sm:w-auto">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
            </Button>
          </form>

          <div className="rounded-2xl border border-border bg-card-soft p-6 md:p-8 shadow-soft">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              <Sparkles className="h-3 w-3" /> Connect
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold">Stay Connected</h3>
            <p className="mt-2 text-sm text-muted-foreground">Follow our social channels and reach out for any queries.</p>
            <div className="mt-5 space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-colors hover:bg-secondary"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero text-primary-foreground"><Facebook className="h-5 w-5" /></span>
                <div className="leading-tight">
                  <div className="font-semibold">Facebook</div>
                  <div className="text-xs text-muted-foreground">Follow for updates</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps?q=Quarsi+By+Pass+Road+Aligarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-colors hover:bg-secondary"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero text-primary-foreground"><Navigation className="h-5 w-5" /></span>
                <div className="leading-tight">
                  <div className="font-semibold">Get Directions</div>
                  <div className="text-xs text-muted-foreground">Open in Google Maps</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft"
        >
          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Quarsi+By+Pass+Road+Aligarh&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
