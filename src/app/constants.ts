interface ISocialLinks {
  name: string;
  url: string;
  key: string;
}

const socialLinks: ISocialLinks[] = [
  {
    name: "github",
    url: "http://github.com",
    key: "github",
  },
  {
    name: "Frontend Mentor",
    url: "http://frontend-mentor.com",
    key: "frontend-mentor",
  },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com",
    key: "linkedin",
  },
  {
    name: "Twitter",
    url: "http://twitter.com",
    key: "twitter",
  },
  {
    name: "Instagram",
    url: "http://instagram.com",
    key: "instagram",
  },
];

export default socialLinks;
