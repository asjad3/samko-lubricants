// Blog data management - In a real app, this would be a database
// For now, we use a JSON file-based approach that can be easily migrated

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  image: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Default categories
export const defaultCategories: BlogCategory[] = [
  { id: "1", name: "Industry Trends", slug: "industry-trends", description: "Latest trends in the lubricants industry" },
  { id: "2", name: "Technical Guide", slug: "technical-guide", description: "Technical guides and how-tos" },
  { id: "3", name: "Sustainability", slug: "sustainability", description: "Eco-friendly practices and products" },
  { id: "4", name: "Maintenance", slug: "maintenance", description: "Equipment maintenance tips" },
  { id: "5", name: "Education", slug: "education", description: "Educational content about lubricants" },
  { id: "6", name: "Company News", slug: "company-news", description: "SAMKO company updates and news" },
];

// Default blog posts
export const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Industrial Lubrication",
    slug: "future-of-industrial-lubrication",
    excerpt: "Exploring emerging technologies and trends shaping the lubricants industry.",
    content: `<p>The industrial lubricants sector is undergoing a significant transformation driven by technological advancements and changing environmental regulations. As we look toward the future, several key trends are reshaping how we think about lubrication solutions.</p>

<h2>Smart Lubrication Systems</h2>
<p>IoT-enabled monitoring systems are becoming standard in modern manufacturing facilities. These systems can predict maintenance needs, optimize lubrication intervals, and reduce waste significantly.</p>

<h2>Bio-based Lubricants</h2>
<p>Environmental concerns are driving the development of biodegradable lubricants made from renewable sources. These products offer comparable performance while reducing environmental impact.</p>

<h2>Nanotechnology</h2>
<p>Nano-additives are enhancing lubricant performance by reducing friction at the molecular level. This technology promises longer equipment life and improved energy efficiency.</p>

<p>At SAMKO, we're committed to staying at the forefront of these innovations, ensuring our customers have access to the most advanced lubrication solutions available.</p>`,
    category: "Industry Trends",
    author: "Dr. Ahmad Hassan",
    authorRole: "Chief Technology Officer",
    publishedAt: "2025-01-15T08:00:00Z",
    updatedAt: "2025-01-15T08:00:00Z",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    featured: true,
    published: true,
    tags: ["technology", "innovation", "industry"],
  },
  {
    id: "2",
    title: "Choosing the Right Gear Oil for Your Application",
    slug: "choosing-right-gear-oil",
    excerpt: "A comprehensive guide to selecting gear oils for different applications.",
    content: `<p>Selecting the appropriate gear oil is crucial for optimal equipment performance and longevity. This guide will help you understand the key factors to consider when choosing gear oils.</p>

<h2>Understanding Viscosity Grades</h2>
<p>Gear oils are classified by their viscosity grade, typically following SAE or ISO standards. The right viscosity depends on operating temperature, load, and speed.</p>

<h2>API Classifications</h2>
<p>The American Petroleum Institute (API) classifies gear oils into categories like GL-4 and GL-5. GL-5 oils contain more extreme pressure additives and are suitable for hypoid gears.</p>

<h2>Synthetic vs. Mineral</h2>
<p>Synthetic gear oils offer superior performance in extreme temperatures and extended drain intervals but come at a higher cost. Consider your application requirements carefully.</p>

<h2>Key Selection Criteria</h2>
<ul>
<li>Operating temperature range</li>
<li>Load and speed conditions</li>
<li>Gear type (spur, helical, hypoid)</li>
<li>OEM recommendations</li>
</ul>

<p>Contact our technical team for personalized recommendations based on your specific equipment and operating conditions.</p>`,
    category: "Technical Guide",
    author: "Michael Chen",
    authorRole: "Technical Director",
    publishedAt: "2025-01-10T08:00:00Z",
    updatedAt: "2025-01-10T08:00:00Z",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800",
    featured: true,
    published: true,
    tags: ["gear-oil", "technical", "guide"],
  },
  {
    id: "3",
    title: "Sustainable Lubricants: A Growing Necessity",
    slug: "sustainable-lubricants-growing-necessity",
    excerpt: "How eco-friendly lubricants are becoming essential for modern operations.",
    content: `<p>Environmental sustainability is no longer optional in today's industrial landscape. Companies worldwide are recognizing the importance of adopting eco-friendly lubricants as part of their environmental strategy.</p>

<h2>The Environmental Impact</h2>
<p>Traditional petroleum-based lubricants can persist in the environment for years. Biodegradable alternatives break down naturally, reducing long-term environmental damage.</p>

<h2>Regulatory Pressure</h2>
<p>Increasingly stringent environmental regulations are mandating the use of biodegradable lubricants in sensitive areas such as marine environments and forestry operations.</p>

<h2>Performance Considerations</h2>
<p>Modern bio-based lubricants have overcome early performance limitations. Today's formulations offer comparable or superior performance to conventional products.</p>

<h2>SAMKO's Commitment</h2>
<p>We have developed a complete range of environmentally responsible lubricants that meet the highest performance standards while minimizing environmental impact.</p>`,
    category: "Sustainability",
    author: "Sarah Johnson",
    authorRole: "Sustainability Manager",
    publishedAt: "2025-01-05T08:00:00Z",
    updatedAt: "2025-01-05T08:00:00Z",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
    featured: false,
    published: true,
    tags: ["sustainability", "environment", "bio-lubricants"],
  },
  {
    id: "4",
    title: "Hydraulic System Maintenance Best Practices",
    slug: "hydraulic-system-maintenance-best-practices",
    excerpt: "Essential maintenance tips to extend hydraulic system life.",
    content: `<p>Proper maintenance of hydraulic systems is essential for maximizing equipment life and preventing costly downtime. Follow these best practices to keep your systems running smoothly.</p>

<h2>Regular Fluid Analysis</h2>
<p>Schedule regular oil analysis to detect contamination, wear particles, and fluid degradation before they cause system failures.</p>

<h2>Filtration Management</h2>
<p>Maintain clean filters and replace them according to manufacturer recommendations. Contamination is the leading cause of hydraulic system failures.</p>

<h2>Temperature Monitoring</h2>
<p>Operating temperature affects fluid viscosity and system efficiency. Ensure cooling systems are functioning properly to maintain optimal temperatures.</p>

<h2>Seal and Hose Inspection</h2>
<p>Regularly inspect seals and hoses for wear, leaks, and damage. Replace worn components proactively to prevent failures.</p>

<h2>Proper Fluid Selection</h2>
<p>Use the correct hydraulic fluid specified by the equipment manufacturer. Using the wrong fluid can lead to seal degradation and poor performance.</p>`,
    category: "Maintenance",
    author: "Robert Williams",
    authorRole: "Service Engineer",
    publishedAt: "2024-12-28T08:00:00Z",
    updatedAt: "2024-12-28T08:00:00Z",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800",
    featured: false,
    published: true,
    tags: ["hydraulic", "maintenance", "tips"],
  },
  {
    id: "5",
    title: "Understanding Viscosity Grades: A Complete Guide",
    slug: "understanding-viscosity-grades",
    excerpt: "A detailed look at viscosity ratings and their importance in lubricant selection.",
    content: `<p>Viscosity is arguably the most important property of any lubricant. Understanding viscosity grades is essential for proper lubricant selection and equipment protection.</p>

<h2>What is Viscosity?</h2>
<p>Viscosity is a measure of a fluid's resistance to flow. Higher viscosity means thicker oil that flows more slowly, while lower viscosity means thinner, faster-flowing oil.</p>

<h2>SAE Grades</h2>
<p>The Society of Automotive Engineers (SAE) developed a grading system for engine and gear oils. Multi-grade oils like 10W-40 perform across a range of temperatures.</p>

<h2>ISO Grades</h2>
<p>Industrial lubricants typically use ISO viscosity grades. These are single-grade designations based on kinematic viscosity at 40°C.</p>

<h2>Temperature Effects</h2>
<p>Viscosity changes with temperature—decreasing as temperature rises and increasing as it falls. This is quantified by the Viscosity Index (VI).</p>

<h2>Choosing the Right Viscosity</h2>
<p>Consider operating temperature, load conditions, and equipment manufacturer recommendations when selecting viscosity grade.</p>`,
    category: "Education",
    author: "Dr. Lisa Park",
    authorRole: "R&D Manager",
    publishedAt: "2024-12-20T08:00:00Z",
    updatedAt: "2024-12-20T08:00:00Z",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
    featured: false,
    published: true,
    tags: ["education", "viscosity", "basics"],
  },
  {
    id: "6",
    title: "SAMKO Expands Operations to New Markets",
    slug: "samko-expands-new-markets",
    excerpt: "Announcing our expansion into three new regional markets.",
    content: `<p>SAMKO Lubricants is proud to announce the expansion of our operations into three new regional markets, strengthening our global presence and commitment to serving customers worldwide.</p>

<h2>New Market Entry</h2>
<p>We have established operations in Southeast Asia, East Africa, and South America, bringing our premium lubricants to new customers in these growing markets.</p>

<h2>Local Partnerships</h2>
<p>In each region, we have partnered with established distributors who share our commitment to quality and customer service excellence.</p>

<h2>Investment in Infrastructure</h2>
<p>We are investing in local blending facilities and warehousing to ensure fast, reliable supply to our new customers.</p>

<h2>Product Localization</h2>
<p>Our product range has been expanded to meet the specific requirements of each market, including regional certifications and specifications.</p>

<p>This expansion represents an important milestone in our journey toward becoming the world's most trusted lubricant supplier.</p>`,
    category: "Company News",
    author: "Ahmed Al-Rashid",
    authorRole: "CEO",
    publishedAt: "2024-12-15T08:00:00Z",
    updatedAt: "2024-12-15T08:00:00Z",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
    featured: false,
    published: true,
    tags: ["company", "news", "expansion"],
  },
];

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Helper function to calculate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper function to generate unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
