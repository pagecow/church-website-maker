import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DEMO_NAV,
  DemoSectionSlug,
  DemoSite,
  TJ_CONTACT,
  getDemoSite,
  getSectionHref,
} from "@/app/demo/sites";

const MINISTRY_ITEMS = [
  {
    imageSrc: "/pastor-preaching.jpg",
    imageAlt: "Pastor preaching in the sanctuary",
    title: "Worship",
  },
  {
    imageSrc: "/kids.webp",
    imageAlt: "Kids ministry students",
    title: "Kids",
  },
  {
    imageSrc: "/small-groups.png",
    imageAlt: "Adults in a small group",
    title: "Small Groups",
  },
  {
    imageSrc: "/students.jpg",
    imageAlt: "Student ministry gathering",
    title: "Students",
  },
];

type DemoPageProps = {
  params: Promise<{
    siteName: string;
    section?: string[];
  }>;
};

function parseSection(section: string[] | undefined): DemoSectionSlug | null {
  if (!section || section.length === 0) return "home";
  const match = DEMO_NAV.find((item) => item.slug === section[0]);
  return match ? match.slug : null;
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { siteName, section } = await params;
  const site = getDemoSite(siteName);
  const currentSection = parseSection(section);
  if (!site || !currentSection) {
    return { title: "Page Not Found" };
  }
  const label =
    DEMO_NAV.find((n) => n.slug === currentSection)?.label ?? "Home";
  return {
    title: `${label} — ${site.name}`,
    description: site.tagline,
  };
}

/* ─── Shared Components ─── */

function ChurchHeader({
  site,
  currentSection,
}: {
  site: DemoSite;
  currentSection: DemoSectionSlug;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={getSectionHref(site.slug, "home")}
            className="flex items-center gap-3"
          >
            <Image
              src="/generic-church-logo.png"
              alt={`${site.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
              style={{ backgroundColor: site.accentColor }}
            />
            <span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">
              {site.name}
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {DEMO_NAV.map((item) => {
              const active = item.slug === currentSection;
              return (
                <Link
                  key={item.slug}
                  href={getSectionHref(site.slug, item.slug)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-slate-900 bg-slate-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

function ChurchFooter({ site }: { site: DemoSite }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/generic-church-logo.png"
                alt={`${site.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
                style={{ backgroundColor: site.accentColor }}
              />
              <span className="text-xl font-bold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Service Times
            </h4>
            <div className="mt-4 space-y-2">
              {site.services.slice(0, 3).map((s) => (
                <p
                  key={`${s.day}-${s.time}-${s.name}`}
                  className="text-sm text-slate-300"
                >
                  {s.name} — {s.day} at {s.time}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h4>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>{site.address}</p>
              <p>{site.phone}</p>
              <p>{site.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Website by{" "}
            <Link
              href="/"
              className="text-slate-400 underline decoration-slate-600 hover:text-white"
            >
              ChurchWebsiteMaker.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white">
            Want a website like this for your church?
          </h3>
          <p className="mt-1 text-blue-100">
            Done-for-you church websites &amp; apps — just $79/month. No tech skills needed.
          </p>
        </div>
        <a
          href={`mailto:${TJ_CONTACT.email}`}
          className="whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:shadow-xl"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}

/* ─── Section Renderers ─── */

function HomeSection({ site }: { site: DemoSite }) {
  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
              {site.denomination} · {site.location}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {site.welcomeText.slice(0, 160)}...
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={getSectionHref(site.slug, "contact")}
                className="rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition hover:shadow-xl"
                style={{ backgroundColor: site.accentColor }}
              >
                Plan Your Visit
              </Link>
              <Link
                href={getSectionHref(site.slug, "about")}
                className="rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: site.accentColor }}
            >
              Welcome
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {site.welcomeHeading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {site.welcomeText}
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: site.accentColor }}
            >
              Join Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Service Times
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {site.services.map((service) => (
              <div
                key={`${service.day}-${service.time}-${service.name}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: site.accentColorLight }}
                  >
                    <svg
                      className="h-6 w-6"
                      style={{ color: site.accentColorDark }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.name}
                    </h3>
                    <p className="mt-1 font-medium" style={{ color: site.accentColor }}>
                      {service.day} at {service.time}
                    </p>
                    {service.description && (
                      <p className="mt-2 text-sm text-slate-500">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Ministries */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: site.accentColor }}
            >
              Church Ministries
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Your Place to Grow
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From Sunday worship to kids and students, there&apos;s a place for every
              season of life.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MINISTRY_ITEMS.map((ministry) => (
              <div
                key={ministry.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={ministry.imageSrc}
                  alt={ministry.imageAlt}
                  width={500}
                  height={340}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xl font-bold uppercase tracking-wide text-white">
                  {ministry.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermons Preview */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: site.accentColor }}
              >
                Latest Messages
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Recent Sermons
              </h2>
            </div>
            <Link
              href={getSectionHref(site.slug, "sermons")}
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
              style={{ color: site.accentColor }}
            >
              View All
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {site.sermons.map((sermon) => (
              <div
                key={sermon.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div
                  className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: site.accentColorLight,
                    color: site.accentColorDark,
                  }}
                >
                  {sermon.series || "Message"}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {sermon.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {sermon.speaker} · {sermon.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {sermon.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href={getSectionHref(site.slug, "sermons")}
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: site.accentColor }}
            >
              View All Sermons
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: site.accentColor }}
              >
                What&apos;s Happening
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Upcoming Events
              </h2>
            </div>
            <Link
              href={getSectionHref(site.slug, "events")}
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
              style={{ color: site.accentColor }}
            >
              View All
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {site.events.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: site.accentColorLight }}
                >
                  <p
                    className="text-sm font-bold"
                    style={{ color: site.accentColorDark }}
                  >
                    {event.date}
                  </p>
                  <p className="text-xs" style={{ color: site.accentColorDark }}>
                    {event.time}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {event.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Our App */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: site.accentColor }}
              >
                Stay Connected
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Download Our Church App
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Take {site.name.replace(" (Demo)", "")} with you everywhere. Watch sermons, submit prayer requests,
                stay up to date on events, and connect with your church family — all from your phone.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/download-app-on-apple.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-11 w-auto"
                />
                <Image
                  src="/download-app-on-google.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-11 w-auto"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/download-our-app.png"
                alt="Church app on multiple devices"
                width={500}
                height={380}
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: site.accentColorLight }}
              >
                <svg className="h-6 w-6" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {site.mission}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: site.accentColorLight }}
              >
                <svg className="h-6 w-6" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {site.vision}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutSection({ site }: { site: DemoSite }) {
  return (
    <>
      {/* Page Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Our Story
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            {site.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: site.accentColor }}
            >
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Meet Our Pastor
            </h2>
            <div className="mx-auto mt-10 max-w-md">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold text-white"
                  style={{ backgroundColor: site.accentColor }}
                >
                  {site.pastor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {site.pastorTitle} {site.pastor}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{site.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: site.accentColor }}
              >
                Our Mission
              </p>
              <p className="mt-4 text-xl font-medium leading-relaxed text-slate-700">
                {site.mission}
              </p>
            </div>
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: site.accentColor }}
              >
                Our Vision
              </p>
              <p className="mt-4 text-xl font-medium leading-relaxed text-slate-700">
                {site.vision}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SermonsSection({ site }: { site: DemoSite }) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Messages
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Sermons
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            Listen to recent messages from {site.name}. Be encouraged, challenged, and equipped by the Word of God.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            {site.sermons.map((sermon) => (
              <div
                key={sermon.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    {sermon.series && (
                      <span
                        className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: site.accentColorLight,
                          color: site.accentColorDark,
                        }}
                      >
                        {sermon.series}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-slate-900">
                      {sermon.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      {sermon.speaker} · {sermon.date}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {sermon.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: site.accentColorLight }}
                    >
                      <svg className="h-8 w-8" style={{ color: site.accentColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EventsSection({ site }: { site: DemoSite }) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Get Involved
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            There&apos;s always something happening at {site.name}. Find an event
            and get connected.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-8">
            {site.events.map((event) => (
              <div
                key={event.title}
                className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className="flex flex-col items-center justify-center px-8 py-6 text-center md:w-48"
                    style={{ backgroundColor: site.accentColorLight }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: site.accentColorDark }}
                    >
                      {event.date}
                    </p>
                    <p
                      className="mt-1 text-xs"
                      style={{ color: site.accentColorDark }}
                    >
                      {event.time}
                    </p>
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="text-xl font-bold text-slate-900">
                      {event.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>
                      {event.location}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BeliefsSection({ site }: { site: DemoSite }) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            What We Believe
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Statement of Beliefs
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            The core convictions that shape who we are and how we live as a church family.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-8">
            {site.beliefs.map((belief, i) => (
              <div
                key={belief.title}
                className="flex gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: site.accentColor }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {belief.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {belief.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection({ site }: { site: DemoSite }) {
  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${site.heroGradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Reach Out
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            We&apos;d love to hear from you. Whether you have a question, a prayer
            request, or just want to say hello — reach out anytime.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-100 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Church Information
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: site.accentColorLight }}
                    >
                      <svg className="h-5 w-5" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {site.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: site.accentColorLight }}
                    >
                      <svg className="h-5 w-5" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {site.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: site.accentColorLight }}
                    >
                      <svg className="h-5 w-5" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {site.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: site.accentColorLight }}
                    >
                      <svg className="h-5 w-5" style={{ color: site.accentColorDark }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Pastor</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {site.pastorTitle} {site.pastor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="rounded-2xl border border-slate-100 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Service Times
                </h3>
                <div className="mt-6 space-y-3">
                  {site.services.map((s) => (
                    <div
                      key={`${s.day}-${s.time}-${s.name}`}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-slate-700">{s.name}</span>
                      <span className="text-slate-500">
                        {s.day}, {s.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder & CTA */}
            <div className="space-y-8">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex h-64 items-center justify-center bg-slate-100">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
                    <p className="mt-2 text-sm text-slate-400">
                      Map · {site.address}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-8 text-white"
                style={{ backgroundColor: site.accentColor }}
              >
                <h3 className="text-xl font-bold">Plan Your Visit</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  We&apos;d love to welcome you this Sunday! Just show up — no
                  registration needed. Come as you are. You&apos;ll find friendly
                  faces and a warm welcome waiting for you.
                </p>
                <Link
                  href={getSectionHref(site.slug, "home")}
                  className="mt-6 inline-block rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/30"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Page Component ─── */

export default async function DemoSitePage({ params }: DemoPageProps) {
  const { siteName, section } = await params;
  const site = getDemoSite(siteName);
  const currentSection = parseSection(section);

  if (!site || !currentSection) notFound();

  const sectionMap: Record<DemoSectionSlug, React.ReactNode> = {
    home: <HomeSection site={site} />,
    about: <AboutSection site={site} />,
    sermons: <SermonsSection site={site} />,
    events: <EventsSection site={site} />,
    "statement-of-beliefs": <BeliefsSection site={site} />,
    contact: <ContactSection site={site} />,
  };

  return (
    <div className="min-h-screen bg-white">
      <ChurchHeader site={site} currentSection={currentSection} />
      {sectionMap[currentSection]}
      <CTABanner />
      <ChurchFooter site={site} />
    </div>
  );
}
