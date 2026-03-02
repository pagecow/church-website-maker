export type DemoSectionSlug =
  | "home"
  | "about"
  | "statement-of-beliefs"
  | "contact";

export type DemoSite = {
  slug: string;
  name: string;
  denomination: string;
  location: string;
  heroColorA: string;
  heroColorB: string;
  tagline: string;
  pastor: string;
  about: string[];
  beliefs: string[];
  services: Array<{
    name: string;
    day: string;
    time: string;
  }>;
  address: string;
};

export const TJ_CONTACT = {
  email: "tj@churchwebsitemaker.com",
  phone: "251-508-7250",
};

export const DEMO_NAV: Array<{ slug: DemoSectionSlug; label: string }> = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "statement-of-beliefs", label: "Statement of Beliefs" },
  { slug: "contact", label: "Contact" },
];

export const DEMO_SITES: DemoSite[] = [
  {
    slug: "grace-harbor-church",
    name: "Grace Harbor Church",
    denomination: "Non-Denominational",
    location: "Mobile, Alabama",
    heroColorA: "#0f172a",
    heroColorB: "#0284c7",
    tagline: "Helping people find hope in Christ every single week.",
    pastor: "Pastor Daniel Brooks",
    about: [
      "Grace Harbor Church is a warm and welcoming church family focused on Jesus, prayer, and practical Bible teaching.",
      "We love serving our city, supporting families, and creating a church home where people can grow in faith together.",
    ],
    beliefs: [
      "We believe the Bible is the inspired Word of God and our final authority for faith and life.",
      "We believe salvation is by grace through faith in Jesus Christ alone.",
      "We believe in the Father, Son, and Holy Spirit as one God in three persons.",
      "We believe the Church is called to worship, discipleship, evangelism, and compassion.",
    ],
    services: [
      { name: "Sunday Worship", day: "Sunday", time: "9:00 AM" },
      { name: "Sunday Worship", day: "Sunday", time: "10:45 AM" },
      { name: "Midweek Bible Study", day: "Wednesday", time: "6:30 PM" },
    ],
    address: "2410 Dauphin St, Mobile, AL 36606",
  },
  {
    slug: "new-hope-baptist",
    name: "New Hope Baptist Church",
    denomination: "Baptist",
    location: "Pensacola, Florida",
    heroColorA: "#1f2937",
    heroColorB: "#1d4ed8",
    tagline: "Rooted in truth, growing in grace, reaching our community.",
    pastor: "Pastor Michael Carter",
    about: [
      "New Hope Baptist Church exists to glorify God by making disciples who love Jesus and love people.",
      "We are a multigenerational church committed to biblical preaching, heartfelt worship, and faithful outreach.",
    ],
    beliefs: [
      "We believe in the authority and sufficiency of Scripture.",
      "We believe in believer's baptism and the Lord's Supper as ordinances of the Church.",
      "We believe Christ will return and establish His kingdom in fullness.",
      "We believe every believer is called to ministry and mission.",
    ],
    services: [
      { name: "Sunday School", day: "Sunday", time: "9:30 AM" },
      { name: "Sunday Worship", day: "Sunday", time: "10:45 AM" },
      { name: "Prayer Service", day: "Wednesday", time: "6:00 PM" },
    ],
    address: "4212 North W St, Pensacola, FL 32505",
  },
  {
    slug: "river-of-life-fellowship",
    name: "River of Life Fellowship",
    denomination: "Pentecostal",
    location: "Birmingham, Alabama",
    heroColorA: "#111827",
    heroColorB: "#0d9488",
    tagline: "A Spirit-filled church for every generation.",
    pastor: "Pastor Angela Rivera",
    about: [
      "River of Life Fellowship is a vibrant church where worship is passionate, prayer is central, and community is strong.",
      "We are committed to helping people encounter God and walk in purpose every day.",
    ],
    beliefs: [
      "We believe the Holy Spirit empowers believers for holy living and effective witness.",
      "We believe Jesus is Savior, Healer, Baptizer, and Coming King.",
      "We believe in the gifts of the Spirit operating in biblical order and love.",
      "We believe every person matters to God and has a place in His Church.",
    ],
    services: [
      { name: "Sunday Celebration", day: "Sunday", time: "10:00 AM" },
      { name: "Youth Night", day: "Wednesday", time: "7:00 PM" },
      { name: "Prayer Gathering", day: "Friday", time: "6:30 PM" },
    ],
    address: "9324 Crestwood Blvd, Birmingham, AL 35210",
  },
  {
    slug: "st-matthews-community",
    name: "St. Matthew's Community Church",
    denomination: "Traditional",
    location: "Savannah, Georgia",
    heroColorA: "#312e81",
    heroColorB: "#7c3aed",
    tagline: "Historic faith. Present hope. Future mission.",
    pastor: "Rev. Thomas Caldwell",
    about: [
      "St. Matthew's Community Church is a historic congregation with a heart for modern ministry and meaningful connection.",
      "Our church is a place where Scripture, sacrament, and service come together for everyday life.",
    ],
    beliefs: [
      "We believe Jesus Christ is Lord and the center of all we do.",
      "We believe the Church is called to love God and neighbor with compassion and truth.",
      "We believe prayer, worship, and generosity are central to Christian life.",
      "We believe in the unity of believers around the gospel of Christ.",
    ],
    services: [
      { name: "Traditional Service", day: "Sunday", time: "8:30 AM" },
      { name: "Family Service", day: "Sunday", time: "10:30 AM" },
      { name: "Choir Rehearsal", day: "Thursday", time: "6:30 PM" },
    ],
    address: "110 E 37th St, Savannah, GA 31401",
  },
  {
    slug: "cornerstone-bible-church",
    name: "Cornerstone Bible Church",
    denomination: "Presbyterian",
    location: "Hattiesburg, Mississippi",
    heroColorA: "#0f172a",
    heroColorB: "#475569",
    tagline: "Built on Christ. Grounded in Scripture. Sent in love.",
    pastor: "Pastor Jordan Wells",
    about: [
      "Cornerstone Bible Church is dedicated to expository preaching, gospel-centered discipleship, and joyful fellowship.",
      "We desire to equip believers to know Christ deeply and serve our neighbors faithfully.",
    ],
    beliefs: [
      "We believe in the sovereignty of God in creation, redemption, and mission.",
      "We believe the gospel transforms individuals, families, and communities.",
      "We believe in the priesthood of all believers and the importance of discipleship.",
      "We believe in Christ-centered worship shaped by Scripture.",
    ],
    services: [
      { name: "Sunday Worship", day: "Sunday", time: "10:00 AM" },
      { name: "Evening Gathering", day: "Sunday", time: "5:00 PM" },
      { name: "Community Groups", day: "Wednesday", time: "6:30 PM" },
    ],
    address: "2201 Hardy St, Hattiesburg, MS 39401",
  },
  {
    slug: "cedar-grove-chapel",
    name: "Cedar Grove Chapel",
    denomination: "Methodist",
    location: "Montgomery, Alabama",
    heroColorA: "#1e3a8a",
    heroColorB: "#0f766e",
    tagline: "A welcoming church family growing in grace together.",
    pastor: "Rev. Sarah Mitchell",
    about: [
      "Cedar Grove Chapel is a local church with a big heart for worship, missions, and practical care.",
      "Whether you're new to faith or returning to church, you'll find encouragement and community here.",
    ],
    beliefs: [
      "We believe in the transforming grace of God revealed in Jesus Christ.",
      "We believe Scripture guides us in holy living and faithful service.",
      "We believe the local church should reflect Christ's love in our neighborhoods.",
      "We believe prayer and discipleship are essential for spiritual growth.",
    ],
    services: [
      { name: "Sunday Worship", day: "Sunday", time: "9:30 AM" },
      { name: "Kids Ministry", day: "Sunday", time: "9:30 AM" },
      { name: "Bible Study", day: "Wednesday", time: "6:00 PM" },
    ],
    address: "715 Vaughn Rd, Montgomery, AL 36106",
  },
];

export function getDemoSite(slug: string): DemoSite | undefined {
  return DEMO_SITES.find((site) => site.slug === slug);
}

export function getSectionHref(siteSlug: string, section: DemoSectionSlug): string {
  return section === "home" ? `/demo/${siteSlug}` : `/demo/${siteSlug}/${section}`;
}
