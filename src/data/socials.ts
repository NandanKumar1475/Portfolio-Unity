import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/NandanKumar1475",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nandan-kumar-82989b1b8/",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    href: "mailto:nandankumar1475@gmail.com",
    icon: Mail,
  },
] as const;

export const contactEmail = "nandankumar1475@gmail.com";
