export type DemoSectionSlug =
  | "home"
  | "about"
  | "sermons"
  | "events"
  | "statement-of-beliefs"
  | "contact";

export type Sermon = {
  title: string;
  speaker: string;
  date: string;
  series?: string;
  description: string;
};

export type ChurchEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export type DemoSite = {
  slug: string;
  name: string;
  denomination: string;
  location: string;
  heroGradient: string;
  accentColor: string;
  accentColorLight: string;
  accentColorDark: string;
  tagline: string;
  welcomeHeading: string;
  welcomeText: string;
  pastor: string;
  pastorTitle: string;
  about: string[];
  mission: string;
  vision: string;
  beliefs: Array<{ title: string; text: string }>;
  services: Array<{ name: string; day: string; time: string; description?: string }>;
  sermons: Sermon[];
  events: ChurchEvent[];
  address: string;
  phone: string;
  email: string;
  socialLinks?: { facebook?: string; youtube?: string; instagram?: string };
};

export const TJ_CONTACT = {
  email: "tj@churchwebsitemaker.com",
  phone: "251-508-7250",
};

export const DEMO_NAV: Array<{ slug: DemoSectionSlug; label: string }> = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "sermons", label: "Sermons" },
  { slug: "events", label: "Events" },
  { slug: "statement-of-beliefs", label: "Beliefs" },
  { slug: "contact", label: "Contact" },
];

export const DEMO_SITES: DemoSite[] = [
  {
    slug: "grace-harbor-church",
    name: "Grace Harbor Church (Demo)",
    denomination: "Non-Denominational",
    location: "Mobile, Alabama",
    heroGradient: "from-slate-900 via-blue-950 to-sky-900",
    accentColor: "#0ea5e9",
    accentColorLight: "#e0f2fe",
    accentColorDark: "#0369a1",
    tagline: "Anchored in Grace. Overflowing with Hope.",
    welcomeHeading: "Welcome Home",
    welcomeText:
      "Whether you're taking your first steps in faith or have been walking with Jesus for decades, Grace Harbor is a place where you belong. We're a church family that believes God's grace can transform every life, every family, and every community.",
    pastor: "Daniel Brooks",
    pastorTitle: "Lead Pastor",
    about: [
      "Grace Harbor Church was planted in 2008 with a simple vision: to create a place where everyday people can experience extraordinary grace. What began as a small gathering of 30 people in a rented community center has grown into a vibrant church family of over 400.",
      "Our church sits in the heart of Mobile, Alabama, and we believe that the local church is the hope of the world. We're passionate about relevant, biblical teaching that applies to real life, and we're committed to being the hands and feet of Jesus in our community.",
      "Every Sunday, you'll experience engaging worship, practical Bible teaching, and a warm community that genuinely cares about you. Our children's and youth ministries create safe, fun environments where the next generation can discover their faith.",
    ],
    mission:
      "To help people find and follow Jesus by creating an environment of grace, truth, and community.",
    vision:
      "We envision a church where every person experiences God's transforming grace, grows in authentic community, and lives on mission to serve others.",
    beliefs: [
      {
        title: "The Bible",
        text: "We believe the Bible is the inspired, authoritative Word of God. It is our final authority for faith, practice, and everyday life.",
      },
      {
        title: "God",
        text: "We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit — each fully God, each personally distinct.",
      },
      {
        title: "Salvation",
        text: "We believe salvation is a free gift of God, received by grace through faith in Jesus Christ alone. No amount of good works can earn it.",
      },
      {
        title: "The Church",
        text: "We believe the Church is the Body of Christ on earth, called to worship God, make disciples, serve the hurting, and share the Gospel.",
      },
      {
        title: "Baptism & Communion",
        text: "We practice believer's baptism by immersion as a public declaration of faith, and we celebrate Communion regularly as a reminder of Christ's sacrifice.",
      },
      {
        title: "Eternity",
        text: "We believe in the personal, visible return of Jesus Christ and the eternal destiny of every person — everlasting life with God or eternal separation from Him.",
      },
    ],
    services: [
      {
        name: "Sunday Worship",
        day: "Sunday",
        time: "9:00 AM",
        description: "Traditional worship with hymns and choir",
      },
      {
        name: "Sunday Worship",
        day: "Sunday",
        time: "10:45 AM",
        description: "Contemporary worship with full band",
      },
      {
        name: "Midweek Bible Study",
        day: "Wednesday",
        time: "6:30 PM",
        description: "In-depth verse-by-verse study through books of the Bible",
      },
      {
        name: "Youth Group",
        day: "Wednesday",
        time: "6:30 PM",
        description: "For students grades 6–12",
      },
    ],
    sermons: [
      {
        title: "The Anchor Holds",
        speaker: "Pastor Daniel Brooks",
        date: "February 23, 2026",
        series: "Unshakable Faith",
        description:
          "When the storms of life rage, our faith in Christ is the anchor that holds. Discover how to stand firm when everything around you shakes.",
      },
      {
        title: "From Fear to Faith",
        speaker: "Pastor Daniel Brooks",
        date: "February 16, 2026",
        series: "Unshakable Faith",
        description:
          "Fear can paralyze us, but faith propels us forward. Learn how to replace anxiety with trust in a God who is always faithful.",
      },
      {
        title: "Grace That Transforms",
        speaker: "Pastor Daniel Brooks",
        date: "February 9, 2026",
        series: "Amazing Grace",
        description:
          "Grace isn't just undeserved favor — it's the power of God to transform every area of your life from the inside out.",
      },
    ],
    events: [
      {
        title: "Easter Sunday Celebration",
        date: "April 5, 2026",
        time: "9:00 AM & 10:45 AM",
        location: "Main Sanctuary",
        description:
          "Join us for a powerful Easter celebration with special music, an inspiring message of hope, and activities for the whole family.",
      },
      {
        title: "Community Serve Day",
        date: "March 21, 2026",
        time: "8:00 AM – 12:00 PM",
        location: "Meet at Church Parking Lot",
        description:
          "We're heading out into our city to serve! Projects include park cleanup, visiting nursing homes, and preparing meals for families in need.",
      },
      {
        title: "Men's Breakfast",
        date: "March 14, 2026",
        time: "7:30 AM",
        location: "Fellowship Hall",
        description:
          "Great food, strong coffee, and a short devotional. A Saturday morning built for men who want to grow in faith and friendship.",
      },
    ],
    address: "2410 Dauphin St, Mobile, AL 36606",
    phone: "(251) 555-0182",
    email: "info@graceharborchurch.com",
  },
  {
    slug: "new-hope-baptist",
    name: "New Hope Baptist Church (Demo)",
    denomination: "Baptist",
    location: "Pensacola, Florida",
    heroGradient: "from-indigo-950 via-indigo-900 to-blue-800",
    accentColor: "#6366f1",
    accentColorLight: "#e0e7ff",
    accentColorDark: "#4338ca",
    tagline: "Rooted in Truth. Growing in Grace. Reaching Our Community.",
    welcomeHeading: "You're Invited",
    welcomeText:
      "New Hope Baptist Church is a place where the Bible is taught, lives are changed, and no one walks alone. Whether you're exploring faith for the first time or looking for a church home, we'd love to welcome you this Sunday.",
    pastor: "Michael Carter",
    pastorTitle: "Senior Pastor",
    about: [
      "For over 45 years, New Hope Baptist Church has been a pillar of faith in the Pensacola community. Founded in 1981, our church has grown from a small fellowship of believers into a multigenerational family united by a passion for God's Word and a heart for the lost.",
      "Under the leadership of Pastor Michael Carter, New Hope has seen remarkable growth — not just in numbers, but in spiritual depth and community impact. We operate a food pantry that serves over 200 families each month, partner with local schools, and send mission teams both domestically and internationally.",
      "We believe the local church should be the most loving, welcoming, and Christ-centered place in any community. That's what we strive to be every single day.",
    ],
    mission:
      "To glorify God by making disciples who love Jesus, love people, and love serving our world.",
    vision:
      "To be a lighthouse of hope and transformation in Pensacola and beyond, equipping every member for a life of purpose and mission.",
    beliefs: [
      {
        title: "Scripture",
        text: "We believe in the verbal, plenary inspiration of the Bible — both Old and New Testaments — as the inerrant Word of God and the supreme authority for faith and practice.",
      },
      {
        title: "The Trinity",
        text: "We believe in one God eternally existing as Father, Son, and Holy Spirit — three persons, one essence, co-equal and co-eternal.",
      },
      {
        title: "Salvation by Grace",
        text: "We believe that salvation is the gift of God, offered freely to all who repent and place their faith in Jesus Christ as Lord and Savior.",
      },
      {
        title: "Believer's Baptism",
        text: "We practice baptism by immersion as an outward declaration of an inward transformation. It is an act of obedience, not a requirement for salvation.",
      },
      {
        title: "The Lord's Supper",
        text: "We observe the Lord's Supper as a memorial of Christ's death, a celebration of our redemption, and an anticipation of His return.",
      },
      {
        title: "The Great Commission",
        text: "We believe every believer is called to share the Gospel, make disciples, and be on mission — locally and to the ends of the earth.",
      },
    ],
    services: [
      {
        name: "Sunday School",
        day: "Sunday",
        time: "9:30 AM",
        description: "Classes for all ages — children through adults",
      },
      {
        name: "Morning Worship",
        day: "Sunday",
        time: "10:45 AM",
        description: "Blended worship with choir, praise team, and biblical preaching",
      },
      {
        name: "Evening Service",
        day: "Sunday",
        time: "6:00 PM",
        description: "Deeper teaching and extended prayer time",
      },
      {
        name: "Prayer Meeting & Bible Study",
        day: "Wednesday",
        time: "6:30 PM",
        description: "Mid-week encouragement and intercessory prayer",
      },
    ],
    sermons: [
      {
        title: "Standing on the Promises",
        speaker: "Pastor Michael Carter",
        date: "February 23, 2026",
        series: "Foundations",
        description:
          "God's promises are not wishful thinking — they are bedrock truth. Learn how to build your life on the unshakable promises of Scripture.",
      },
      {
        title: "The Cost of Discipleship",
        speaker: "Pastor Michael Carter",
        date: "February 16, 2026",
        series: "Foundations",
        description:
          "Following Jesus is free, but it's not cheap. What does it really mean to take up your cross and follow Him daily?",
      },
      {
        title: "Born Again: What It Means",
        speaker: "Associate Pastor James Williams",
        date: "February 9, 2026",
        description:
          "Jesus told Nicodemus he must be born again. What did He mean, and what does that look like in our lives today?",
      },
    ],
    events: [
      {
        title: "Vacation Bible School Registration",
        date: "Opens March 1, 2026",
        time: "All Day",
        location: "Online & Church Office",
        description:
          "VBS is June 8–12! Register your kids ages 4–12 for a week of Bible stories, games, crafts, and music.",
      },
      {
        title: "Women's Spring Retreat",
        date: "April 17–19, 2026",
        time: "Friday 5 PM – Sunday 12 PM",
        location: "Camp Timpoochee, Niceville, FL",
        description:
          "A weekend of rest, renewal, and fellowship for women of all ages. Guest speaker: Author Lisa Chen.",
      },
      {
        title: "Deacon Ordination Service",
        date: "March 8, 2026",
        time: "10:45 AM",
        location: "Main Sanctuary",
        description:
          "Join us as we ordain three new deacons to serve our church family. A fellowship lunch will follow the service.",
      },
    ],
    address: "4212 North W St, Pensacola, FL 32505",
    phone: "(850) 555-0247",
    email: "office@newhopebc.com",
  },
  {
    slug: "river-of-life-fellowship",
    name: "River of Life Fellowship (Demo)",
    denomination: "Pentecostal",
    location: "Birmingham, Alabama",
    heroGradient: "from-emerald-950 via-teal-900 to-emerald-800",
    accentColor: "#14b8a6",
    accentColorLight: "#ccfbf1",
    accentColorDark: "#0f766e",
    tagline: "Where the Spirit Moves and Lives Are Changed.",
    welcomeHeading: "Come Experience God's Presence",
    welcomeText:
      "River of Life Fellowship is a Spirit-filled church where passionate worship, bold prayer, and genuine community come together. No matter where you are in your journey, you'll find a place here. Come as you are — and leave transformed.",
    pastor: "Andrew Rivera",
    pastorTitle: "Senior Pastor",
    about: [
      "River of Life Fellowship was born out of a prayer meeting in 1996. Pastor Andrew Rivera and Pastor Luis Rivera felt called to plant a church that would be a spiritual home for people hungry for more of God's presence.",
      "What started in a living room with 12 people has become a dynamic congregation of over 600, with vibrant worship, active small groups, and a missions program that reaches four countries. Our church is known for its passionate worship, diverse community, and commitment to the power of prayer.",
      "We believe the Holy Spirit is active today — healing, delivering, empowering, and transforming. If you're looking for a church where God is free to move, we invite you to visit and experience His presence for yourself.",
    ],
    mission:
      "To be a Spirit-empowered community that helps people encounter God, grow in faith, and impact the world.",
    vision:
      "We envision a city and region transformed by the Gospel through a church that operates in the fullness of the Holy Spirit.",
    beliefs: [
      {
        title: "The Word of God",
        text: "We believe the Bible is the inspired, infallible Word of God — the ultimate authority for all belief and conduct.",
      },
      {
        title: "Jesus Christ",
        text: "We believe Jesus Christ is the Son of God, born of a virgin, who lived a sinless life, died for our sins, rose from the dead, and is coming again.",
      },
      {
        title: "The Holy Spirit",
        text: "We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues, and that the gifts of the Spirit are active and available for believers today.",
      },
      {
        title: "Divine Healing",
        text: "We believe that healing is provided in the atonement of Christ and is available to every believer through prayer and faith.",
      },
      {
        title: "Salvation",
        text: "We believe salvation is available to all who confess Jesus as Lord and believe in their heart that God raised Him from the dead.",
      },
      {
        title: "The Second Coming",
        text: "We believe in the imminent, personal return of Jesus Christ and the resurrection of both the saved and the lost.",
      },
    ],
    services: [
      {
        name: "Sunday Celebration",
        day: "Sunday",
        time: "10:00 AM",
        description: "High-energy worship and Spirit-led preaching",
      },
      {
        name: "Sunday Evening Service",
        day: "Sunday",
        time: "6:00 PM",
        description: "Deeper worship and ministry time",
      },
      {
        name: "Youth Night",
        day: "Wednesday",
        time: "7:00 PM",
        description: "Worship, games, and teaching for teens",
      },
      {
        name: "Prayer & Fire Night",
        day: "Friday",
        time: "7:00 PM",
        description: "Extended worship and corporate prayer",
      },
    ],
    sermons: [
      {
        title: "Rivers in the Desert",
        speaker: "Pastor Andrew Rivera",
        date: "February 23, 2026",
        series: "Breakthrough Season",
        description:
          "God promised to do a new thing — to make rivers in the desert. What does that promise look like in your life right now?",
      },
      {
        title: "The Fire Inside",
        speaker: "Pastor Luis Rivera",
        date: "February 16, 2026",
        series: "Breakthrough Season",
        description:
          "The Holy Spirit wants to reignite the fire inside you. Don't settle for a smoldering coal when God wants a blazing flame.",
      },
      {
        title: "Walking by Faith, Not by Sight",
        speaker: "Pastor Andrew Rivera",
        date: "February 9, 2026",
        description:
          "When God calls you to step out, the path doesn't always make sense. Learn how to trust Him when you can't see the outcome.",
      },
    ],
    events: [
      {
        title: "Night of Worship & Prayer",
        date: "March 7, 2026",
        time: "7:00 PM – 10:00 PM",
        location: "Main Sanctuary",
        description:
          "An extended evening of worship, prayer, and ministry. Come expecting God to move in a powerful way.",
      },
      {
        title: "Youth Conference: IGNITE",
        date: "April 24–26, 2026",
        time: "Friday 6 PM – Sunday 12 PM",
        location: "River of Life Campus",
        description:
          "Three days of worship, powerful speakers, and life-changing encounters for teens. Registration now open.",
      },
      {
        title: "Missions Sunday",
        date: "March 15, 2026",
        time: "10:00 AM",
        location: "Main Sanctuary",
        description:
          "Hear updates from our mission partners in Guatemala, Nigeria, and the Philippines. Special offering for missions.",
      },
    ],
    address: "9324 Crestwood Blvd, Birmingham, AL 35210",
    phone: "(205) 555-0319",
    email: "info@rolchurch.org",
  },
  {
    slug: "st-matthews-community",
    name: "St. Matthew's Community Church (Demo)",
    denomination: "Traditional / Mainline",
    location: "Savannah, Georgia",
    heroGradient: "from-violet-950 via-purple-900 to-indigo-800",
    accentColor: "#8b5cf6",
    accentColorLight: "#ede9fe",
    accentColorDark: "#6d28d9",
    tagline: "A Legacy of Faith. A Heart for Today. A Hope for Tomorrow.",
    welcomeHeading: "All Are Welcome Here",
    welcomeText:
      "For over a century, St. Matthew's has been a place of worship, fellowship, and service in the heart of Savannah. We honor the richness of our tradition while embracing the needs of a changing world. Come join us — you'll feel at home.",
    pastor: "Thomas Caldwell",
    pastorTitle: "Reverend",
    about: [
      "St. Matthew's Community Church was founded in 1914 and has served the Savannah community for over 110 years. Our beautiful historic sanctuary, with its stained glass windows and pipe organ, reflects a deep commitment to worship that has endured through generations.",
      "Under the leadership of Reverend Thomas Caldwell, St. Matthew's has expanded its outreach while maintaining the liturgical depth and reverence that our members love. We operate a community food bank, host AA and counseling groups, and partner with Habitat for Humanity.",
      "Our worship blends timeless hymns with thoughtful, exegetical preaching. We believe that tradition isn't about being stuck in the past — it's about carrying forward the treasures of faith for future generations.",
    ],
    mission:
      "To worship God with reverence, serve our neighbors with compassion, and carry the historic Christian faith into the future.",
    vision:
      "A church where ancient faith meets modern mission, and where every person — regardless of background — finds a spiritual home.",
    beliefs: [
      {
        title: "God the Creator",
        text: "We believe in God the Father Almighty, maker of heaven and earth, who sustains all creation by His power and love.",
      },
      {
        title: "Jesus Christ, Our Lord",
        text: "We believe in Jesus Christ, God's only Son — born of the Virgin Mary, crucified, risen, ascended, and coming again to judge the living and the dead.",
      },
      {
        title: "The Holy Spirit",
        text: "We believe in the Holy Spirit, the Lord and giver of life, who proceeds from the Father and Son, and who empowers the Church for worship and witness.",
      },
      {
        title: "The Sacraments",
        text: "We observe the sacraments of Baptism and Holy Communion as means of grace instituted by Christ Himself.",
      },
      {
        title: "The Church Universal",
        text: "We believe in the holy catholic Church — the communion of saints across all ages and traditions, united by faith in Christ.",
      },
      {
        title: "The Life to Come",
        text: "We believe in the forgiveness of sins, the resurrection of the body, and life everlasting through Jesus Christ our Lord.",
      },
    ],
    services: [
      {
        name: "Traditional Worship",
        day: "Sunday",
        time: "8:30 AM",
        description: "Liturgical worship with hymns and pipe organ",
      },
      {
        name: "Family Worship",
        day: "Sunday",
        time: "10:30 AM",
        description: "Blended worship welcoming families and children",
      },
      {
        name: "Wednesday Evening Prayer",
        day: "Wednesday",
        time: "6:00 PM",
        description: "Evening prayer service with Scripture reading",
      },
      {
        name: "Choir Rehearsal",
        day: "Thursday",
        time: "6:30 PM",
        description: "All voices welcome — no audition required",
      },
    ],
    sermons: [
      {
        title: "A Faith That Endures",
        speaker: "Rev. Thomas Caldwell",
        date: "February 23, 2026",
        series: "Hebrews: The Better Way",
        description:
          "Hebrews 11 gives us a hall of faith — ordinary people who trusted God in extraordinary circumstances. What can we learn from their example?",
      },
      {
        title: "The Table of Grace",
        speaker: "Rev. Thomas Caldwell",
        date: "February 16, 2026",
        description:
          "Communion is more than a ritual — it's an invitation to remember, to give thanks, and to be sent out as agents of God's grace.",
      },
      {
        title: "The God Who Sees",
        speaker: "Associate Pastor Ethan Park",
        date: "February 9, 2026",
        description:
          "From Hagar in the wilderness to your struggles today, God sees you. He knows your name, your pain, and your future.",
      },
    ],
    events: [
      {
        title: "Lenten Organ Concert",
        date: "March 22, 2026",
        time: "4:00 PM",
        location: "Main Sanctuary",
        description:
          "A beautiful afternoon of sacred music featuring our pipe organ and guest instrumentalists. Free and open to the public.",
      },
      {
        title: "Community Food Drive",
        date: "March 7–14, 2026",
        time: "Drop off anytime during office hours",
        location: "Church Office",
        description:
          "Help us stock the shelves of our community food pantry. Most needed: canned vegetables, peanut butter, and cereal.",
      },
      {
        title: "Palm Sunday Processional",
        date: "March 29, 2026",
        time: "10:30 AM",
        location: "Starting in the Courtyard",
        description:
          "Children and families are invited to join our Palm Sunday processional into the sanctuary. Palms will be provided!",
      },
    ],
    address: "110 E 37th St, Savannah, GA 31401",
    phone: "(912) 555-0174",
    email: "office@stmatthewssavannah.org",
  },
  {
    slug: "cornerstone-bible-church",
    name: "Cornerstone Bible Church (Demo)",
    denomination: "Reformed / Presbyterian",
    location: "Hattiesburg, Mississippi",
    heroGradient: "from-stone-900 via-stone-800 to-amber-900",
    accentColor: "#d97706",
    accentColorLight: "#fef3c7",
    accentColorDark: "#92400e",
    tagline: "Christ Alone. Scripture Alone. Grace Alone.",
    welcomeHeading: "Welcome to Cornerstone",
    welcomeText:
      "Cornerstone Bible Church exists to know Christ and make Him known. We are a community of Christ-followers committed to deep, faithful exposition of God's Word, gospel-centered living, and genuine fellowship. We'd love to have you join us.",
    pastor: "Jordan Wells",
    pastorTitle: "Teaching Pastor",
    about: [
      "Cornerstone Bible Church was founded in 2012 by a small group of families who wanted to plant a church rooted in expository preaching, Reformed theology, and warm community. From the beginning, our conviction has been that the Word of God is sufficient for all of life and godliness.",
      "Under the teaching ministry of Pastor Jordan Wells, our church has grown to over 250 members. We're known in Hattiesburg for our commitment to verse-by-verse Bible teaching, robust small group ministry, and a culture of hospitality where visitors quickly become friends.",
      "We believe the Gospel is the power of God for salvation and the motivation for everything we do — from corporate worship on Sunday to serving the poor on Saturday. If you love the Bible and want to be part of a church that takes it seriously, you've found your home.",
    ],
    mission:
      "To glorify God by preaching Christ from all of Scripture, building one another up in love, and reaching our city with the Gospel.",
    vision:
      "A Christ-exalting, Bible-saturated, mission-minded church that shapes the spiritual landscape of Hattiesburg.",
    beliefs: [
      {
        title: "Sola Scriptura",
        text: "We believe the 66 books of the Bible are the inspired, inerrant, and sufficient Word of God — the ultimate authority for all faith, life, and practice.",
      },
      {
        title: "The Sovereignty of God",
        text: "We believe God is sovereign over all creation, providence, and salvation. He ordains all things for His glory and our good.",
      },
      {
        title: "Salvation by Grace Alone",
        text: "We believe sinners are saved by grace alone, through faith alone, in Christ alone — not by human merit or effort.",
      },
      {
        title: "The Person of Christ",
        text: "We believe Jesus Christ is fully God and fully man, born of a virgin, who lived a perfect life, died as a substitutionary sacrifice, and rose bodily from the grave.",
      },
      {
        title: "The Priesthood of Believers",
        text: "We believe every Christian has direct access to God through Christ and is called to serve in the body of believers.",
      },
      {
        title: "The Return of Christ",
        text: "We believe in the personal, visible, glorious return of Jesus Christ, the bodily resurrection of the dead, and the final judgment.",
      },
    ],
    services: [
      {
        name: "Sunday Worship",
        day: "Sunday",
        time: "10:00 AM",
        description: "Expository preaching, congregational singing, and the Lord's Supper (1st Sunday)",
      },
      {
        name: "Sunday School",
        day: "Sunday",
        time: "9:00 AM",
        description: "Adult, youth, and children's classes",
      },
      {
        name: "Evening Gathering",
        day: "Sunday",
        time: "5:00 PM",
        description: "Prayer, fellowship, and deeper study",
      },
      {
        name: "Community Groups",
        day: "Wednesday",
        time: "6:30 PM",
        description: "Small groups meeting in homes throughout Hattiesburg",
      },
    ],
    sermons: [
      {
        title: "The Sufficiency of Scripture",
        speaker: "Pastor Jordan Wells",
        date: "February 23, 2026",
        series: "2 Timothy: Finishing Well",
        description:
          "Paul's final letter reminds us that all Scripture is breathed out by God and is profitable for teaching, reproof, correction, and training in righteousness.",
      },
      {
        title: "Fight the Good Fight",
        speaker: "Pastor Jordan Wells",
        date: "February 16, 2026",
        series: "2 Timothy: Finishing Well",
        description:
          "The Christian life is a battle — but it's a battle we fight with confidence because Christ has already won the victory.",
      },
      {
        title: "Adopted by Grace",
        speaker: "Elder Mark Thompson",
        date: "February 9, 2026",
        description:
          "What does it mean to be adopted into God's family? More than a metaphor — it's the reality of every believer's standing before God.",
      },
    ],
    events: [
      {
        title: "Theology on Tap",
        date: "March 12, 2026",
        time: "7:00 PM",
        location: "Southern Pines Brewing Co.",
        description:
          "Informal theology discussion over coffee or craft drinks. This month's topic: 'What is the Gospel?' Open to everyone.",
      },
      {
        title: "Church Picnic & Baptisms",
        date: "April 18, 2026",
        time: "11:30 AM",
        location: "Longleaf Trace Park",
        description:
          "Join us after worship for a potluck picnic and outdoor baptism service. Bring a dish to share and a lawn chair!",
      },
      {
        title: "Good Friday Service",
        date: "April 3, 2026",
        time: "7:00 PM",
        location: "Main Sanctuary",
        description:
          "A reflective, solemn service remembering the crucifixion of our Lord through Scripture readings, hymns, and communion.",
      },
    ],
    address: "2201 Hardy St, Hattiesburg, MS 39401",
    phone: "(601) 555-0293",
    email: "info@cornerstonebible.church",
  },
  {
    slug: "cedar-grove-chapel",
    name: "Cedar Grove Chapel (Demo)",
    denomination: "United Methodist",
    location: "Montgomery, Alabama",
    heroGradient: "from-blue-950 via-cyan-900 to-teal-800",
    accentColor: "#0891b2",
    accentColorLight: "#cffafe",
    accentColorDark: "#155e75",
    tagline: "Open Hearts. Open Minds. Open Doors.",
    welcomeHeading: "You Belong Here",
    welcomeText:
      "Cedar Grove Chapel is a caring church family where everyone has a place at the table. We come from different backgrounds but share one faith, one hope, and one calling — to love God and love our neighbors. We can't wait to meet you.",
    pastor: "Samuel Mitchell",
    pastorTitle: "Reverend",
    about: [
      "Cedar Grove Chapel has been a part of the Montgomery community since 1952. Originally a small rural church on the outskirts of town, the city has grown around us — and so has our congregation and our mission.",
      "Today, under the pastoral leadership of Rev. Samuel Mitchell, Cedar Grove Chapel is a thriving congregation of over 350 members with active children's, youth, and adult ministries. We're deeply involved in social justice initiatives, support a local after-school tutoring program, and maintain a free clothing closet for families in need.",
      "Our worship style blends traditional hymns with contemporary songs, and our sermons aim to connect timeless Scripture with the real-life challenges our members face every day. If you're looking for a church that's friendly, faithful, and forward-thinking, Cedar Grove is the place for you.",
    ],
    mission:
      "To make disciples of Jesus Christ for the transformation of the world through worship, compassion, and justice.",
    vision:
      "A diverse, welcoming church that reflects Christ's love through radical hospitality, bold generosity, and faithful witness in Montgomery and beyond.",
    beliefs: [
      {
        title: "Grace",
        text: "We believe in the transforming grace of God revealed in Jesus Christ — prevenient, justifying, and sanctifying grace available to every person.",
      },
      {
        title: "Scripture",
        text: "We believe the Holy Bible is the primary authority for faith and practice, illuminated by tradition, reason, and experience.",
      },
      {
        title: "The Sacraments",
        text: "We celebrate Baptism (including infant baptism) and Holy Communion as means of grace that nourish and strengthen us for the Christian journey.",
      },
      {
        title: "Christian Community",
        text: "We believe the local church is the body of Christ, called to reflect His love through worship, fellowship, and service to the world.",
      },
      {
        title: "Social Holiness",
        text: "We believe personal holiness and social justice are inseparable — that faith must bear fruit in compassion, mercy, and advocacy for the vulnerable.",
      },
      {
        title: "The Kingdom of God",
        text: "We believe God's kingdom is both a present reality and a future hope, and that the Church is called to participate in God's ongoing work of renewal.",
      },
    ],
    services: [
      {
        name: "Sunday Worship",
        day: "Sunday",
        time: "9:30 AM",
        description: "Blended worship with hymns, praise songs, and a children's moment",
      },
      {
        name: "Kids Ministry",
        day: "Sunday",
        time: "9:30 AM",
        description: "Age-appropriate Bible lessons and activities for K–5th grade",
      },
      {
        name: "Adult Sunday School",
        day: "Sunday",
        time: "11:00 AM",
        description: "Multiple classes on topics from Parenting to Psalms",
      },
      {
        name: "Wednesday Night Fellowship",
        day: "Wednesday",
        time: "6:00 PM",
        description: "Potluck dinner followed by prayer and Bible study",
      },
    ],
    sermons: [
      {
        title: "Open Hearts, Open Hands",
        speaker: "Rev. Samuel Mitchell",
        date: "February 23, 2026",
        series: "The Way of Love",
        description:
          "Love isn't just a feeling — it's a practice. How do we open our hearts and hands to people who are different from us?",
      },
      {
        title: "The God of Second Chances",
        speaker: "Rev. Samuel Mitchell",
        date: "February 16, 2026",
        series: "The Way of Love",
        description:
          "From Peter's denial to our own failures, the Gospel is the story of a God who never gives up on His people.",
      },
      {
        title: "Justice and Joy",
        speaker: "Rev. David Kim (Guest Speaker)",
        date: "February 9, 2026",
        description:
          "Can the pursuit of justice be joyful? Discover how God's vision for a just world is intimately connected to the joy of the Gospel.",
      },
    ],
    events: [
      {
        title: "Easter Egg Hunt",
        date: "April 4, 2026",
        time: "10:00 AM",
        location: "Church Lawn",
        description:
          "A fun-filled morning for kids ages 2–10 with thousands of eggs, bounce houses, face painting, and the Easter story.",
      },
      {
        title: "Free Clothing Closet Day",
        date: "March 14, 2026",
        time: "9:00 AM – 1:00 PM",
        location: "Fellowship Hall",
        description:
          "Gently used clothing, shoes, and coats available free of charge to anyone in need. No registration required.",
      },
      {
        title: "Young Adults Game Night",
        date: "March 20, 2026",
        time: "6:30 PM",
        location: "Youth Room",
        description:
          "Board games, snacks, and great conversation for ages 18–30. Bring a friend!",
      },
    ],
    address: "715 Vaughn Rd, Montgomery, AL 36106",
    phone: "(334) 555-0186",
    email: "hello@cedargrovechapel.org",
  },
];

export function getDemoSite(slug: string): DemoSite | undefined {
  return DEMO_SITES.find((site) => site.slug === slug);
}

export function getSectionHref(
  siteSlug: string,
  section: DemoSectionSlug
): string {
  return section === "home"
    ? `/demo/${siteSlug}`
    : `/demo/${siteSlug}/${section}`;
}
