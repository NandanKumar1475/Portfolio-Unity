import {
  Binary,
  Box,
  Braces,
  Cpu,
  DatabaseZap,
  GitBranch,
  Layers,
  MonitorCog,
  Orbit,
  PackageCheck,
  PenTool,
  Radar,
  ScanLine,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Working" | "Familiar";
    icon: typeof Braces;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Production-friendly scripting and frontend implementation.",
    skills: [
      { name: "C#", level: "Core", icon: Braces },
      { name: "TypeScript", level: "Working", icon: Binary },
      { name: "JavaScript", level: "Working", icon: Terminal },
    ],
  },
  {
    title: "Unity / XR",
    description: "Interaction-heavy immersive application development.",
    skills: [
      { name: "Unity", level: "Core", icon: Box },
      { name: "XR Interaction Toolkit", level: "Core", icon: Orbit },
      { name: "OpenXR", level: "Working", icon: Radar },
      { name: "Input System", level: "Working", icon: ScanLine },
      { name: "Cinemachine", level: "Working", icon: Sparkles },
      { name: "Unity UI", level: "Core", icon: Layers },
    ],
  },
  {
    title: "Performance",
    description: "Runtime-aware systems for reliable simulation behavior.",
    skills: [
      { name: "Object Pooling", level: "Core", icon: PackageCheck },
      { name: "Optimization", level: "Core", icon: Cpu },
      { name: "Profiling", level: "Working", icon: MonitorCog },
      { name: "Memory Management", level: "Working", icon: DatabaseZap },
    ],
  },
  {
    title: "Tools",
    description: "Daily workflow tools for source control and asset iteration.",
    skills: [
      { name: "Git", level: "Core", icon: GitBranch },
      { name: "GitHub", level: "Core", icon: Workflow },
      { name: "Blender", level: "Familiar", icon: PenTool },
      { name: "Visual Studio", level: "Core", icon: Terminal },
    ],
  },
];

export const coreCapabilities = [
  "Grab, ray, socket, UI, and teleport interactions",
  "Physics-driven validation and collision workflows",
  "ScriptableObject-based configuration",
  "Event-driven feedback systems",
  "Object pooling and runtime optimization",
  "Instructional UI for simulation workflows",
];
