import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, MapPin, BadgeCheck, Languages, Calendar, Building2, Hash,
  ArrowRight, Sparkles, BookOpen, Trophy, Users, Heart, Star, Lightbulb, Award,
} from "lucide-react";
import principalImg from "@/assets/principal.jpg";
import heroImg from "@/assets/school-hero.jpg";

const facts = [
  { icon: Hash, label: "School Code", value: "60430" },
  { icon: BadgeCheck, label: "Affiliation", value: "Affiliated to CBSE, New Delhi" },
  { icon: Hash, label: "Affiliation No", value: "2130940" },
  { icon: Languages, label: "Medium", value: "English Medium" },
  { icon: Calendar, label: "Established", value: "2008" },
  { icon: Building2, label: "Managed by", value: "Engineers Shikshan Sansthan" },
];

const features = [
  { icon: BookOpen, title: "CBSE Curriculum", desc: "Comprehensive learning aligned with the latest CBSE syllabus." },
  { icon: Trophy, title: "Co-Curricular", desc: "Sports, arts and activities to nurture every talent." },
  { icon: Users, title: "Qualified Faculty", desc: "Experienced teachers committed to student success." },
  { icon: Lightbulb, title: "Smart Classes", desc: "Modern teaching aids and computer education." },
  { icon: Heart, title: "Caring Environment", desc: "A safe, friendly atmosphere where children thrive." },
  { icon: Award, title: "Holistic Growth", desc: "Focus on values, discipline and academic excellence." },
];

const Home = () => {
  return (
    <>
      {/* ADMISSION BANNER */}
      <div className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="container flex items-center gap-4 py-2.5 text-sm font-semibold whitespace-nowrap overflow-hidden">
          <Sparkles className="h-4 w-4 shrink-0 animate-bounceSoft" />
          <div className="flex animate-marquee gap-12">
            <span>🎓 Admissions Open for Session 2026-27 — Enroll Now!</span>
            <span>📚 CBSE Affiliated · Established 2008</span>
            <span>✨ Limited seats available — Apply Today</span>
            <span>🎓 Admissions Open for Session 2026-27 — Enroll Now!</span>
            <span>📚 CBSE Affiliated · Established 2008</span>
            <span>✨ Limited seats available — Apply Today</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative container pt-10 md:pt-14 pb-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-soft animate-bounceSoft"
            >
              <Star className="h-3.5 w-3.5 fill-current" /> Admissions Open · Session 2026-27
            </motion.span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient">Engineer's Colony</span>
              <br />
              <span className="text-foreground">Senior Secondary School</span>
            </h1>
            <p className="mt-5 flex items-start gap-2 text-muted-foreground max-w-lg">
              <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              Quarsi By Pass Road, Aligarh, Uttar Pradesh
            </p>
            <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              A premier <strong>CBSE affiliated English Medium</strong> institution
              shaping young minds since <strong>2008</strong>. We blend academic
              excellence with values, creativity and character — empowering every
              child to dream big and achieve more.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/fees" className="group inline-flex items-center gap-2 rounded-full bg-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
                View Fee Structure
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary">
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
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-glow bg-card">
              <img
                src={heroImg}
                alt="Engineer's Colony Senior Secondary School with happy students"
                className="w-full h-auto object-cover"
                width={1920}
                height={1080}
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 rounded-2xl border border-border bg-background/95 px-4 py-3 backdrop-blur shadow-soft hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Trophy className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Since</div>
                  <div className="font-bold">2008</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card-soft p-8 md:p-12 shadow-soft"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            About Our School
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">A Legacy of Learning &amp; Excellence</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2 text-foreground/80 leading-relaxed">
            <p>
              <strong>Engineer's Colony Senior Secondary School</strong> is a CBSE
              affiliated English medium school located on Quarsi By Pass Road,
              Aligarh, Uttar Pradesh. Founded in <strong>2008</strong> and managed
              by <strong>Engineers Shikshan Sansthan</strong>, the school has grown
              into a trusted name in quality education with affiliation number
              <strong> 2130940</strong> and school code <strong>60430</strong>.
            </p>
            <p>
              We believe education is more than textbooks — it's about building
              confident, curious and compassionate young people. From Play Group to
              Class 10, our students enjoy a vibrant blend of academics, sports,
              arts and life-skills, supported by experienced faculty and modern
              facilities including smart classrooms and computer education.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FACTS */}
      <section className="container py-12">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">At a glance</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">School Information</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card-soft p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft transition-transform group-hover:rotate-6">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{f.label}</div>
              <div className="mt-1 font-serif text-lg font-semibold">{f.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-12">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Why choose us</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">What Makes Us Special</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-soft">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card-soft p-6 md:p-10 shadow-soft"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-hero opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[280px_1fr] items-center relative">
            <div className="mx-auto md:mx-0 w-full max-w-[280px]">
              <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-glow bg-secondary aspect-[3/4]">
                <img
                  src={principalImg}
                  alt="Principal Mr. Malik Fahimuddin"
                  className="absolute inset-0 h-full w-full object-contain bg-secondary"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Principal's Desk
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">Mr. Malik Fahimuddin</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                With over <strong>35 years</strong> of dedicated experience in
                education, our Principal leads the school with a vision of
                nurturing every child into a confident, responsible and
                knowledgeable individual. Under his guidance, the school
                continues to uphold the highest standards of teaching, discipline
                and holistic development.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 max-w-xl">
                <div className="rounded-xl bg-background/70 border border-border p-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Qualification</div>
                  <div className="font-semibold">M.A, M.Ed</div>
                </div>
                <div className="rounded-xl bg-background/70 border border-border p-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
                  <div className="font-semibold">35 years</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-hero p-10 md:p-14 text-center text-primary-foreground shadow-glow"
        >
          <Sparkles className="absolute top-6 left-6 h-8 w-8 opacity-40 animate-spinSlow" />
          <GraduationCap className="absolute bottom-6 right-6 h-10 w-10 opacity-40 animate-bounceSoft" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Admissions Open 2026-27</h2>
          <p className="mt-3 max-w-xl mx-auto opacity-95">
            Give your child the gift of an inspiring education. Visit us or get in touch to learn more.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-primary px-7 py-3 text-sm font-bold shadow-soft transition-transform hover:scale-105"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
