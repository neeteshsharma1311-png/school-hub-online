import { motion } from "framer-motion";
import { FileText, ExternalLink, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const documents = [
  { name: "General Information", url: "https://docs.google.com/document/d/1bp4sM8bn7w_Xj6LwO6Pc7mSrykoTcV08/edit?usp=drivesdk&ouid=108542722633952499196&rtpof=true&sd=true" },
  { name: "Engineer's Shiksha Sanstha", url: "https://drive.google.com/file/d/10ONQteeEAd83ae3VS3Aou92t_k89Jn_S/view?usp=drivesdk" },
  { name: "School Management Committee", url: "https://drive.google.com/file/d/12tlplNgOmxKVKHGdO44WPqR6ky9cjhwF/view?usp=drivesdk" },
  { name: "Last Three Year Result", url: "https://drive.google.com/file/d/12gw7xaDnwbn2joudToLMlcFQWhPh5cBh/view?usp=drivesdk" },
  { name: "Building Safety ECSSS", url: "https://drive.google.com/file/d/1UkhFp6RNKW7pLVVayf8ZgXXhwfT2NxbF/view?usp=drivesdk" },
  { name: "Fire ECSSS", url: "https://drive.google.com/file/d/1_EXmntGMW4QZ7psPc-sNDuouMxsfoKcu/view?usp=drivesdk" },
  { name: "Health and Sanitation NOC", url: "https://drive.google.com/file/d/1pK4MDJt56z4OjI18bGl0-u1X5ofSgBpu/view?usp=drivesdk" },
  { name: "Sanitation and Hygiene NOC", url: "https://drive.google.com/file/d/1ZR3b67u5Hw7p-2YfBdQgRX2uFpwcdRut/view?usp=drivesdk" },
  { name: "Water Test ECSSS", url: "https://drive.google.com/file/d/174OpySTNv48QOOimxwa8ge-TD0diigra/view?usp=drivesdk" },
];

const Disclosure = () => (
  <>
    <PageHeader
      eyebrow="CBSE Compliance"
      title="Mandatory Public Disclosure"
      subtitle="Official school documents available for public viewing as per CBSE norms."
    />
    <section className="container pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border glass shadow-soft overflow-hidden"
      >
        <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-6 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-serif text-lg font-bold leading-tight">Official Documents</h2>
            <p className="text-xs text-muted-foreground">Click view to open the document in a new tab.</p>
          </div>
        </div>

        <ul className="divide-y divide-border">
          {documents.map((doc, i) => (
            <motion.li
              key={doc.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex items-center justify-between gap-4 px-5 sm:px-6 py-4 hover:bg-secondary/40 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:rotate-6 group-hover:scale-105">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-semibold truncate">{doc.name}</div>
                  <div className="text-xs text-muted-foreground">PDF Document</div>
                </div>
              </div>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen inline-flex shrink-0 items-center gap-1.5 rounded-full bg-hero px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.05]"
              >
                View <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  </>
);

export default Disclosure;
