/**
 * Central content module for the STAYEST marketing site.
 * Copy lives here so page components stay presentational and content can later
 * be swapped for a CMS or database read without touching JSX.
 */

export const company = {
  name: "STAYEST",
  tagline: "Premium Company Let & Property Management",
  phone: "+44 20 3000 0000",
  email: "landlords@stayest.co.uk",
  address: "Registered office address to be confirmed, London, United Kingdom",
  linkedin: "https://www.linkedin.com/",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

export type NavItem = { label: string; to: string };

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Guaranteed Rent", to: "/guaranteed-rent" },
  { label: "Company Let", to: "/company-let" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "FAQs", to: "/faqs" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const benefits = [
  {
    title: "Guaranteed Monthly Rent",
    description:
      "A fixed sum paid on the same date every month, contracted for the length of the agreement, whether the property is occupied or not.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Agreements from one to five years, structured around your investment horizon rather than short tenancy cycles.",
  },
  {
    title: "Professional Guests",
    description:
      "Vetted corporate occupants, relocating professionals and contractors placed through verified business channels.",
  },
  {
    title: "Routine Property Inspections",
    description:
      "Scheduled inspections with written reports and photography, so the condition of your asset is always documented.",
  },
  {
    title: "Fully Managed",
    description:
      "Occupancy, cleaning, compliance and day-to-day operations handled end to end by our in-house team.",
  },
  {
    title: "Property Care",
    description:
      "Preventative upkeep and rapid remedial works keep the property in the condition it was handed to us in.",
  },
  {
    title: "Transparent Communication",
    description:
      "A named account manager, clear reporting and straight answers — no call centres, no chasing.",
  },
  {
    title: "Reliable Service",
    description:
      "Documented processes, insured contractors and accountable service standards behind every property we hold.",
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "company-let",
    title: "Company Let",
    summary:
      "A corporate tenancy where STAYEST is the named tenant, taking full contractual responsibility for the property.",
    detail:
      "Under a company let, the agreement sits between you and STAYEST as a business — not an individual tenant. We assume responsibility for rent, occupancy and the day-to-day condition of the property for the full term.",
    points: [
      "Single corporate counterparty on the agreement",
      "Terms typically from 12 to 60 months",
      "No tenant-find fees or void-period exposure",
      "Property returned in agreed condition at term end",
    ],
  },
  {
    slug: "guaranteed-rent",
    title: "Guaranteed Rent",
    summary:
      "A fixed monthly income paid regardless of occupancy, arrears or seasonality.",
    detail:
      "We agree a monthly figure at the outset and pay it on the same date each month for the duration of the contract. Void periods, arrears and rent collection become our responsibility, not yours.",
    points: [
      "Fixed payment date every month",
      "Void periods absorbed by STAYEST",
      "No commission deducted from the agreed figure",
      "Predictable income for lending and portfolio planning",
    ],
  },
  {
    slug: "property-management",
    title: "Property Management",
    summary:
      "Complete operational management of the property across the term of the agreement.",
    detail:
      "Our management team handles occupancy, compliance documentation, contractor coordination, inspections and reporting so that ownership requires nothing more than receiving payment.",
    points: [
      "Named account manager for every landlord",
      "Compliance certificate tracking and renewals",
      "Scheduled inspections with written reports",
      "24/7 operational escalation line",
    ],
  },
  {
    slug: "professional-cleaning",
    title: "Professional Cleaning",
    summary:
      "Hotel-standard cleaning and linen management between every occupancy.",
    detail:
      "Trained cleaning teams operate to a documented checklist with photographic sign-off, protecting finishes, fixtures and the long-term presentation of the property.",
    points: [
      "Checklist-driven turnovers with photo sign-off",
      "Commercial laundry and linen rotation",
      "Deep cleans scheduled through the year",
      "Consumables and restocking included",
    ],
  },
  {
    slug: "guest-management",
    title: "Guest Management",
    summary: "Vetting, onboarding and in-stay support for every occupant.",
    detail:
      "Occupants are identity-checked and referenced before arrival, briefed on house standards, and supported throughout their stay by our operations team.",
    points: [
      "Identity and corporate referencing checks",
      "Clear occupancy rules and conduct standards",
      "In-stay support handled by our team",
      "Detailed occupancy records maintained",
    ],
  },
  {
    slug: "maintenance-coordination",
    title: "Maintenance Coordination",
    summary:
      "Vetted, insured trades dispatched quickly and coordinated on your behalf.",
    detail:
      "Reported issues are triaged, assigned and closed out by our maintenance desk, with landlord approval sought for anything beyond the agreed threshold.",
    points: [
      "Insured and vetted contractor panel",
      "Priority response for urgent issues",
      "Approval thresholds agreed in advance",
      "Full works history retained per property",
    ],
  },
  {
    slug: "property-setup",
    title: "Property Setup",
    summary:
      "Furnishing, styling and compliance preparation before the property goes live.",
    detail:
      "We prepare the property to a consistent professional standard — furnishing, photography, inventory and safety compliance — so it performs from day one.",
    points: [
      "Furniture and soft-furnishing specification",
      "Professional inventory and schedule of condition",
      "Gas, electrical and fire safety compliance",
      "Photography and property documentation",
    ],
  },
];

export const steps = [
  {
    number: "01",
    title: "Property Assessment",
    description:
      "We review the property, location and specification, then confirm the achievable guaranteed figure.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "A written proposal setting out the monthly rent, term length and exactly what we take responsibility for.",
  },
  {
    number: "03",
    title: "Agreement",
    description:
      "A clear company let agreement is signed, with terms reviewed by your solicitor or agent if you prefer.",
  },
  {
    number: "04",
    title: "Property Preparation",
    description:
      "Compliance checks, inventory, furnishing and photography are completed before occupancy begins.",
  },
  {
    number: "05",
    title: "Professional Management",
    description:
      "Occupancy, cleaning, inspections and maintenance run day to day under our operations team.",
  },
  {
    number: "06",
    title: "Guaranteed Rent",
    description:
      "Your fixed monthly payment arrives on the same date each month for the full length of the term.",
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Properties under management" },
  { value: 98, suffix: "%", label: "Landlord contract renewal rate" },
  { value: 12, suffix: " yrs", label: "Combined sector experience" },
  { value: 0, suffix: "", label: "Void days charged to landlords", prefix: "" },
];

export const areas = [
  {
    region: "London",
    places: [
      "Central London",
      "Canary Wharf",
      "Stratford",
      "Croydon",
      "Wembley",
      "Greenwich",
    ],
  },
  {
    region: "South East",
    places: ["Reading", "Slough", "Watford", "Luton", "Brighton", "Milton Keynes"],
  },
  {
    region: "Midlands",
    places: ["Birmingham", "Coventry", "Leicester", "Nottingham", "Derby", "Wolverhampton"],
  },
  {
    region: "North & Beyond",
    places: ["Manchester", "Leeds", "Liverpool", "Sheffield", "Newcastle", "Glasgow"],
  },
];

export const testimonials = [
  {
    quote:
      "We moved four flats across to STAYEST after two years of inconsistent tenancies. The rent has landed on the same date every single month since.",
    name: "R. Whitfield",
    role: "Private landlord, East London",
  },
  {
    quote:
      "As an agent I need a partner who answers the phone and documents everything. Their inspection reports are better than most managing agents I work with.",
    name: "S. Iqbal",
    role: "Letting agent, Birmingham",
  },
  {
    quote:
      "The proposal was clear, the agreement was clear, and there were no deductions hidden in the small print. That is rarer than it should be.",
    name: "D. Marchetti",
    role: "Property investor, Manchester",
  },
];

export type Faq = { question: string; answer: string; group: string };

export const faqs: Faq[] = [
  {
    group: "Guaranteed Rent",
    question: "What exactly does guaranteed rent mean?",
    answer:
      "It means a fixed sum agreed in writing at the start of the contract and paid to you on the same date every month for the full term, whether the property is occupied or empty.",
  },
  {
    group: "Guaranteed Rent",
    question: "Do you deduct commission or management fees?",
    answer:
      "No. The figure in your agreement is the figure that reaches your account. Our margin sits between that guaranteed rent and the income we generate from the property.",
  },
  {
    group: "Guaranteed Rent",
    question: "What happens if the property sits empty?",
    answer:
      "Void periods are our commercial risk. Your payment is unaffected by occupancy levels for the duration of the agreement.",
  },
  {
    group: "Company Let",
    question: "How is a company let different from a standard tenancy?",
    answer:
      "The tenant on the agreement is STAYEST as a limited company rather than a private individual, so contractual responsibility for rent and condition sits with a business you can hold to account.",
  },
  {
    group: "Company Let",
    question: "How long are your agreements?",
    answer:
      "Most agreements run between one and five years. Longer terms generally support a stronger guaranteed figure.",
  },
  {
    group: "Company Let",
    question: "Who lives in the property?",
    answer:
      "Referenced professional occupants — relocating staff, contractors and corporate placements — vetted before arrival and supported by our operations team throughout.",
  },
  {
    group: "Property & Management",
    question: "Who is responsible for maintenance?",
    answer:
      "We handle day-to-day upkeep and minor repairs. Structural items and landlord statutory obligations remain with you, and the split is set out plainly in the agreement.",
  },
  {
    group: "Property & Management",
    question: "Will the property be inspected?",
    answer:
      "Yes. Routine inspections are scheduled through the term, each recorded with a written report and photography shared with you.",
  },
  {
    group: "Property & Management",
    question: "Does my property need to be furnished?",
    answer:
      "Furnished performs best. If the property is unfurnished we can specify and install furnishings as part of property setup.",
  },
  {
    group: "Getting Started",
    question: "How quickly can you take on a property?",
    answer:
      "Assessment to first payment typically takes two to four weeks depending on compliance status and preparation works required.",
  },
  {
    group: "Getting Started",
    question: "Is the property assessment free?",
    answer:
      "Yes. The assessment and written proposal are provided free of charge with no obligation to proceed.",
  },
  {
    group: "Getting Started",
    question: "Do you work with letting agents?",
    answer:
      "We do. Agents introducing landlord stock are welcome to contact us directly to discuss referral terms.",
  },
];

export const homeFaqs = faqs.slice(0, 6);

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guaranteed-rent-vs-traditional-letting",
    title: "Guaranteed Rent vs Traditional Letting: The Real Numbers",
    excerpt:
      "Headline rent is not the same as realised income. A look at voids, fees and arrears across a five-year hold.",
    date: "2026-06-18",
    readingTime: "6 min read",
    category: "Landlord Guidance",
    body: [
      "Landlords comparing a guaranteed rent agreement with a traditional assured shorthold tenancy often start with the headline monthly figure. That comparison is incomplete, because the headline figure is gross and unrealised.",
      "Across a typical five-year hold, a privately let property will usually experience at least one void period between tenancies, one round of tenant-find fees, ongoing management commission, and some element of arrears or dispute cost. Each of these reduces the income actually received.",
      "A guaranteed rent agreement trades a slightly lower headline figure for certainty. The contracted sum is paid every month for the length of the term, with voids, arrears and collection absorbed by the operator rather than the owner.",
      "For landlords with lending commitments or multi-property portfolios, that predictability is frequently worth more than the difference in the headline number — particularly where the operator also carries the cost of cleaning, turnover and day-to-day upkeep.",
    ],
  },
  {
    slug: "what-landlords-should-check-in-a-company-let",
    title: "What Landlords Should Check Before Signing a Company Let",
    excerpt:
      "Nine clauses worth reading twice before you hand over the keys to a corporate tenant.",
    date: "2026-05-02",
    readingTime: "5 min read",
    category: "Contracts",
    body: [
      "A company let places a business, not an individual, on the tenancy agreement. That is a meaningful protection, but only if the agreement is written clearly.",
      "Check who the named tenant is and confirm the company is registered and trading. Check the payment date and whether it is fixed or conditional on occupancy. Check the permitted use clause and whether subletting or short-term occupancy is allowed.",
      "Look closely at the repair split. A good agreement states plainly which items sit with the operator and which remain landlord obligations, with a monetary threshold above which your approval is required.",
      "Finally, confirm the condition standard the property must be returned in, and that a professional inventory with photography is taken before occupancy begins.",
    ],
  },
  {
    slug: "preparing-a-property-for-corporate-occupancy",
    title: "Preparing a Property for Corporate Occupancy",
    excerpt:
      "Specification, compliance and presentation standards that professional occupants expect as a baseline.",
    date: "2026-03-27",
    readingTime: "4 min read",
    category: "Property Setup",
    body: [
      "Corporate occupants are undemanding tenants but exacting guests. They expect a property that works on day one: reliable connectivity, a proper workspace, and finishes that photograph honestly.",
      "Compliance comes first — gas safety, electrical installation condition reporting, smoke and carbon monoxide alarms, and appropriate fire safety measures for the property type.",
      "Specification follows. Neutral, durable furnishings outperform statement pieces, and hard-wearing flooring reduces turnover cost across a long agreement.",
      "Presentation closes the gap. Professional photography and a documented inventory protect both parties and shorten the time between agreement and first occupancy.",
    ],
  },
];

export const propertyTypes = [
  "Flat / Apartment",
  "House",
  "Maisonette",
  "HMO",
  "New Build Development",
  "Block of Apartments",
  "Other",
];

export const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];
