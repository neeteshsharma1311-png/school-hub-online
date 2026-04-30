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
import { X } from "lucide-react";

const images = [g1, g2, g3, g4, g5, g6, g7];

const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHeader eyebrow="Memories" title="Gallery" subtitle="Glimpses from our school life and events." />
      <section className="container pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpen(src)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-soft ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </section>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur"
        >
          <button
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-card border border-border"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={open}
            alt="Preview"
            className="max-h-[90vh] max-w-full rounded-2xl shadow-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
