import blogDescriptions from "./blog-descriptions.json";

export type BlogPost = {
  id: string;
  category: string;
  title: string;
};

const basePost: BlogPost[] = [
  {
    id: "Why-Most-Modern-Websites-Fail",
    category: "SOFTWARE ENGINEERING",
    title: "Why Most Modern Websites Feel Slow",
  },
  {
    id: "Reality-of-a-student-founder-in-london",
    category: "STARTUPS",
    title: "Reality of a Student Founder in London",
  },
  {
    id: "The-Rise-of-Vibe-Coding",
    category: "AI & DEVELOPMENT",
    title: "The Rise of Vibe Coding",
  },
  {
    id: "npm-install-prayer",
    category: "Developer Humor",
    title: "When you run npm install and pray",
  },
];

export interface BlogPostWithDescription extends BlogPost {
  description: string;
}

export const posts: BlogPostWithDescription[] = basePost.map((post) => ({
  ...post,
  description: blogDescriptions[post.id as keyof typeof blogDescriptions] || "",
}));