import { Experience, Stat, SocialMediaItem, CaseStudy, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "Tashvi Chhadwa",
  title: "Creative Marketing Architect",
  subtitle: "Creative enough for content. Strategic enough for marketing. Reliable enough to deliver results.",
  bio: "I craft elegant stories that move needles. Fusing the raw, visual intimacy of contemporary culture with the rigorous discipline of marketing science, I construct organic brand narratives that convert attention into community, and campaigns into record growth.",
  brief: "As a former design lead turned multi-channel growth strategist, I bridge the gap between creative execution and raw performance. I don't just build grids—I build visual engines that drive revenue.",
  quickFacts: [
    { text: "☕ Coffee-fueled marketer", hoverText: "V60 pourover, lightly roasted, Ethiopia origin" },
    { text: "🎨 Canva & Figma obsessive", hoverText: "Constructing pixel-perfect design grids daily" },
    { text: "📈 Data-driven creative", hoverText: "A/B testing is my creative love language" },
    { text: "📚 Lifelong trend researcher", hoverText: "Deconstructing culture, memes, and visual patterns" },
  ],
  traits: [
    { title: "Creative", description: "Merging artistic boundaries with tactical brand principles." },
    { title: "Flexible", description: "Pivoting swiftly to capture cultural cultural zeitgeist and algorithm shifts." },
    { title: "Reliable", description: "Zero guesswork. Transparent metrics, strict deadlines, flawless execution." },
    { title: "Curious", description: "Constantly interrogating consumer psychology and early-stage platforms." },
    { title: "Approachable", description: "A high-empathy collaborator dedicated to lifting teams up." }
  ]
};

export const FACTS_STATISTICS: Stat[] = [
  { id: "s1", value: "115K+", label: "Audience organically captured across platforms" },
  { id: "s2", value: "900+", label: "messages received within three months" },
  { id: "s3", value: "48+", label: "multi channel high engaging content" },
  { id: "s4", value: "9+", label: "Leading-edge marketing platforms & tools fully mastered" }
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: "e1",
    company: "Lumina Collective",
    role: "Senior Brand & Growth Strategist",
    duration: "2024 - Present",
    keyContributions: [
      "Engineered multi-channel organic social frameworks, amplifying inbound brand queries by 142%.",
      "Directed cross-functional creative sprints for 15+ premier lifestyle, beauty, and architecture brands.",
      "Redesigned the content lifecycle, coupling short-form visual loops with data-led conversion tunnels."
    ],
    results: "+210% increase in brand-driven conversions; average CTR uplifted from 1.8% to 4.2%."
  },
  {
    id: "e2",
    company: "Vellum Editorial",
    role: "Creative Marketing Manager",
    duration: "2022 - 2024",
    keyContributions: [
      "Curated digital magazine features and social presence, transforming Pinterest into a high-flow marketing asset.",
      "Spearheaded strategic co-branding campaigns with premium micro-influencers, boosting organic brand mentions by 3.5x.",
      "Pioneered video-first educational content focusing on sustainable luxury and aesthetic integrity."
    ],
    results: "Pioneered influencer networks resulting in $380K extra pipeline with zero paid spend."
  },
  {
    id: "e3",
    company: "Aura Creative Agency",
    role: "Visual Content & Social Strategist",
    duration: "2020 - 2022",
    keyContributions: [
      "Designed and executed over 300 aesthetic Reels, TikTok assets, and carousel slides.",
      "Partnered with copywriters to model high-converting, micro-narratives for B2C consumer products.",
      "Analyzed weekly community feedback loops to inform the overarching content calendar and script pivots."
    ],
    results: "Generated consecutive viral runs, reaching 1.2M collective impressions within a single quarter."
  }
];

export const SOCIAL_MEDIA_GRID: SocialMediaItem[] = [
  {
    id: "sm1",
    type: "instagram",
    title: "New Product Launch",
    subtitle: "Reaching 45K views via warm, textured aesthetic storytelling.",
    image: "https://lh3.googleusercontent.com/d/1zYSOjJx7HB5gFesFcy_N9-eguk8xBRYP",
    frameStyle: "phone",
    aspectRatio: "9:16"
  },
  {
    id: "sm2",
    type: "linkedin",
    title: "Photobook Launch",
    subtitle: "A structured carousel detailing marketing psychology. 2.4k shares.",
    image: "https://lh3.googleusercontent.com/d/1CVh9uNw-Mg9zlDttSliIDWAHrkv2KXmG",
    frameStyle: "phone",
    aspectRatio: "9:16"
  },
  {
    id: "sm3",
    type: "campaign-showcase",
    title: "Graduation Farewell Memento",
    subtitle: "A farewell momento for all the dear graduates with every emotion captured beautifully.",
    image: "https://lh3.googleusercontent.com/d/1-SxVwJYcNKJFTN9XdnxrftonvB5VcHeg",
    frameStyle: "large-showcase",
    aspectRatio: "16:10"
  },
  {
    id: "sm4",
    type: "carousel",
    title: "Influencer Collaboration Carousel",
    subtitle: "Educational Instagram slide decks with an 8.4% engagement rate.",
    image: "https://lh3.googleusercontent.com/d/1S5jn3Z0XKu6KouaUxm077ABuMYgh8hKC",
    frameStyle: "laptop",
    aspectRatio: "16:10"
  },
  {
    id: "sm5",
    type: "video",
    title: "Baby Memories Captured In A Book",
    subtitle: "Explaining strategic positioning on-camera for aspiring creative leads.",
    image: "https://lh3.googleusercontent.com/d/1xS2kks99HTLsH7hFFRIgrhhZL8SMyB2Y",
    frameStyle: "phone",
    aspectRatio: "9:16"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "The Solene Launch: Redefining Sustainable Skincare",
    challenge: "Solene wanted to cut through the incredibly crowded eco-friendly skincare sector without relying on heavy paid ad expenditures or greenwashed marketing cliches.",
    strategy: "Create an interactive, editorial digital magazine on Instagram. Instead of focusing on green leaves, we focused on raw linen, stone, warm pottery textures, and deep-dive formulas.",
    execution: "Produced 15 short-form narrative videos, curated 3 high-contrast Instagram carousels detailing skin barrier science, and introduced micro-influencer product drops.",
    results: "The organic campaign captured 85K active views, achieving a complete product sell-out within 12 days of the official launch sequence.",
    metrics: ["85K+ Organics", "$65K Revenue", "100% Sellout"],
    tag: "AESTHETIC & STRATEGY"
  },
  {
    id: "cs2",
    title: "Vellum Editorial: Elevating Low-converting B2C Traffic",
    challenge: "An editorial publishing house suffered from strong brand awareness but low community conversion rates from their social media and Pinterest channels.",
    strategy: "Designed a clean 'Visual Philosophy' series. Upgraded the photography style to warm ivory tones, introducing high-end modular slides summarizing editorial content.",
    execution: "Developed a reusable grid asset pack in Canva, designed custom Pinterest templates with editorial typography, and streamlined email acquisition forms.",
    results: "Email list acquisition soared, converting casual visual-scrapers into premium loyalty subscribers with high engagement.",
    metrics: ["+145% Email Opt-ins", "4.2% Click Rate", "3.2x Pinterest Traffic"],
    tag: "CONVERSION OPTIMIZATION"
  }
];

export const SKILLS = [
  "Creative Strategy", "Canva", "Figma", "Social Media Management",
  "Meta Ads Suite", "Google Analytics 4", "SEO Content Design",
  "HubSpot Suite", "Mailchimp", "Pinterest Marketing",
  "Copywriting", "CapCut", "LinkedIn Content Architecture",
  "A/B Testing Studio", "Brand Positioning"
];

export const CERTIFICATIONS = [
  {
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta Credentialing",
    year: "2024",
    color: "bg-soft-terracotta/10 text-soft-terracotta"
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google Academy",
    year: "2024",
    color: "bg-muted-olive/10 text-muted-olive"
  },
  {
    title: "Inbound Marketing Leadership Program",
    issuer: "HubSpot Academy",
    year: "2023",
    color: "bg-amber-100 text-amber-800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Tashvi’s combination of high-end editorial taste and serious analytics is extremely rare. She does not just create gorgeous posts; she builds frameworks that drive significant commerce.",
    author: "Elena Rostov",
    role: "Founding Director of Solene & Vespera Skincare",
    relation: "Client"
  },
  {
    id: "t2",
    quote: "Working with Tashvi was a revelation. She completely took over our content pipeline, structured our Pinterest channels, and increased our inbound lead count by double digits within three months.",
    author: "Julian Thorne",
    role: "Editor-In-Chief at Vellum Publishing House",
    relation: "Manager"
  },
  {
    id: "t3",
    quote: "She is reliable, exceptionally strategic, and can turn a simple creative brief into a masterpiece in record time. Her aesthetic is pure poetry.",
    author: "Mateo Silva",
    role: "Senior Partner, Aura Creative Studio",
    relation: "Collaborator"
  }
];

export const PERSONAL_BRAND = {
  quote: "Brand is not a logo. Brand is a contract of aesthetic trust between you and your reader.",
  sections: [
    {
      title: "My Creative Philosophy",
      text: "I believe true design isn't about decoration; it's about clarity. To guide a modern reader, you must cut through the noise with calm, steady, and beautiful signals. We pair raw linen visual rhythms with crisp analytical frameworks. This keeps the work grounded, authentic, and high-converting."
    },
    {
      title: "What Inspires Me",
      text: "Quiet mornings with a warm cup of coffee, French architectural design, retro serif typography, Bauhaus grids, the organic flow of botanical illustrations, and how simple stories connect disparate minds worldwide."
    },
    {
      title: "My Core Values",
      text: "Aesthetic Intentionality, Intellectual Honesty, Radical Transparency, and Unwavering Execution. I build with care and measure with absolute precision. No guesswork—just beautifully engineered growth."
    }
  ]
};
