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
import { X, Camera, ZoomIn } from "lucide-react";

const images = [
  { src: g1, label: "School Campus" },
  { src: g2, label: "Activities" },
  { src: g3, label: "Events" },
  { src: g4, label: "Classroom" },
  { src: g5, label: "Celebrations" },
  { src: g6, label: "Programs" },
  { src: g7, label: "Memories" },
];

const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHeader
        eyebrow="Memories"
        title="School Gallery"
        subtitle="Capturing precious moments from our vibrant school life — events, celebrations and everyday smiles."
      />
      <section className="container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setOpen(img.src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border glass shadow-soft text-left hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 text-primary-foreground translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-serif text-lg font-bold drop-shadow">{img.label}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-background/90 text-primary">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
                <Camera className="h-3 w-3" /> {String(i + 1).padStart(2, "0")}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-background/85 p-4 backdrop-blur"
        >
          <button
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-card border border-border shadow-soft hover:scale-110 transition-transform"
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
            className="max-h-[90vh] max-w-full rounded-2xl shadow-glow object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
