import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

type Row = [string, string | number, string | number];
type FeeBlock = { title: string; rows: Row[]; note?: string };

const blocks: FeeBlock[] = [
  {
    title: "Play Group (New Students)",
    rows: [
      ["Admission Fee", 1500, 1500],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 1000, 500],
      ["Total", 2700, 2200],
    ],
    note: "No School Uniform, No School Bag, Bring Only Water Bottle & Lunch Box.",
  },
  {
    title: "Nursery, LKG, UKG (New Students)",
    rows: [
      ["Admission Fee (One Time)", 2000, 2000],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 900, 450],
      ["Exam Fee (Rs.350*2)", 700, 700],
      ["Diary Fee", 100, 100],
      ["Games & Curricular Activities", 1000, 1000],
      ["Total", 4900, 4450],
    ],
  },
  {
    title: "Class 1 to 5 (New Students)",
    rows: [
      ["Admission Fee (One Time)", 2000, 2000],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 1100, 550],
      ["Exam Fee (Rs.350*2)", 700, 700],
      ["Diary Fee", 100, 100],
      ["Games & Curricular Activities", 1200, 1200],
      ["Computer Fee", 800, 800],
      ["Total", 6100, 5550],
    ],
  },
  {
    title: "Class 6 to 8 (New Students)",
    rows: [
      ["Admission Fee (One Time)", 2500, 2500],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 1200, 600],
      ["Exam Fee (Rs.400*2)", 800, 800],
      ["Diary Fee", 100, 100],
      ["Games & Curricular Activities", 1000, 1000],
      ["Computer Fee", 1200, 1200],
      ["Total", 7000, 6400],
    ],
  },
  {
    title: "Class 9 (New Students)",
    rows: [
      ["Admission Fee (One Time)", 3000, 3000],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 1600, 800],
      ["Exam Fee (Rs.700*2)", 1400, 1400],
      ["Diary Fee", 100, 100],
      ["Games & Curricular Activities", 1600, 1600],
      ["Computer Fee", 1800, 1800],
      ["Total", 9700, 8900],
    ],
  },
  {
    title: "Class 10 (New Students)",
    rows: [
      ["Admission Fee (One Time)", 3000, 3000],
      ["Admission Form Fee", 200, 200],
      ["Monthly Fee", 1600, 800],
      ["Exam Fee (Rs.700*2)", 1400, 1400],
      ["Diary Fee", 100, 100],
      ["Games & Curricular Activities", 1600, 1600],
      ["Computer Fee", 1800, 1800],
      ["Total", 9700, 8900],
    ],
  },
];

const FeeTable = ({ block, index }: { block: FeeBlock; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    className="overflow-hidden rounded-2xl border border-border bg-card-soft shadow-soft"
  >
    <div className="bg-hero px-6 py-4 text-primary-foreground">
      <h3 className="font-serif text-xl font-bold">{block.title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-secondary/60 text-secondary-foreground">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">Details of Fee</th>
            <th className="text-right px-4 py-3 font-semibold">Amount</th>
            <th className="text-right px-4 py-3 font-semibold">Half Monthly Fee of 2nd Child</th>
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r, i) => {
            const isTotal = String(r[0]).toLowerCase() === "total";
            return (
              <tr
                key={i}
                className={`border-t border-border transition-colors ${
                  isTotal
                    ? "bg-primary/10 font-bold text-primary"
                    : "hover:bg-secondary/40"
                }`}
              >
                <td className="px-4 py-3">{r[0]}</td>
                <td className="px-4 py-3 text-right tabular-nums">₹ {r[1].toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 text-right tabular-nums">₹ {r[2].toLocaleString("en-IN")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    {block.note && (
      <div className="border-t border-border bg-accent/15 px-6 py-3 text-sm">
        <span className="font-semibold text-accent-foreground">Note: </span>
        {block.note}
      </div>
    )}
  </motion.div>
);

const Fees = () => (
  <>
    <PageHeader
      eyebrow="Academic Year 2026-27"
      title="Fee Structure"
      subtitle="Transparent fee details for all classes — from Play Group to Class 10."
    />
    <section className="container pb-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-hero p-5 md:p-6 text-primary-foreground shadow-glow flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      >
        <div>
          <div className="text-xs uppercase tracking-widest opacity-90">Limited Seats</div>
          <div className="font-serif text-xl md:text-2xl font-bold">🎓 Admissions Open for Session 2026-27</div>
        </div>
        <span className="rounded-full bg-background/95 text-primary px-5 py-2 text-sm font-bold shadow-soft">
          Apply Today
        </span>
      </motion.div>
    </section>
    <section className="container pb-20">
      <div className="grid gap-6 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <FeeTable key={b.title} block={b} index={i} />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-muted-foreground"
      >
        For any clarification regarding fees, please contact the school office.
      </motion.p>
    </section>
  </>
);

export default Fees;
