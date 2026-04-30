import { motion } from "framer-motion";
import { MapPin, Facebook, Phone, Mail, Clock, Navigation, GraduationCap, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Engineer's Colony Senior Secondary School", "Quarsi By Pass Road,", "Aligarh, Uttar Pradesh"],
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

const Contact = () => (
  <>
    <PageHeader
      eyebrow="Get in Touch"
      title="Contact Us"
      subtitle="We'd love to hear from you. Visit our campus or connect with us online."
    />
    <section className="container pb-20">
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card-soft p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.4fr]"
      >
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

        <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Quarsi+By+Pass+Road+Aligarh&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  </>
);

export default Contact;
