
export interface Article {
  id: number;
  title: string;
  imageSrc?: string;
  category?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  commentCount?: number;
}

export const sliderArticles: Article[] = [
  { id: 1, title: "The Chinese smartphone upstarts taking on Apple and Samsung", imageSrc: "/images/demo-14-1-75x75.jpg" },
  { id: 2, title: "Presidential Train Now Available For Jakartans Traveling To Bandung", imageSrc: "/images/demo-15-75x75.jpg" },
  { id: 3, title: "A Digital Media Startup Growing Up With Millennial Women", imageSrc: "/images/demo-19-75x75.jpg" }, 
  { id: 4, title: "How to get around in Jakarta without losing your mind", imageSrc: "/images/demo-20-75x75.jpg" },
];

export const latestArticles: Article[] = [
  { id: 1, title: "Unconventional Workouts That Torch Fat And Sculpt Muscle", imageSrc: "/images/demo-25-120x86.jpg" },
  { id: 2, title: "Millions of Indigenous People May Lose Voting Rights: Alliance", imageSrc: "/images/demo-30-120x86.jpg" },
  { id: 3, title: "Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games", imageSrc: "/images/demo-32-120x86.jpg" },
  { id: 4, title: "President Joko ''Jokowi'' Widodo Refuses to Sign MD3 Law", imageSrc: "/images/demo-33-120x86.jpg" },
  { id: 5, title: "Garuda operates larger planes for Jakarta-Palembang route", imageSrc: "/images/demo-48-120x86.jpg" },
];

export const opinionListArticles: Article[] = [
  { id: 1, title: "Tour showcases shared art history of Indonesia and Singapore" },
  { id: 2, title: "Finland Has An Education System The Other Country Should Learn From" },
  { id: 3, title: "Women in Politics: Urgency of Quota System For Women In Regional Elections" },
  { id: 4, title: "China's Peng banned and fined for Wimbledon corruption attempt" },
  { id: 5, title: "Democratic Party politician calls Prabowo 'cardboard general'" },
];

export const heroArticle: Article = {
  id: 1,
  category: "Politics",
  title: "‘Election was rigged’ says opposition, police confirm three dead",
  author: "John Doe",
  date: "February 17, 2020",
  commentCount: 0,
  excerpt: "When we get out of the glass bottle of our ego and when we escape like the squirrels in the cage of our personality and get into the forest again, we shall shiver with cold and fright.",
  imageSrc: "/images/demo-34-750x375.jpg"
};

export const subHeroArticles: Article[] = [
  {
      id: 1,
      category: "Business",
      title: "Grab tackles Jakarta's odd-even license plate policy with special algorithm",
      date: "February 17, 2020",
      imageSrc: "/images/demo-2-350x250.jpg"
  },
  {
      id: 2,
      category: "Politics",
      title: "Jokowi supporters try to prevent anti-Jokowi activist from entering Batam",
      date: "August 10, 2018",
      imageSrc: "/images/demo-12-350x250.jpg"
  }
];

export const rightSidebarArticles: Article[] = [
  {
      id: 1,
      category: "Opinion",
      title: "Democratic Party politician calls Prabowo ‘cardboard general’",
      author: "John Doe",
      date: "August 10, 2018",
      excerpt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
      imageSrc: "/images/demo-24-350x250.jpg"
  },
  {
      id: 2,
      category: "Lifestyle",
      title: "Google tracks location data even when users turn service off",
      author: "John Doe",
      date: "August 14, 2018",
      excerpt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...",
      imageSrc: "/images/demo-49-350x250.jpg"
  }
];

export const siteConfig = {
  name: "The Downtown",
  logo: "/logo.png",
  copyright: "The Downtown. All rights reserved."
};

export const navItems = [
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Politics', path: '/politics' },
  { name: 'Business', path: '/business' },
  { name: 'National', path: '/national' },
  { name: 'Culture', path: '/culture' },
  { name: 'Opinion', path: '/opinion' },
  { name: 'Lifestyle', path: '/lifestyle' },
  { name: 'Sports', path: '/sports' },
];

export const socialLinks = {
  facebook: "#",
  twitter: "#",
  youtube: "#",
  rss: "#"
};

export const adConfig = {
  sidebarBanner: {
    src: "/images/banner-ad-345x345.jpg",
    alt: "Advertisement",
    width: 300,
    height: 250
  }
};

