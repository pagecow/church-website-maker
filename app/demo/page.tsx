import Link from "next/link";
import type { Metadata } from "next";
import { DEMO_SITES, TJ_CONTACT } from "@/app/demo/sites";

export const metadata: Metadata = {
  title: "Demo Church Websites — ChurchWebsiteMaker.com",
  description:
    "Browse beautifully designed church website examples. Each demo includes Home, About, Sermons, Events, Beliefs, and Contact pages.",
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              ChurchWebsiteMaker
            </span>
          </Link>
          <a
            href={`mailto:${TJ_CONTACT.email}`}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Back to ChurchWebsiteMaker.com
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Church Website Examples
            </h1>
            <p className="mt-6 text-lg text-blue-100/70">
              Each of these demo websites includes a Home page, About page,
              Sermons page, Events page, Statement of Beliefs, and Contact
              page — just like we&apos;d build for your church.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DEMO_SITES.map((site) => (
              <Link
                key={site.slug}
                href={`/demo/${site.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div
                  className={`flex h-52 flex-col justify-end bg-gradient-to-br ${site.heroGradient} p-6`}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    {site.denomination}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {site.name}
                  </h2>
                  <p className="mt-1 text-sm text-white/60">{site.location}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm italic text-slate-500">
                    &ldquo;{site.tagline}&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      Home
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      About
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      Sermons
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      Events
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      Beliefs
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      Contact
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Explore this website</span>
                    <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for your own church website?
          </h2>
          <p className="mt-4 text-lg text-blue-100/70">
            I&apos;ll build something just as beautiful for your church — custom
            designed, fully managed, and ready in days.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${TJ_CONTACT.email}`}
              className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg transition hover:shadow-xl"
            >
              Get Your Church Online — $49/mo
            </a>
          </div>
          <p className="mt-4 text-sm text-blue-200/50">
            Contact TJ: {TJ_CONTACT.email} · {TJ_CONTACT.phone}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ChurchWebsiteMaker.com · Built
            with care by TJ McCarty
          </p>
        </div>
      </footer>
    </div>
  );
}
