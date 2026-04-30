import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, GraduationCap, Facebook } from "lucide-react";
import { ThemeSwitcher } from "./ThemeProvider";
import { motion, useScroll, useSpring } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/fees", label: "Fee Structure" },
  { to: "/teachers", label: "Teachers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left bg-hero shadow-glow"
      />

      {/* decorative blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="blob h-96 w-96 -left-20 -top-20" style={{ background: "hsl(var(--primary) / 0.4)" }} />
        <div className="blob h-[28rem] w-[28rem] right-[-6rem] top-40" style={{ background: "hsl(var(--accent) / 0.35)", animationDelay: "-6s" }} />
        <div className="blob h-80 w-80 left-1/3 bottom-0" style={{ background: "hsl(var(--primary-glow) / 0.35)", animationDelay: "-12s" }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/40 glass">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-hero text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-base font-bold">Engineer's Colony</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sr. Sec. School</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-hero shadow-soft"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{n.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button
              className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-card"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <div className="container flex flex-col py-3">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive ? "bg-secondary text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      <main className="animate-fadeUp">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-border/60 bg-card/50 backdrop-blur">
        <div className="container py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-hero text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-serif font-bold">Engineer's Colony</div>
                <div className="text-xs text-muted-foreground">Senior Secondary School</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Quarsi By Pass Road, Aligarh, Uttar Pradesh</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-3">Follow Us</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-hero text-primary-foreground shadow-soft transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="container py-4 text-center text-sm text-muted-foreground">
            Made by{" "}
            <a
              href="https://www.neetesh.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gradient hover:underline"
            >
              Neetesh Sharma
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
