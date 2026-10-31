// Content data for V-Graph Studio

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const stats = [
  { value: "02", label: "Service pillars" },
  { value: "21", label: "Portfolio samples" },
  { value: "01", label: "Studio direction" },
];

export const itServices = [
  { id: "web", title: "Web Development", desc: "Modern, responsive websites and landing pages built for speed, clarity, and conversion.", tag: "React / Vite", points: ["Business websites", "Landing pages", "SEO foundations"] },
  { id: "product", title: "Web Applications", desc: "Clean interfaces for dashboards, internal tools, and product experiences that scale with your needs.", tag: "Frontend / Full-Stack", points: ["React interfaces", "API integrations", "Responsive UX"] },
  { id: "launch", title: "Launch & Support", desc: "Get your website deployed, connected, and ready for real users with ongoing improvements when needed.", tag: "Deployment", points: ["Hosting setup", "Performance checks", "Ongoing updates"] },
];

export const videoServices = [
  { id: "longform", title: "YouTube Editing", desc: "Clear, engaging long-form edits designed to keep viewers watching and make your ideas easier to follow.", tag: "YouTube", points: ["Clean cuts", "Pacing & storytelling", "Captions & motion"] },
  { id: "shorts", title: "Shorts & Reels", desc: "Fast-paced vertical edits for Instagram, YouTube Shorts, and other short-form platforms.", tag: "Reels / Shorts", points: ["Hook-focused edits", "Captions", "Platform-ready exports"] },
  { id: "ads", title: "Video Ads", desc: "Short promotional videos that communicate your offer quickly and give your brand a stronger visual presence.", tag: "Social Ads", points: ["Product promos", "UGC-style edits", "Multiple variations"] },
];

export const marqueeWords = ["Web Development", "React", "Landing Pages", "YouTube", "Reels", "Shorts", "Video Editing", "Responsive Design", "Content", "Digital Experiences"];

export const portfolio = [
  {
    id: 19, title: "PinkRoof Interiors", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80",
    desc: "A luxury interior design website presenting residential and commercial spaces, design services, featured work, and consultation enquiries.",
    demo: "https://pinkroof.in/",
  },
  {
    id: 20, title: "Brewfeild Café", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80",
    desc: "A café website built to introduce the brand and give visitors an inviting path to explore its offering and location.",
    demo: "https://brewfeild-beta.vercel.app/",
  },
  {
    id: 21, title: "Mannat Luxury Events", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80",
    desc: "A luxury event-planning website focused on showcasing event experiences, services, and enquiry opportunities.",
    demo: "https://mannat-luxury-event.vercel.app/",
  },
  {
    id: 22, title: "The Noble", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000&q=80",
    desc: "A media-publishing website designed to organize editorial stories and make articles and updates easy to discover.",
    demo: "https://the-noble.vercel.app/",
  },
  {
    id: 23, title: "Ultradium Trading", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80",
    desc: "An industrial B2B website for valves, welding machines, and automotive equipment, presenting product areas and business enquiries.",
    demo: "https://ultradiumtrading.com/",
  },
  {
    id: 24, title: "World Leaders Consortium", category: "Web Development",
    cover: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000&q=80",
    desc: "A global consortium website sharing its leadership mission, programmes, articles, and international dialogue.",
    demo: "https://worldleadersconsortium.com/",
  },
  {
    id: 4, title: "Podcast Teaser — Stock Market", category: "Podcast Editing",
    cover: "https://i.ytimg.com/vi/bpmjS7tBJH8/hqdefault.jpg",
    desc: "A fast-paced podcast teaser exploring how to choose stocks, edited for a clear and engaging social video.",
    videoId: "bpmjS7tBJH8", aspect: "video", linkLabel: "Watch podcast",
  },
  {
    id: 5, title: "Podcast Intro", category: "Podcast Editing",
    cover: "https://i.ytimg.com/vi/3yzlfvpaf0Y/hqdefault.jpg",
    desc: "A podcast intro edit with a clean opening and a focused visual presentation.",
    videoId: "3yzlfvpaf0Y", aspect: "video", linkLabel: "Watch podcast",
  },
  {
    id: 8, title: "Podcast Conversation — New Episode", category: "Podcast Editing",
    cover: "https://i.ytimg.com/vi/Hdwoxwutp3Y/hqdefault.jpg",
    desc: "A podcast conversation sample showcasing pacing, clear storytelling, and an engaging viewing flow.",
    videoId: "Hdwoxwutp3Y", aspect: "video", linkLabel: "Watch podcast",
  },
  {
    id: 6, title: "Restaurant Promotional Film", category: "Business Promotions",
    cover: "https://i.ytimg.com/vi/28tfSOzQUYQ/hqdefault.jpg",
    desc: "A cinematic restaurant promotion showcasing atmosphere, food, and brand identity.",
    videoId: "28tfSOzQUYQ", aspect: "video", linkLabel: "Watch film",
  },
  {
    id: 7, title: "Sharingan T-Shirt Ad", category: "Product Advertisements",
    cover: "https://i.ytimg.com/vi/z3_VXNtlL30/hqdefault.jpg",
    desc: "A vertical product advertisement using bold promotional text and focused apparel visuals.",
    videoId: "z3_VXNtlL30", aspect: "portrait", linkLabel: "Watch reel",
  },

  {
    id: 9, title: "Cafe Brand Film", category: "Food & Beverage Ads",
    cover: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&q=80",
    desc: "A warm cafe promotional edit highlighting the atmosphere, drinks, and in-store experience.",
    videoSrc: "/videos/Cafe-Ad.mp4", aspect: "portrait",
  },
  {
    id: 10, title: "Cafe Social Ad", category: "Food & Beverage Ads",
    cover: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1000&q=80",
    desc: "A short-form cafe advertisement designed for social feeds and local brand awareness.",
    videoSrc: "/videos/Cafe2-Ad.mp4", aspect: "portrait",
  },
  {
    id: 11, title: "Juice Product Ad", category: "Food & Beverage Ads",
    cover: "/images/juice-product-ad.png",
    desc: "A vibrant beverage promotion showcasing product color, freshness, and visual appeal.",
    videoSrc: "/videos/Juice-Ad.mp4", aspect: "portrait",
  },
  {
    id: 12, title: "Drinks Campaign", category: "Food & Beverage Ads",
    cover: "/images/drinks-campaign.png",
    desc: "A polished drinks advertisement with an energetic, product-first creative direction.",
    videoSrc: "/videos/Drinks-Ad.mp4", aspect: "portrait",
  },
  {
    id: 13, title: "Sneaker Campaign", category: "Fashion & Apparel Ads",
    cover: "/images/sneaker-campaign.png",
    desc: "A bold footwear product ad focused on details, movement, and a premium retail look.",
    videoSrc: "/videos/Shoes2-Ad.mp4", aspect: "portrait",
  },
  {
    id: 14, title: "Shoe Product Ad", category: "Fashion & Apparel Ads",
    cover: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=80",
    desc: "A concise shoe advertisement built to spotlight the product and strengthen brand recall.",
    videoSrc: "/videos/Shoe-Ad.mp4", aspect: "portrait",
  },
  {
    id: 15, title: "Hoodie Campaign", category: "Fashion & Apparel Ads",
    cover: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1000&q=80",
    desc: "A contemporary apparel edit made for social promotion and product discovery.",
    videoSrc: "/videos/Hoddie-Ad.mp4", aspect: "portrait",
  },
  {
    id: 16, title: "Clothing Brand Ad", category: "Fashion & Apparel Ads",
    cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=80",
    desc: "A fashion-focused promotional video showcasing style, fit, and brand mood.",
    videoSrc: "/videos/Clothing-Ad.mp4", aspect: "portrait",
  },
  {
    id: 17, title: "Perfume Product Film", category: "Lifestyle Product Ads",
    cover: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000&q=80",
    desc: "A refined fragrance ad with a cinematic, premium lifestyle direction.",
    videoSrc: "/videos/Perfume-Ad.mp4", aspect: "portrait",
  },
  {
    id: 18, title: "Purse Product Ad", category: "Lifestyle Product Ads",
    cover: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&q=80",
    desc: "A lifestyle product promotion that puts materials, shape, and styling at the center.",
    videoSrc: "/videos/Purse-Ad.mp4", aspect: "portrait",
  },
];
export const showreels = [
  { id: 1, title: "Podcast Teaser — Stock Market", type: "Podcast Editing", embed: "https://www.youtube-nocookie.com/embed/bpmjS7tBJH8" },
  { id: 2, title: "Restaurant Promotional Film", type: "Business Promotions", embed: "https://www.youtube-nocookie.com/embed/28tfSOzQUYQ" },
];

export const process = [
  { step: "01", title: "Discover", desc: "We understand your business, audience, goals, and the problem you want to solve." },
  { step: "02", title: "Plan", desc: "We define the structure, creative direction, technology, and deliverables before production starts." },
  { step: "03", title: "Create", desc: "We design, develop, edit, and share progress so you always know what is being built." },
  { step: "04", title: "Review", desc: "You review the work, we refine it, and we make sure the final result matches the brief." },
  { step: "05", title: "Launch", desc: "We deploy the final website or deliver the finished content ready for publishing." },
];

export const faqs = [
  { question: "What kind of projects do you take?", answer: "We focus on business websites, landing pages, React-based interfaces, YouTube editing, Shorts/Reels, and promotional video content." },
  { question: "Can I hire you for only one service?", answer: "Yes. You can work with V-Graph for web development or video editing separately. The two services can also be combined when a project needs both." },
  { question: "How does a project start?", answer: "Send a short project brief through the contact page. We review the requirements, clarify the scope, and then recommend the next step." },
  { question: "Do you work remotely?", answer: "Yes. V-Graph Studio is designed for remote collaboration with clients through online communication and shared project updates." },
];
