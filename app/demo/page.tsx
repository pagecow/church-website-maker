import Link from "next/link";
import { DEMO_SITES, getSectionHref } from "@/app/demo/sites";

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">Church Demo Websites</h1>
        <p className="mt-3 text-slate-700">
          These are sample churches built for the ChurchWebsiteMaker.com concierge MVP.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {DEMO_SITES.map((site) => (
            <article key={site.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-semibold">{site.name}</h2>
              <p className="mt-1 text-sm text-slate-600">
                {site.denomination} • {site.location}
              </p>
              <p className="mt-3 text-slate-700">{site.tagline}</p>
              <Link
                href={getSectionHref(site.slug, "home")}
                className="mt-5 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
              >
                Open demo site
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
