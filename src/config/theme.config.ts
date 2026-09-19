const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://quietpages-eta.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Chapter Chats with Caroline",
  description:
    "An book review blog, which I review all the book I read one chapter at a time.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/andreialba/quietpages",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "chapterchatswithcaroline@yahoo.com",
  socialHandle: "@chapterchatswithcaroline",
  socialUrl: "https://www.instagram.com/chapterchatswithcaroline"
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: "Instagram", icon: "instagram" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "caroline-dcruz",
    name: "Caroline Dcruz",
    bio: "An book reviewer, reviewing every book I read one chapter at a time",
    longBio:
      "Caroline reviews and recommendations books that she reads and gives you valuable insights on them",
    avatar: "/avatars/caroline-dcruz.svg",
  }
];

export const categories = [
  { slug: "essays", name: "Essays" },
  { slug: "design", name: "Design" },
  { slug: "engineering", name: "Engineering" },
  { slug: "field-notes", name: "Field Notes" },
  { slug: "interviews", name: "Interviews" },
];

export const tags = [
  { slug: "writing", name: "Writing" },
  { slug: "typography", name: "Typography" },
  { slug: "minimalism", name: "Minimalism" },
  { slug: "tools", name: "Tools" },
  { slug: "travel", name: "Travel" },
  { slug: "process", name: "Process" },
  { slug: "web", name: "Web" },
  { slug: "books", name: "Books" },
];
