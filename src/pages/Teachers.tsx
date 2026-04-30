import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const teachers: [number, string, string, string][] = [
  [1, "Mr. Malik Fahimuddin", "Principal", "M.A, M.Ed"],
  [2, "Mr. Suresh Chandra Upadhyay", "T.G.T (Coordinator)", "M.A, B.Ed"],
  [3, "Mr. Ramvir Singh", "Vice Principal", "M.Sc, B.Ed"],
  [4, "Mr. Shri Pal Singh", "T.G.T", "M.Sc, B.Tc"],
  [5, "Mr. Shivanshu Upadhyay", "T.G.T", "BCA, MCA"],
  [6, "Mrs. Geeta Singh", "P.R.T", "M.A, B.Ed"],
  [7, "Mr. Vijay Kumar", "T.G.T", "M.A, B.Ed"],
  [8, "Mrs. Deepika Kulshreshtha", "T.G.T", "M.Sc, B.Ed"],
  [9, "Mr. Deependra Singh", "T.G.T", "B.Tech, B.Ed"],
  [10, "Mrs. Nidhi Sharma", "T.G.T", "M.Sc, B.Ed"],
  [11, "Mrs. Payal Agarwal", "T.G.T", "M.A, B.Ed"],
  [12, "Mrs. Archna Singh", "T.G.T", "B.Tech"],
  [13, "Mrs. Rubi Upadhyay", "P.R.T", "B.Com, N.T.T"],
  [14, "Mrs. Anjana Sharma", "P.R.T", "M.A, B.Ed"],
  [15, "Ms. Mamta Devi", "P.R.T", "M.A, B.Ed"],
  [16, "Mrs. Sandhya Singh", "P.R.T", "M.A, B.Ed"],
  [17, "Mrs. Sudha Sharma", "P.R.T", "M.A, B.Ed"],
  [18, "Mrs. Shalini Yadav", "P.R.T", "B.Sc, B.Ed"],
];

const Teachers = () => (
  <>
    <PageHeader
      eyebrow="Our Faculty"
      title="Teachers Qualification"
      subtitle="Meet our dedicated and qualified team of educators."
    />
    <section className="container pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-2xl border border-border bg-card-soft shadow-soft"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-hero text-primary-foreground">
              <tr>
                <th className="px-4 py-4 text-left font-semibold w-16">S. No.</th>
                <th className="px-4 py-4 text-left font-semibold">Name of Incumbent</th>
                <th className="px-4 py-4 text-left font-semibold">Rank</th>
                <th className="px-4 py-4 text-left font-semibold">Qualification</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map(([n, name, rank, qual], i) => (
                <motion.tr
                  key={n}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.03, 0.4) }}
                  className="border-t border-border transition-colors hover:bg-secondary/40"
                >
                  <td className="px-4 py-3 font-semibold text-primary tabular-nums">{n}</td>
                  <td className="px-4 py-3 font-medium">{name}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {rank}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{qual}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  </>
);

export default Teachers;
