import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DEMO_NAV, DemoSectionSlug, TJ_CONTACT, getDemoSite, getSectionHref } from "@/app/demo/sites";
import SitePreviewGraphic from "@/app/demo/SitePreviewGraphic";

type DemoPageProps = {
  params: Promise<{
    siteName: string;
    section?: string[];
  }>;
};

function parseSection(section: string[] | undefined): DemoSectionSlug | null {
  if (!section || section.length === 0) {
    return "home";
  }

  const firstSegment = section[0];
  const matchingSection = DEMO_NAV.find((item) => item.slug === firstSegment);
  return matchingSection ? matchingSection.slug : null;
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { siteName, section } = await params;
  const site = getDemoSite(siteName);
  const currentSection = parseSection(section);

  if (!site || !currentSection) {
    return {
      title: "Demo site not found | ChurchWebsiteMaker.com",
    };
  }

  const sectionLabel = DEMO_NAV.find((item) => item.slug === currentSection)?.label ?? "Home";

  return {
    title: `${site.name} - ${sectionLabel} (Demo)`,
    description: `${site.name} demo website built for ChurchWebsiteMaker.com concierge MVP.`,
  };
}

function renderSectionContent(section: DemoSectionSlug, siteName: string) {
  const site = getDemoSite(siteName);
  if (!site) {
    return null;
  }

  if (section === "home") {
    return (
      <div className="space-y-8">
        <section className="rounded-xl bg-slate-900 p-8 text-white">
          <p className="text-sm uppercase tracking-wider text-sky-200">{site.denomination}</p>
          <h1 className="mt-2 text-4xl font-bold">{site.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-100">{site.tagline}</p>
          <p className="mt-4 text-sky-200">
            {site.location} • {site.pastor}
          </p>
          <p className="mt-3 text-sm text-slate-200">
            This demo includes the kind of layout TJ can build and maintain for your church.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Site Preview Image</h2>
          <p className="mt-2 text-slate-700">
            Custom hero graphics and branding are included in your done-for-you setup.
          </p>
          <div className="mt-4">
            <SitePreviewGraphic
              churchName={site.name}
              lineOne={site.tagline}
              lineTwo={`${site.location} • ${site.denomination}`}
              colorA={site.heroColorA}
              colorB={site.heroColorB}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Service Times</h2>
          <ul className="mt-4 space-y-3">
            {site.services.map((service) => (
              <li key={`${service.day}-${service.time}-${service.name}`} className="rounded-lg bg-slate-50 p-4">
                <p className="font-semibold">{service.name}</p>
                <p className="text-slate-700">
                  {service.day} at {service.time}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }

  if (section === "about") {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-7">
        <h1 className="text-3xl font-bold">About {site.name}</h1>
        <div className="mt-5 space-y-4 text-slate-800">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  }

  if (section === "statement-of-beliefs") {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-7">
        <h1 className="text-3xl font-bold">Statement of Beliefs</h1>
        <ul className="mt-5 space-y-3">
          {site.beliefs.map((belief) => (
            <li key={belief} className="rounded-lg bg-slate-50 p-4 text-slate-800">
              {belief}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-7">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-slate-700">
        This is a demo contact page. No form is used on purpose for this MVP.
      </p>
      <div className="mt-6 space-y-3 text-slate-800">
        <p>
          <strong>Church address:</strong> {site.address}
        </p>
        <p>
          <strong>Pastor:</strong> {site.pastor}
        </p>
      </div>

      <div className="mt-8 rounded-lg bg-sky-100 p-5">
        <p className="font-semibold text-slate-900">Want this style of site for your church?</p>
        <p className="mt-2">
          Contact TJ directly:{" "}
          <a className="underline" href={`mailto:${TJ_CONTACT.email}`}>
            {TJ_CONTACT.email}
          </a>{" "}
          •{" "}
          <a className="underline" href="tel:+12515087250">
            {TJ_CONTACT.phone}
          </a>
        </p>
        <p className="mt-3 text-sm text-slate-700">
          TJ can also help get your church listed on Google Maps as part of launch setup.
        </p>
      </div>
    </section>
  );
}

export default async function DemoSitePage({ params }: DemoPageProps) {
  const { siteName, section } = await params;
  const site = getDemoSite(siteName);
  const currentSection = parseSection(section);

  if (!site || !currentSection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="text-sm font-medium text-sky-800 underline">
            ← Back to ChurchWebsiteMaker.com
          </Link>
          <p className="text-sm text-slate-600">Demo site: {site.name}</p>
        </div>

        <nav className="mb-8 rounded-xl border border-slate-200 bg-white p-3">
          <ul className="flex flex-wrap gap-2">
            {DEMO_NAV.map((item) => {
              const isActive = item.slug === currentSection;
              return (
                <li key={item.slug}>
                  <Link
                    href={getSectionHref(site.slug, item.slug)}
                    className={`inline-block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {renderSectionContent(currentSection, site.slug)}
      </div>
    </main>
  );
}
