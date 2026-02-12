import type {
  AdministrationProfile,
  CabinetMember,
  FeaturedCard,
  GalleryItem,
  KeyInitiative,
  NavigationGroup,
  NewsArticle,
  VideoItem,
  Priority,
  SocialLink,
  TimelineMilestone,
  LivestreamEvent,
} from "@/lib/types";

export const topFeaturedCards: FeaturedCard[] = [
  {
    title: "The Great Healthcare Plan",
    image: "/images/featured/healthcare.jpg",
    href: "/priorities#maha",
    alt: "President and advisors gathered during a healthcare policy briefing",
  },
  {
    title: "365 Days of Wins",
    image: "/images/featured/wins.jpg",
    href: "/news",
    alt: "President speaking from a White House briefing stage",
  },
  {
    title: "About President Trump",
    image: "/images/featured/about-trump.png",
    href: "/administration#trump",
    alt: "Official presidential portrait of President Donald J. Trump",
  },
  {
    title: "About Vice President Vance",
    image: "/images/featured/about-vance.jpg",
    href: "/administration#vance",
    alt: "Official portrait of Vice President JD Vance",
  },
  {
    title: "Investment Announcements",
    image: "/images/featured/investments.jpg",
    href: "/news",
    alt: "Economic meeting with private sector leaders",
  },
  {
    title: "Read the Latest (WH Wire)",
    image: "/images/featured/latest-wire.jpg",
    href: "/news",
    alt: "White House communications team at a briefing",
  },
  {
    title: "Contact The White House",
    image: "/images/featured/contact.jpg",
    href: "/contact",
    alt: "Visitors walking near the White House North Grounds",
  },
];

export const priorities: Priority[] = [
  {
    id: "ai",
    title: "Lead the World in AI",
    description:
      "The administration is accelerating domestic chip, compute, and model deployment so America sets the global pace in artificial intelligence. The strategy pairs innovation speed with national security safeguards.",
    image: "/images/priorities/ai.jpg",
    href: "/priorities#ai",
    alt: "Technology facility illustrating American AI infrastructure",
  },
  {
    id: "economy",
    title: "Grow the Economy",
    description:
      "From tax relief for working families to large-scale domestic investment, the economic agenda targets wage growth, lower costs, and stronger industrial capacity. The focus is production, paychecks, and purchasing power.",
    image: "/images/priorities/economy.jpg",
    href: "/priorities#economy",
    alt: "Manufacturing and logistics activity representing economic growth",
  },
  {
    id: "security",
    title: "Strengthen National Security",
    description:
      "Peace through strength means rebuilding readiness, modernizing deterrence, and supporting U.S. forces with clear strategic direction. The administration prioritizes border integrity, military capability, and allied leverage.",
    image: "/images/priorities/security.jpg",
    href: "/priorities#security",
    alt: "U.S. military operations image representing national defense readiness",
  },
  {
    id: "doge",
    title: "Reform Government (DOGE)",
    description:
      "The Department of Government Efficiency drive is aimed at cutting waste, simplifying compliance, and modernizing agency operations. The goal is measurable savings and faster service for citizens.",
    image: "/images/priorities/doge.jpg",
    href: "/priorities#doge",
    alt: "Federal buildings in Washington symbolizing government reform",
  },
  {
    id: "maha",
    title: "Make America Healthy Again",
    description:
      "The MAHA agenda combines chronic disease prevention, food transparency, and competitive healthcare markets. Policy emphasis is on affordability, outcomes, and family-centered health choices.",
    image: "/images/priorities/maha.jpg",
    href: "/priorities#maha",
    alt: "Families and food-access imagery representing public health priorities",
  },
  {
    id: "border",
    title: "Secure the Border",
    description:
      "Border policy centers on operational control, faster removals for criminal entrants, and tighter asylum integrity standards. Resources are concentrated on interdiction, manpower, and surveillance.",
    image: "/images/priorities/border.jpg",
    href: "/priorities#border",
    alt: "U.S. southern border enforcement operations",
  },
  {
    id: "safety",
    title: "Support Public Safety",
    description:
      "Public safety initiatives prioritize support for law enforcement, anti-gang operations, and prosecution of repeat violent offenders. The administration frames safety as a core quality-of-life issue.",
    image: "/images/priorities/safety.jpg",
    href: "/priorities#safety",
    alt: "Law-enforcement training scene representing community safety efforts",
  },
  {
    id: "liberty",
    title: "Protect Religious Liberty",
    description:
      "The White House states that faith communities should be free to serve, gather, and speak without ideological coercion. Policy work centers on conscience protections and equal treatment under law.",
    image: "/images/priorities/liberty.jpg",
    href: "/priorities#liberty",
    alt: "Faith event at the White House focused on religious liberty",
  },
  {
    id: "energy",
    title: "Unleash American Energy",
    description:
      "Energy policy emphasizes permitting reform, domestic production, and grid reliability. The administration positions abundant American energy as central to growth, security, and lower household costs.",
    image: "/images/priorities/energy.jpg",
    href: "/priorities#energy",
    alt: "Energy infrastructure scene supporting American energy production",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "lab-leak",
    title: "Lab Leak Assessment Task Force Delivers Interim National Security Report",
    excerpt:
      "Senior officials outlined a coordinated biosecurity review, prioritizing transparency, research safeguards, and strategic preparedness.",
    category: "Articles",
    date: "February 6, 2026",
    image: "/images/news/lab-leak.jpg",
    alt: "National security meeting at the White House",
    featured: true,
  },
  {
    id: "365-days",
    title: "365 Days of Wins: A Year of Economic Expansion and Border Enforcement",
    excerpt:
      "The administration highlighted private investment commitments, declining energy costs, and accelerated infrastructure approvals.",
    category: "Briefings & Statements",
    date: "January 21, 2026",
    image: "/images/news/365-days.jpg",
    alt: "White House officials standing during a policy event",
    featured: true,
  },
  {
    id: "jfk-files",
    title: "The JFK Files: New Digitization Initiative Expands Public Access",
    excerpt:
      "A joint records initiative announced phased releases and upgraded search tools for researchers and families.",
    category: "Fact Sheets",
    date: "January 15, 2026",
    image: "/images/news/jfk-files.jpg",
    alt: "Presidential event with archival policy announcement",
    featured: true,
  },
  {
    id: "ai-action-plan",
    title: "President Trump Signs Executive Order Launching America’s AI Action Plan",
    excerpt:
      "The order directs federal agencies to accelerate pilot deployment, permitting, and public-private compute partnerships.",
    category: "Executive Orders",
    date: "February 2, 2026",
    image: "/images/news/ai-action.jpg",
    alt: "President signing a directive in the White House complex",
    featured: false,
  },
  {
    id: "investment-roundtable",
    title: "Investment Announcements: New Manufacturing Corridors Across 9 States",
    excerpt:
      "Industry leaders joined federal officials to outline workforce pipelines and multi-year domestic production targets.",
    category: "Articles",
    date: "January 30, 2026",
    image: "/images/news/investments.jpg",
    alt: "Economic policy roundtable with senior officials",
    featured: false,
  },
  {
    id: "press-brief",
    title: "Press Briefing: Cross-Agency Plan to Cut Household Energy Bills",
    excerpt:
      "The briefing detailed expedited infrastructure approvals and reliability-focused transmission priorities.",
    category: "Briefings & Statements",
    date: "January 29, 2026",
    image: "/images/news/press-room.jpg",
    alt: "Press event at the White House with spokesperson at podium",
    featured: false,
  },
  {
    id: "southern-spear",
    title: "Operation Southern Spear Expands Border Interdiction Coordination",
    excerpt:
      "DHS and federal law enforcement announced new operational zones and equipment deployment.",
    category: "Fact Sheets",
    date: "January 26, 2026",
    image: "/images/news/border-operation.jpg",
    alt: "Federal agents conducting coordinated border operations",
    featured: false,
  },
  {
    id: "security-summit",
    title: "Vice President Vance Addresses National Security Industrial Summit",
    excerpt:
      "Remarks emphasized defense production timelines, readiness, and strategic deterrence capacity.",
    category: "Remarks",
    date: "January 24, 2026",
    image: "/images/news/security-summit.jpg",
    alt: "National security summit featuring senior administration officials",
    featured: false,
  },
  {
    id: "state-dinner",
    title: "State Dinner Highlights Bilateral Investment and Technology Cooperation",
    excerpt:
      "Leaders reviewed trade facilitation and security cooperation benchmarks for the coming year.",
    category: "Articles",
    date: "January 20, 2026",
    image: "/images/news/state-dinner.jpg",
    alt: "White House state dinner scene with dignitaries",
    featured: false,
  },
  {
    id: "rose-garden",
    title: "Rose Garden Ceremony Marks New Workforce Development Compact",
    excerpt:
      "The initiative aligns employer commitments, apprenticeship tracks, and skills credential portability.",
    category: "Remarks",
    date: "January 18, 2026",
    image: "/images/news/rose-garden.jpg",
    alt: "Rose Garden ceremony at the White House",
    featured: false,
  },
  {
    id: "easter-roll",
    title: "White House Easter Roll Returns with Military Family Programming",
    excerpt:
      "The annual event featured educational exhibits, wellness activities, and volunteer recognition.",
    category: "Briefings & Statements",
    date: "April 1, 2025",
    image: "/images/news/easter-roll.jpg",
    alt: "White House grounds event with families and children",
    featured: false,
  },
  {
    id: "christmas-preview",
    title: "Holiday Season Preview Showcases Restored Public Rooms",
    excerpt:
      "First Lady staff released details on this year’s decor plan and expanded public-tour access windows.",
    category: "Articles",
    date: "December 3, 2025",
    image: "/images/news/christmas.jpg",
    alt: "Seasonal White House holiday decor and event preparation",
    featured: false,
  },
];

export const administrationProfiles: AdministrationProfile[] = [
  {
    name: "President Donald J. Trump",
    role: "President of the United States",
    bio: "President Trump’s second-term agenda emphasizes economic expansion, strong borders, energy independence, and restoring deterrence abroad. He has directed agencies to prioritize cost reduction for families and fast execution of core domestic priorities.",
    image: "/images/admin/trump.png",
    alt: "Official portrait of President Donald J. Trump",
  },
  {
    name: "Vice President JD Vance",
    role: "Vice President of the United States",
    bio: "Vice President Vance leads key administration initiatives on manufacturing competitiveness, technology security, and workforce revitalization. He frequently represents the administration on economic and national security strategy.",
    image: "/images/admin/vance.jpg",
    alt: "Official portrait of Vice President JD Vance",
  },
  {
    name: "First Lady Melania Trump",
    role: "First Lady of the United States",
    bio: "First Lady Melania Trump supports cultural preservation, youth opportunity, and White House public engagement initiatives. Her office has highlighted restoration and modernization projects across ceremonial spaces.",
    image: "/images/admin/melania.png",
    alt: "Official portrait of First Lady Melania Trump",
  },
  {
    name: "Second Lady Usha Vance",
    role: "Second Lady of the United States",
    bio: "Second Lady Usha Vance supports military families, legal literacy initiatives, and community service partnerships. She works with cross-agency teams to expand civic mentorship and educational access.",
    image: "/images/admin/usha.png",
    alt: "Official portrait of Second Lady Usha Vance",
  },
];

export const cabinetMembers: CabinetMember[] = [
  {
    name: "Marco Rubio",
    title: "Secretary of State",
    image: "/images/admin/rubio.jpeg",
    alt: "Official portrait of Secretary of State Marco Rubio",
  },
  {
    name: "Pete Hegseth",
    title: "Secretary of Defense",
    image: "/images/admin/hegseth.jpeg",
    alt: "Official portrait of Secretary of Defense Pete Hegseth",
  },
  {
    name: "Pam Bondi",
    title: "Attorney General",
    image: "/images/admin/bondi.jpeg",
    alt: "Official portrait of Attorney General Pam Bondi",
  },
  {
    name: "Scott Bessent",
    title: "Secretary of the Treasury",
    image: "/images/admin/bessent.jpeg",
    alt: "Official portrait of Treasury Secretary Scott Bessent",
  },
  {
    name: "Brooke Rollins",
    title: "Secretary of Agriculture",
    image: "/images/admin/rollins.jpeg",
    alt: "Official portrait of Agriculture Secretary Brooke Rollins",
  },
  {
    name: "Howard Lutnick",
    title: "Secretary of Commerce",
    image: "/images/admin/lutnick.jpeg",
    alt: "Official portrait of Commerce Secretary Howard Lutnick",
  },
  {
    name: "Kristi Noem",
    title: "Secretary of Homeland Security",
    image: "/images/admin/noem.jpeg",
    alt: "Official portrait of Homeland Security Secretary Kristi Noem",
  },
  {
    name: "Doug Burgum",
    title: "Secretary of the Interior",
    image: "/images/admin/burgum.jpeg",
    alt: "Official portrait of Interior Secretary Doug Burgum",
  },
  {
    name: "Robert F. Kennedy Jr.",
    title: "Secretary of Health and Human Services",
    image: "/images/admin/rfk.jpeg",
    alt: "Official portrait of HHS Secretary Robert F. Kennedy Jr.",
  },
  {
    name: "Sean Duffy",
    title: "Secretary of Transportation",
    image: "/images/admin/duffy.jpeg",
    alt: "Official portrait of Transportation Secretary Sean Duffy",
  },
];

export const keyInitiatives: KeyInitiative[] = [
  {
    title: "Working Families Tax Cuts",
    description: "Targeted relief proposals designed to boost take-home pay and lower household tax burden.",
  },
  {
    title: "School Choice",
    description: "Expanding state-led options and parent-directed education pathways.",
  },
  {
    title: "AI.Gov",
    description: "Federal coordination hub for public-sector AI deployment and standards.",
  },
  {
    title: "Crypto",
    description: "Policy framework focused on U.S. digital asset leadership and clear market rules.",
  },
  {
    title: "Trump Gold Card",
    description: "Proposed premium legal-entry pathway tied to investment and economic contribution.",
  },
  {
    title: "Fostering the Future",
    description: "Child welfare and family support initiative emphasizing permanence and outcomes.",
  },
  {
    title: "The Great Healthcare Plan",
    description: "Market-driven affordability strategy for drugs, coverage, and care access.",
  },
  {
    title: "TrumpRx",
    description: "Prescription cost reforms aimed at transparency and lower patient spending.",
  },
  {
    title: "Freedom 250",
    description: "Nationwide civic programming in preparation for America’s 250th anniversary.",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "1800",
    title: "Executive Residence Opens",
    description: "President John Adams becomes the first president to reside in the Executive Mansion.",
  },
  {
    year: "1814",
    title: "Reconstruction Begins",
    description: "After wartime damage, restoration starts to rebuild the residence and offices.",
  },
  {
    year: "1902",
    title: "West Wing Establishment",
    description: "Major renovations reorganize executive operations and formalize the West Wing footprint.",
  },
  {
    year: "1948",
    title: "Truman Reconstruction",
    description: "Structural overhaul modernizes the building interior while preserving historic design.",
  },
  {
    year: "1961",
    title: "Historic Preservation Program",
    description: "A modern curatorial effort strengthens archival standards and restoration practices.",
  },
  {
    year: "2026",
    title: "America 250 Preparations",
    description: "The White House expands educational programming for the upcoming semiquincentennial.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: "/images/gallery/01-exterior.jpg",
    caption: "South Grounds arrival and executive motorcade preparation.",
    category: "The Building",
    alt: "Exterior White House grounds with staff movement",
  },
  {
    id: "g2",
    image: "/images/gallery/02-aerial.jpg",
    caption: "Aerial sweep of the White House complex and surrounding avenues.",
    category: "The Building",
    alt: "Aerial photo of the White House and nearby federal district",
  },
  {
    id: "g3",
    image: "/images/gallery/03-night.jpg",
    caption: "Evening security posture on executive grounds.",
    category: "The Building",
    alt: "Nighttime scene around the White House complex",
  },
  {
    id: "g4",
    image: "/images/gallery/04-rose.jpg",
    caption: "Rose Garden event setup before afternoon remarks.",
    category: "Events",
    alt: "Rose Garden prepared for a White House event",
  },
  {
    id: "g5",
    image: "/images/gallery/05-event.jpg",
    caption: "Diplomatic meeting sequence with visiting officials.",
    category: "Events",
    alt: "President during official White House meeting",
  },
  {
    id: "g6",
    image: "/images/gallery/06-prayer.jpg",
    caption: "Ceremonial signing with faith leaders in attendance.",
    category: "Events",
    alt: "Signing event at the White House with invited guests",
  },
  {
    id: "g7",
    image: "/images/gallery/07-judicial.jpg",
    caption: "Judicial recognition event in the East Room.",
    category: "Events",
    alt: "White House judicial milestone ceremony",
  },
  {
    id: "g8",
    image: "/images/gallery/08-dinner.jpg",
    caption: "State dinner guest arrival and receiving line.",
    category: "Events",
    alt: "State dinner sequence at the White House",
  },
  {
    id: "g9",
    image: "/images/gallery/09-christmas.jpg",
    caption: "Holiday lighting and decor installation preview.",
    category: "Holidays",
    alt: "Holiday preparation at the White House",
  },
  {
    id: "g10",
    image: "/images/gallery/10-easter.jpg",
    caption: "Seasonal family programming on the South Lawn.",
    category: "Holidays",
    alt: "Family event hosted on White House grounds",
  },
  {
    id: "g11",
    image: "/images/gallery/11-tree.jpg",
    caption: "Ceremonial room transformation for the holiday season.",
    category: "Holidays",
    alt: "Decorated interior room inside the White House",
  },
  {
    id: "g12",
    image: "/images/gallery/12-rainbow.jpg",
    caption: "North Portico media line during a policy briefing cycle.",
    category: "The Building",
    alt: "North Portico and press positions outside the White House",
  },
  {
    id: "g13",
    image: "/images/gallery/13-kids-dinner.jpg",
    caption: "Youth leadership dinner with civic award recipients.",
    category: "Events",
    alt: "Formal youth recognition event indoors at the White House",
  },
  {
    id: "g14",
    image: "/images/gallery/14-blue-room.jpeg",
    caption: "Historic interior details and floral installations.",
    category: "The Building",
    alt: "White House interior room with guests and decor",
  },
  {
    id: "g15",
    image: "/images/gallery/15-portico.jpg",
    caption: "Official greeting line at the North Portico.",
    category: "Events",
    alt: "North Portico receiving line at the White House",
  },
];

export const navigationGroups: NavigationGroup[] = [
  {
    title: "News",
    items: [
      { label: "Articles", href: "/news" },
      { label: "Briefings & Statements", href: "/news" },
      { label: "Fact Sheets", href: "/news" },
      { label: "Presidential Actions", href: "/news" },
      { label: "Remarks", href: "/news" },
    ],
  },
  {
    title: "Administration",
    items: [
      { label: "President Trump", href: "/administration#trump" },
      { label: "First Lady Melania Trump", href: "/administration#melania" },
      { label: "Vice President JD Vance", href: "/administration#vance" },
      { label: "Second Lady Usha Vance", href: "/administration#usha" },
      { label: "The Cabinet", href: "/administration#cabinet" },
    ],
  },
  {
    title: "Media",
    items: [
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Video Library", href: "/videos" },
      { label: "Livestream", href: "/livestream" },
      { label: "White House Wire", href: "/news" },
    ],
  },
  {
    title: "Priorities",
    items: priorities.map((priority) => ({
      label: priority.title,
      href: priority.href,
    })),
  },
  {
    title: "About The White House",
    items: [
      { label: "A Timeline", href: "/about#timeline" },
      { label: "Our Government", href: "/about#government" },
      { label: "America's Founding", href: "/about#founding" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Visit", href: "/about" },
      { label: "Internships", href: "/internships" },
      { label: "Find Your Representative", href: "/representatives" },
    ],
  },
];

export const mainNav = [
  { label: "News", href: "/news" },
  { label: "Administration", href: "/administration" },
  { label: "Media", href: "/gallery" },
  { label: "Priorities", href: "/priorities" },
  { label: "About The White House", href: "/about" },
  { label: "Get Involved", href: "/contact" },
] as const;

export const socialLinks: SocialLink[] = [
  { platform: "X", href: "https://x.com/WhiteHouse" },
  { platform: "Instagram", href: "https://instagram.com/whitehouse" },
  { platform: "TikTok", href: "https://www.tiktok.com/@whitehouse" },
  { platform: "Truth Social", href: "https://truthsocial.com/home" },
  { platform: "Rumble", href: "https://rumble.com/c/whitehouse" },
  { platform: "Facebook", href: "https://www.facebook.com/WhiteHouse" },
  { platform: "YouTube", href: "https://www.youtube.com/WhiteHouse" },
];

export const footerColumns = {
  about: [
    { label: "Administration", href: "/administration" },
    { label: "Contact", href: "/contact" },
    { label: "Internships", href: "/internships" },
    { label: "Stay Informed", href: "/contact" },
    { label: "Privacy Policy", href: "/about" },
  ],
  media: [
    { label: "News", href: "/news" },
    { label: "Gallery", href: "/gallery" },
    { label: "Video Library", href: "/videos" },
    { label: "White House Wire", href: "/news" },
  ],
  initiatives: [
    { label: "Freedom 250", href: "/priorities#maha" },
    { label: "Investments", href: "/priorities#energy" },
    { label: "Working Families Tax Cuts", href: "/priorities#economy" },
    { label: "AI.Gov", href: "/priorities#ai" },
    { label: "DOGE", href: "/priorities#doge" },
  ],
} as const;

export const heroTagline =
  "President Donald J. Trump and Vice President JD Vance are committed to lowering costs for all Americans, securing our borders, unleashing American energy dominance, restoring peace through strength, and making all Americans safe and secure once again.";

export const mediaVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "White House Briefing: Economic Momentum and Energy Reform",
    description:
      "A recorded update on administration priorities including job growth, manufacturing expansion, and infrastructure investments.",
    duration: "12:10",
    category: "Briefing",
    publishedAt: "February 6, 2026",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/news/press-room.jpg",
  },
  {
    id: "video-2",
    title: "State Dining Room Policy Speech",
    description: "Highlights from a diplomatic engagement focused on workforce growth and trade cooperation.",
    duration: "18:35",
    category: "Event",
    publishedAt: "January 30, 2026",
    embedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    thumbnail: "/images/news/investments.jpg",
  },
  {
    id: "video-3",
    title: "Administration Launches AI Infrastructure Roundtable",
    description:
      "Industry partners and administration leaders discuss AI policy, permitting, and domestic compute expansion.",
    duration: "09:20",
    category: "Policy",
    publishedAt: "January 21, 2026",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnail: "/images/news/ai-action.jpg",
  },
];

export const livestreamSchedule: LivestreamEvent[] = [
  {
    id: "live-main",
    title: "White House Press Briefing",
    status: "live",
    description: "Daily briefing with administration officials and policy leads.",
    startsAt: "Every weekday at 3:00 PM ET",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC0J2Qd9JYq6x1gL2",
  },
  {
    id: "live-cabinet",
    title: "Cabinet Press Segment",
    status: "scheduled",
    description: "Cabinet-wide update on implementation and budget milestones.",
    startsAt: "Thursday, 2:00 PM ET",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC0J2Qd9JYq6x1gL2",
  },
];

