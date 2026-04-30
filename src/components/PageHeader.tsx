import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageHeader = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: ReactNode }) => (
  <section className="container pt-12 pb-8 md:pt-16 md:pb-12 text-center">
    {eyebrow && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur"
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight"
    >
      <span className="text-gradient">{title}</span>
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 mx-auto max-w-2xl text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    )}
  </section>
);

export default PageHeader;
