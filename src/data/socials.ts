import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    href: "mailto:nandankumar1475@gmail.com",
    icon: Mail,
  },
] as const;

export const contactEmail = "nandankumar1475@gmail.com";
