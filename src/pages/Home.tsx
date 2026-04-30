import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, BadgeCheck, Languages, Calendar, Building2, Hash, ArrowRight } from "lucide-react";
import principalImg from "@/assets/principal.jpg";

const facts = [
  { icon: Hash, label: "School Code", value: "60430" },
  { icon: BadgeCheck, label: "Affiliation", value: "Affiliated to CBSE, New Delhi" },
  { icon: Hash, label: "Affiliation No", value: "2130940" },
  { icon: Languages, label: "Medium", value: "English Medium" },
  { icon: Calendar, label: "Established", value: "2008" },
  { icon: Building2, label: "Managed by", value: "Engineers Shikshan Sansthan" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="container pt-10 md:pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5" /> CBSE Affiliated · Est. 2008
            </span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient">Engineer's Colony</span>
              <br />
              <span className="text-foreground">Senior Secondary School</span>
            </h1>
            <p className="mt-5 flex items-start gap-2 text-muted-foreground max-w-lg">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              Quarsi By Pass Road, Aligarh, Uttar Pradesh
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/fees"
                className="group inline-flex items-center gap-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
              >
                View Fee Structure
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-hero opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-border bg-card-soft p-2 shadow-glow">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img src={principalImg} alt="Principal Mr. Malik Fahimuddin" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-border bg-background/95 p-4 backdrop-blur shadow-soft">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Principal</div>
                <div className="font-serif text-lg font-bold leading-tight">Mr. Malik Fahimuddin</div>
                <div className="text-xs text-muted-foreground">M.A, M.Ed · 35 years experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FACTS */}
      <section className="container py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card-soft p-5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{f.label}</div>
              <div className="mt-1 font-serif text-lg font-semibold">{f.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL DETAIL CARD */}
      <section className="container pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card-soft p-8 md:p-12 shadow-soft"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-hero opacity-20 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[200px_1fr] items-center relative">
            <div className="mx-auto md:mx-0 h-44 w-44 rounded-3xl overflow-hidden border-4 border-background shadow-glow">
              <img src={principalImg} alt="Principal" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Principal's Desk
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">Mr. Malik Fahimuddin</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 max-w-xl">
                <div className="rounded-xl bg-background/60 border border-border p-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Qualification</div>
                  <div className="font-semibold">M.A, M.Ed</div>
                </div>
                <div className="rounded-xl bg-background/60 border border-border p-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
                  <div className="font-semibold">35 years</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
