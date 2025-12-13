export interface link {
  id: number;
  name: string;
  url: string;
}

const rawLinks = [
  { name: "About", url: "#" },
  { name: "Blog & News", url: "#" },
  { name: "Contact", url: "#" },
];

export const navbarLinks: link[] = rawLinks.map((link, index) => ({
  id: index + 1,
  ...link,
}));
