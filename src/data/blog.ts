import blogDescriptions from "./blog-descriptions.json";

export type BlogPost = {
  id: string;
  category: string;
  title: string;
};

const basePost: BlogPost[] = [
  {
    id: "modern-websites-slow",
    category: "SOFTWARE ENGINEERING",
    title: "Why Most Modern Websites Feel Slow",
  },
  {
    id: "student-founder-london",
    category: "STARTUPS",
    title: "Building Products as a Student Founder in London",
  },
  {
    id: "ai-changing-frontend",
    category: "AI & DEVELOPMENT",
    title: "How AI Is Changing Frontend Development",
  },
  {
    id: "first-agency-lessons",
    category: "PERSONAL",
    title: "Lessons I Learned From Building My First Agency",
  },
];

export interface BlogPostWithDescription extends BlogPost {
  description: string;
}

export const posts: BlogPostWithDescription[] = basePost.map((post) => ({
  ...post,
  description: blogDescriptions[post.id as keyof typeof blogDescriptions] || "",
}));