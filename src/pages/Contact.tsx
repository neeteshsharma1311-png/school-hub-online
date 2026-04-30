import { motion } from "framer-motion";
import { MapPin, Facebook } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Contact = () => (
  <>
    <PageHeader eyebrow="Get in Touch" title="Contact Us" />
    <section className="container pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card-soft p-8 shadow-soft"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-bold">Address</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Engineer's Colony Senior Secondary School
            <br />
            Quarsi By Pass Road, Aligarh, Uttar Pradesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card-soft p-8 shadow-soft"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft">
            <Facebook className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-bold">Follow Us</h2>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft"
      >
        <iframe
          title="School Location"
          src="https://www.google.com/maps?q=Quarsi+By+Pass+Road+Aligarh&output=embed"
          className="w-full h-[360px] border-0"
          loading="lazy"
        />
      </motion.div>
    </section>
  </>
);

export default Contact;
