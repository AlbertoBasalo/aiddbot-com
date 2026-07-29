export type DocNavItem = {
  href: string;
  text: string;
  external?: boolean;
};
const GITHUB_REPO = "https://github.com/AIDDbot/AIDDbot";

export const DOC_NAV: DocNavItem[] = [
  { href: "/getting-started/", text: "Getting Started" },
  { href: "/workflow/", text: "Workflow" },
  { href: "/skills/", text: "Skills" },
  { href: GITHUB_REPO, text: "GitHub", external: true },
];
