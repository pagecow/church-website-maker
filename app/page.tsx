import Link from "next/link";
import { DEMO_SITES, TJ_CONTACT, getSectionHref } from "@/app/demo/sites";
import SitePreviewGraphic from "@/app/demo/SitePreviewGraphic";

const offerItems = [
  "Custom church website built for your ministry",
  "Domain registration and setup handled for you",
  "Google Maps listing setup so local families can find you",
  "Simple, clean logo created for your church",
  "Custom preview images and branding graphics included",
  "Mobile-friendly design for phones, tablets, and desktop",
  "Monthly updates by email — no tech headaches",
  "Fast, personal support directly from TJ",
];

const faqItems = [
  {
    question: "Do I need to learn any software?",
    answer:
      "No. This is fully done-for-you. Just email or call me with what you need and I'll handle it.",
  },
  {
    question: "What does $49/month include?",
    answer:
      "Website build, domain setup help, logo creation, and ongoing monthly update support.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most churches can have a ready-to-review website in just a few business days.",
  },
  {
    question: "Who will I be working with?",
    answer:
      "You'll work with me directly — TJ. I have 10+ years of web design experience and I personally oversee your church site.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 inline-flex rounded-full bg-sky-400/15 px-4 py-1 text-sm font-semibold text-sky-200">
            ChurchWebsiteMaker.com - Concierge MVP
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A Godsend for busy churches:
            <br />
            <span className="text-sky-300">
              I&apos;ll handle your entire website for $49/month.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
            I&apos;m <strong>TJ</strong>. I have <strong>10+ years of web design experience</strong>.
            If your church needs a professional website without the stress, this is for you. I build
            it, help with domain setup, get your church listed on Google Maps, create your logo, and
            handle your updates so your team can focus on ministry.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${TJ_CONTACT.email}`}
              className="rounded-lg bg-sky-400 px-6 py-3 text-center text-base font-semibold text-slate-900 transition hover:bg-sky-300"
            >
              Email TJ to Get Started
            </a>
            <a
              href="tel:+12515087250"
              className="rounded-lg border border-white/40 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Call {TJ_CONTACT.phone}
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            No complicated forms. No tech setup on your end. I do the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900">Everything included in the $49/month plan</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {offerItems.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-sky-700">Step 1</p>
              <h3 className="mt-2 text-xl font-semibold">Reach out to TJ</h3>
              <p className="mt-2 text-slate-700">
                Email or call with your church details and what you want on your site.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-sky-700">Step 2</p>
              <h3 className="mt-2 text-xl font-semibold">I build everything</h3>
              <p className="mt-2 text-slate-700">
                I design your site, set up the domain, create your logo, and help get your church
                listed on Google Maps before launch.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-6">
              <p className="text-sm font-semibold text-sky-700">Step 3</p>
              <h3 className="mt-2 text-xl font-semibold">You stay focused on ministry</h3>
              <p className="mt-2 text-slate-700">
                Need updates later? Send me an email and I handle the changes for you.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900">See 6 church website demos</h2>
        <p className="mt-3 text-slate-700">
          Browse demo websites with Home, About, Statement of Beliefs, and Contact pages.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DEMO_SITES.map((site) => (
            <article key={site.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">{site.name}</h3>
              <p className="mt-1 text-sm text-slate-600">
                {site.denomination} • {site.location}
              </p>
              <p className="mt-3 text-sm text-slate-700">{site.tagline}</p>
              <div className="mt-4">
                <SitePreviewGraphic
                  churchName={site.name}
                  lineOne={site.tagline}
                  lineTwo={`${site.location} • ${site.denomination}`}
                  colorA={site.heroColorA}
                  colorB={site.heroColorB}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={getSectionHref(site.slug, "home")}
                  className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  View Demo
                </Link>
                <Link
                  href={getSectionHref(site.slug, "statement-of-beliefs")}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100"
                >
                  Beliefs Page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-sky-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900">Ready to hand this off and be done?</h2>
          <p className="mt-3 max-w-2xl text-slate-800">
            If your church needs a website and you want someone trustworthy to just handle it, reach out
            today. I&apos;ll take care of the details and keep it simple.
          </p>
          <p className="mt-5 text-lg font-semibold">
            Contact TJ:{" "}
            <a href={`mailto:${TJ_CONTACT.email}`} className="text-sky-900 underline">
              {TJ_CONTACT.email}
            </a>{" "}
            •{" "}
            <a href="tel:+12515087250" className="text-sky-900 underline">
              {TJ_CONTACT.phone}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
