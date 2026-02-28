import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] text-white shadow-lg">
            <span className="material-symbols-outlined text-2xl">child_care</span>
          </div> */}
          <Link href="/" className="text-2xl font-medium tracking-tight text-slate-900">
            Womb<span className="text-[var(--brand-blue)]">To</span>
            <span className="text-[var(--brand-pink)]">18</span>
          </Link>
        </div>
        <nav className="hidden flex-1 justify-center gap-10 lg:flex">
          {[
            { name: "Programs", href: "/programs", hoverClass: "hover:text-[var(--brand-blue)]" },
            { name: "Blogs", href: "/blogs", hoverClass: "hover:text-[var(--brand-pink)]" },
            { name: "Transparency", href: "/transparency", hoverClass: "hover:text-[var(--brand-green)]" },
            { name: "Projects", href: "/projects", hoverClass: "hover:text-[var(--brand-purple)]" },
            { name: "Reports", href: "/reports", hoverClass: "hover:text-[var(--brand-green)]" },
            { name: "About", href: "/about", hoverClass: "hover:text-[var(--brand-orange)]" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href || "#"}
              className={`text-sm font-normal text-slate-600 transition-colors ${item.hoverClass}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button className="hidden text-sm font-normal text-slate-600 sm:block">
            Login
          </button>
          <Link 
            href="/donate" 
            className="rounded-full bg-[var(--brand-pink)] px-7 py-3 text-sm font-normal text-white shadow-xl shadow-pink-500/20 hover:scale-105 transition-transform active:scale-95"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}