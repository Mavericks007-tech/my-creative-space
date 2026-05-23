export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  client: string;
  role: string;
  year: string;
  category: "Enterprise" | "RAG / AI" | "MVP / SaaS" | "Automation";
  stack: string[];
  highlights: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mavericks-garments-erp",
    title: "Garments Production & Inventory ERP",
    tagline: "Track every piece from cutting to sold.",
    description:
      "A corporate-level web platform for a garments manufacturer to track production movement across cutting, sewing, wash, embroidery, godown, showroom, and final sales. Role-based access, audit-ready movement history, and a dashboard that replaces five status meetings.",
    client: "Mavericks Tech — Enterprise Client",
    role: "Founder, Solution Architect & Lead Engineer",
    year: "2026",
    category: "Enterprise",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Tailwind"],
    highlights: [
      "9 modules: products, batches, production stages, godowns, showrooms, sales, audit, roles, reports",
      "Movement log with source, destination, user, quantity and note for every transfer",
      "Dashboard for production status, ready stock, godown/showroom stock and sales",
    ],
    featured: true,
  },
  {
    slug: "apex-weavers-rag",
    title: "Apex Weavers RAG Knowledge Base",
    tagline: "A factory-floor AI assistant grounded in approved documents.",
    description:
      "RAG system for a woven garments manufacturer. Staff query company SOPs, fabric matrices, compliance checklists, PO samples and HR policy through a chat interface — answers are grounded in approved internal documents only.",
    client: "Apex Weavers Textiles Ltd",
    role: "AI Engineer",
    year: "2026",
    category: "RAG / AI",
    stack: ["Python", "OpenAI", "pgvector", "FastAPI", "Next.js"],
    highlights: [
      "10-document corpus: company profile, fabric specs, capacity, PO, compliance, HR, shipment, FAQ, quote",
      "Department-scoped retrieval for merchandising, production, QA and compliance",
      "Answers cite the source document and section",
    ],
    featured: true,
  },
  {
    slug: "hishabi-ai",
    title: "Hishabi AI — F-Commerce Automator",
    tagline: "From Facebook DM to Pathao consignment in two clicks.",
    description:
      "SaaS platform for Bangladeshi F-commerce sellers. Listens to Messenger/Instagram chats, uses GPT-4o-mini to extract Name/Phone/Address/Product, and books Pathao/RedX deliveries with a human-in-the-loop confirm step.",
    client: "Mavericks Tech — In-house Product",
    role: "Founder & Full-stack Engineer",
    year: "2026",
    category: "MVP / SaaS",
    stack: ["FastAPI", "Next.js", "Supabase", "OpenAI", "Meta Graph API"],
    highlights: [
      "Meta webhook → AI parser → Supabase draft → seller confirm → Pathao booking",
      "Tiered pricing: Free / $15 Growth / $50 Pro with automated bKash + SSLCommerz billing",
      "Founder Panel for solo support — view tenant logs without screenshots",
    ],
    featured: true,
  },
  {
    slug: "fcommerz-mvp",
    title: "Solo-developer build",
    tagline: "Solo-developer build, shipped from a MacBook.",
    description:
      "End-to-end MVP architecture for a single-developer F-commerce platform: Python/FastAPI backend, Next.js dashboard, Supabase auth + DB, OpenAI parser, Pathao/RedX integrations, and a one-click GitHub → Vercel/Railway deploy flow.",
    client: "Internal R&D",
    role: "Solo Engineer",
    year: "2026",
    category: "MVP / SaaS",
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "Vercel", "Railway"],
    highlights: [
      "Human-in-the-loop order confirm flow",
      "Bulk-mode design for booking 50 orders in one click",
      "Environment-variable security, structured logging, DB-first schema",
    ],
  },
  {
    slug: "ai-automation-bangla",
    title: "AI Automation Proposals (Bangla)",
    tagline: "Plain-Bangla proposals for SMB AI adoption.",
    description:
      "Two productised proposals translating AI automation (chat assistants, order parsing, inventory triggers, report generation) into Bangla scope, timeline and pricing for Bangladeshi corporate clients.",
    client: "Multiple SMB / Corporate Clients",
    role: "Solution Designer",
    year: "2026",
    category: "Automation",
    stack: ["Workflow design", "OpenAI", "n8n", "Webhooks"],
    highlights: [
      "Discovery → workflow map → scope → timeline → milestone payments",
      "Localised in Bangla for non-technical decision makers",
    ],
  },
  {
    slug: "stock-management",
    title: "Stock Management System",
    tagline: "Lightweight inventory for corporate offices and SMBs.",
    description:
      "Web-based stock management used by corporate offices and small businesses to track items in/out, low-stock alerts, supplier records and basic reporting — the precursor to the full garments ERP.",
    client: "Multiple Clients",
    role: "Lead Engineer",
    year: "2025",
    category: "Enterprise",
    stack: ["Next.js", "PostgreSQL", "Tailwind", "Supabase"],
    highlights: [
      "Role-based access for owner, manager and staff",
      "Stock-in / stock-out movement with date, user and note",
      "Low-stock alerts and CSV export",
    ],
  },
];