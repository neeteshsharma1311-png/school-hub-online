import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [g1, g2, g3, g4, g5, g6, g7];

const Gallery = () => {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null ? images[index] : null;

  const prev = () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % images.length));

  return (
    <>
      <PageHeader
        eyebrow="Memories"
        title="School Gallery"
        subtitle="Capturing precious moments from our vibrant school life."
      />
      <section className="container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 glass shadow-soft hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-primary shadow-glow backdrop-blur">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIndex(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-4 backdrop-blur-md"
        >
          <button
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-card border border-border shadow-soft hover:scale-110 transition-transform"
            onClick={(e) => { e.stopPropagation(); setIndex(null); }}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-card border border-border shadow-soft hover:scale-110 transition-transform"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-card border border-border shadow-soft hover:scale-110 transition-transform"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <motion.img
            key={open}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            src={open}
            alt="Preview"
            className="max-h-[90vh] max-w-full rounded-2xl shadow-glow object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
