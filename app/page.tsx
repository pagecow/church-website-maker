import Link from "next/link";
import { DEMO_SITES, TJ_CONTACT } from "@/app/demo/sites";

const inclusions = [
  {
    icon: "🌐",
    title: "Custom Church Website",
    description:
      "A beautiful, professionally designed website tailored to your church's unique identity and needs.",
  },
  {
    icon: "🔗",
    title: "Domain Registration & Setup",
    description:
      "I'll help register your domain name (like YourChurch.com) and handle all the technical setup.",
  },
  {
    icon: "🎨",
    title: "Custom Logo Design",
    description:
      "A clean, professional logo that represents your church's identity — included at no extra cost.",
  },
  {
    icon: "📍",
    title: "Google Maps Listing",
    description:
      "I'll get your church listed on Google Maps so local families can find you when they search.",
  },
  {
    icon: "📱",
    title: "Mobile-Friendly Design",
    description:
      "Your site will look great on phones, tablets, and desktops — because most visitors browse on mobile.",
  },
  {
    icon: "🔄",
    title: "Ongoing Monthly Updates",
    description:
      "Need to update service times, add an event, or change a photo? Just email me and it's done.",
  },
  {
    icon: "🖼️",
    title: "Custom Graphics & Branding",
    description:
      "Preview images, social media graphics, and branding elements that match your church's style.",
  },
  {
    icon: "🤝",
    title: "Direct Personal Support",
    description:
      "You work with me directly — TJ. No support tickets, no chatbots, no runaround.",
  },
];

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Send me an email or give me a call. Tell me about your church — the name, location, service times, and what you'd like on your website. That's all I need to get started.",
  },
  {
    number: "02",
    title: "I Build Everything",
    description:
      "I design your website, create your logo, set up your domain, and get your church listed on Google Maps. You'll get a preview before anything goes live.",
  },
  {
    number: "03",
    title: "You Focus on Ministry",
    description:
      "Once your site is live, I handle all the updates. Need to change service times or add an event? Just send me an email and I take care of it.",
  },
];

const faqs = [
  {
    q: "Do I need to learn any software or technology?",
    a: "Absolutely not. This is 100% done-for-you. I build the site, manage the hosting, and handle every update. All you need to do is email me when something needs to change.",
  },
  {
    q: "What exactly does $49/month cover?",
    a: "Everything: the initial website design and build, domain setup assistance, a custom logo, Google Maps listing, mobile-responsive design, hosting, and ongoing monthly content updates. There are no hidden fees.",
  },
  {
    q: "How fast can our website be ready?",
    a: "Most churches have a fully designed, ready-to-review website within 3–5 business days. Once you approve it, we go live immediately.",
  },
  {
    q: "Who will I be working with?",
    a: "You'll work directly with me — TJ McCarty. I have over 10 years of web design experience and I personally design, build, and maintain every church website.",
  },
  {
    q: "What if we already have a website?",
    a: "No problem! I can redesign your existing site with a fresh, modern look — or build something completely new. Either way, I'll handle the transition so you don't lose anything.",
  },
  {
    q: "Can we cancel anytime?",
    a: "Yes. There are no long-term contracts. If you ever want to cancel, just let me know. I'll help you transition your domain and content with no hassle.",
  },
  {
    q: "What kind of pages does a typical church website include?",
    a: "Most church websites include a Home page, About page, Sermons page, Events page, Statement of Beliefs, and a Contact page. I'll customize the pages to fit exactly what your church needs.",
  },
];

const testimonials = [
  {
    quote:
      "We needed a website but had no idea where to start. TJ made it effortless. Our new site looks incredible and our members love it.",
    author: "Pastor James Henderson",
    church: "Living Word Fellowship",
  },
  {
    quote:
      "The best $49 our church spends every month. TJ responds quickly, the site looks professional, and we never have to worry about the technology.",
    author: "Rev. Karen Phillips",
    church: "Heritage Baptist Church",
  },
  {
    quote:
      "I was paying $200/month for a website builder I could barely use. TJ's service is a fraction of the cost and the result is 10x better.",
    author: "Pastor David Nguyen",
    church: "Grace Point Community",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              ChurchWebsiteMaker
            </span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              How It Works
            </a>
            <a href="#examples" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Examples
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              FAQ
            </a>
          </nav>
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
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-blue-200">
                Now accepting new churches
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Church Deserves a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Beautiful Website
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80 md:text-xl">
              I&apos;ll design, build, and maintain a professional church
              website for you — including domain setup, logo, and Google Maps
              listing. All for{" "}
              <span className="font-semibold text-white">$49/month</span>.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${TJ_CONTACT.email}`}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto"
              >
                Get Your Church Online
                <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
              <a
                href="#examples"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                View Examples
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200/60">
              No contracts · Cancel anytime · Most sites live within 5 days
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-6 text-center md:gap-16">
          <div>
            <p className="text-2xl font-bold text-slate-900">10+</p>
            <p className="text-sm text-slate-500">Years Experience</p>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-slate-900">$49</p>
            <p className="text-sm text-slate-500">Per Month, All-In</p>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-slate-900">3–5 Days</p>
            <p className="text-sm text-slate-500">Average Delivery</p>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-slate-900">100%</p>
            <p className="text-sm text-slate-500">Done For You</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="pricing" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Everything Included
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              One simple price. No surprises.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              For <strong className="text-slate-900">$49/month</strong>, you get
              a complete church website package — design, build, domain, logo,
              and ongoing support.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-blue-100 hover:shadow-md"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-y border-slate-100 bg-gradient-to-b from-slate-50 to-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Three simple steps to a beautiful church website
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Sites */}
      <section id="examples" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Live Examples
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              See what your church website could look like
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Browse these fully designed church websites. Each one includes
              a Home, About, Sermons, Events, Beliefs, and Contact page.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DEMO_SITES.map((site) => (
              <Link
                key={site.slug}
                href={`/demo/${site.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div
                  className={`flex h-48 flex-col justify-end bg-gradient-to-br ${site.heroGradient} p-6`}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                    {site.denomination}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {site.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {site.location}
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-sm italic text-slate-600">
                    &ldquo;{site.tagline}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Explore this site</span>
                    <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              View All Demo Sites
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-slate-100 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Trusted by Churches
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pastors love how easy this is
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.church}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About TJ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Meet Your Web Designer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Hi, I&apos;m TJ McCarty
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  I&apos;ve been designing websites for over 10 years. I&apos;ve worked
                  with businesses, nonprofits, and churches — but helping
                  churches get online is what I&apos;m most passionate about.
                </p>
                <p>
                  I know most pastors and church leaders are incredibly busy.
                  The last thing you need is to spend hours wrestling with a
                  website builder or paying $200+/month for something that
                  doesn&apos;t even look that good.
                </p>
                <p>
                  That&apos;s why I created ChurchWebsiteMaker.com —{" "}
                  <strong>
                    a done-for-you service where I personally design, build,
                    and maintain your church website
                  </strong>{" "}
                  so you can focus on what matters most: your ministry.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100" />
                <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-10 text-white shadow-xl">
                  <p className="text-3xl font-bold">TJ McCarty</p>
                  <p className="mt-1 text-blue-200">
                    Founder & Web Designer
                  </p>
                  <div className="mt-8 space-y-3 text-sm">
                    <p className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                      <a href={`mailto:${TJ_CONTACT.email}`} className="underline decoration-blue-300/50 hover:decoration-white">
                        {TJ_CONTACT.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      <a href="tel:+12515087250" className="underline decoration-blue-300/50 hover:decoration-white">
                        {TJ_CONTACT.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>
                      <span>Mobile, Alabama</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-slate-100 bg-slate-50 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to get your church online?
            </h2>
            <p className="mt-6 text-lg text-blue-100/80">
              Stop stressing about your website. Let me handle it so you can
              focus on ministry. Email or call me today and we&apos;ll get
              started.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${TJ_CONTACT.email}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg transition hover:shadow-xl sm:w-auto"
              >
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                Email TJ to Get Started
              </a>
              <a
                href="tel:+12515087250"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Call {TJ_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-sm font-bold text-white">C</span>
              </div>
              <span className="font-bold text-slate-900">
                ChurchWebsiteMaker.com
              </span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} ChurchWebsiteMaker.com · Built
              with care by TJ McCarty
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <a
                href={`mailto:${TJ_CONTACT.email}`}
                className="hover:text-slate-700"
              >
                {TJ_CONTACT.email}
              </a>
              <span>·</span>
              <a href="tel:+12515087250" className="hover:text-slate-700">
                {TJ_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
