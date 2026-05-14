export type ProjectCategory = "XR" | "VR" | "AR" | "Simulation" | "Unity Tools";

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  solutions: string[];
  metrics: string[];
  learnings: string[];
  screenshots: string[];
  demoVideoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: ProjectCategory;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    id: "vr-screw-simulator",
    slug: "vr-screw-insertion-training-simulator",
    title: "VR Screw Insertion Training Simulator",
    subtitle: "Physics-driven training workflow for industrial assembly practice.",
    description:
      "A Unity VR simulation where a screwdriver interacts with a structured screw insertion workflow using grab interactions, alignment checks, torque resistance, collision validation, and procedural feedback.",
    problemStatement:
      "Industrial training needs repeatable practice environments where learners can understand tool alignment, force feedback, sequencing, and safety constraints before entering a physical workspace.",
    features: [
      "XR grab interaction for screwdriver handling",
      "Alignment validation between bit, screw head, and insertion axis",
      "Insertion depth simulation with staged feedback",
      "Torque and resistance logic for training realism",
      "Collision validation for incorrect contact states",
      "Procedural workflow controller with step-based validation",
      "Audio, visual, and UI feedback layers",
      "Modular architecture for additional tools or fasteners",
    ],
    techStack: [
      "Unity",
      "C#",
      "XR Interaction Toolkit",
      "OpenXR",
      "Unity Physics",
      "Input System",
      "ScriptableObjects",
    ],
    challenges: [
      "Keeping the tool interaction stable while preserving realistic resistance.",
      "Separating validation logic from visual and UI feedback.",
      "Avoiding duplicated logic as workflow steps became more complex.",
    ],
    solutions: [
      "Created a staged interaction manager that tracks grab state, alignment state, insertion progress, and completion events.",
      "Used ScriptableObjects for configurable thresholds such as angle tolerance, collision zones, and resistance levels.",
      "Decoupled feedback through events so UI, sound, and visual indicators respond without owning simulation logic.",
    ],
    metrics: [
      "Reduced repeated setup by using modular workflow configuration.",
      "Designed for stable frame pacing with pooled feedback objects.",
      "Supports extension into additional industrial assembly tasks.",
    ],
    learnings: [
      "Small interaction tolerances matter more in VR than in screen-based gameplay.",
      "Training simulators benefit from clear failure states, not just success states.",
      "Event-driven feedback keeps simulation code easier to maintain.",
    ],
    screenshots: [
      "/projects/screw-sim-1.svg",
      "/projects/screw-sim-2.svg",
      "/projects/screw-sim-3.svg",
    ],
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/",
    featured: true,
    category: "VR",
    thumbnail: "/projects/screw-sim-1.svg",
  },
  {
    id: "chemistry-lab",
    slug: "virtual-chemistry-lab-simulation",
    title: "Virtual Chemistry Lab Simulation",
    subtitle: "Interactive lab workflow with experiment guidance and reactions.",
    description:
      "A Unity-based chemistry lab simulation involving test tube handling, pouring concepts, particle reactions, experiment sequencing, instructional UI, and interactive lab objects.",
    problemStatement:
      "Learners need a safe and repeatable digital lab where they can practice experiment steps, observe reaction feedback, and understand procedure without physical material constraints.",
    features: [
      "Test tube grab and placement interactions",
      "Pouring workflow with trigger-based liquid transfer concepts",
      "Particle reaction feedback for chemical events",
      "Instructional UI for guided experiment steps",
      "Experiment state tracking and validation",
      "Reusable interactable object patterns",
      "Feedback for correct and incorrect procedure states",
    ],
    techStack: [
      "Unity",
      "C#",
      "Unity UI",
      "Particle System",
      "Physics Triggers",
      "ScriptableObjects",
      "Event-driven Architecture",
    ],
    challenges: [
      "Representing liquid behavior clearly without expensive real fluid simulation.",
      "Guiding the learner without overwhelming the lab view.",
      "Keeping experiment sequence validation flexible for future reactions.",
    ],
    solutions: [
      "Modeled pouring as an interaction state with visual liquid levels, trigger checks, and particle reactions.",
      "Used compact instructional panels and contextual feedback instead of persistent tutorial overlays.",
      "Separated experiment definitions from interaction components to support additional procedures.",
    ],
    metrics: [
      "Reusable lab object setup for future experiments.",
      "Lightweight reaction visuals suitable for real-time Unity scenes.",
      "Clear learner feedback for each procedure checkpoint.",
    ],
    learnings: [
      "Educational simulations need both interaction freedom and procedural guardrails.",
      "Approximation can communicate liquid behavior effectively when feedback is synchronized.",
      "Instructional UI should stay close to the action it explains.",
    ],
    screenshots: [
      "/projects/chem-lab-1.svg",
      "/projects/chem-lab-2.svg",
      "/projects/chem-lab-3.svg",
    ],
    demoVideoUrl: "https://www.youtube.com/watch?v=ir8XRSZr2j0",
    githubUrl: "https://github.com/",
    featured: true,
    category: "Simulation",
    thumbnail: "/projects/chem-lab-1.svg",
  },
  {
    id: "xr-sandbox",
    slug: "xr-interaction-sandbox",
    title: "XR Interaction Sandbox",
    subtitle: "Technical demo of reusable XR interaction patterns.",
    description:
      "A compact Unity XR sandbox demonstrating grab interactions, ray interaction, socket workflows, UI interaction, teleport movement, and object interaction pipelines.",
    problemStatement:
      "XR teams need developers who can compose the core interaction primitives that power production AR/VR applications and adapt them to different devices and use cases.",
    features: [
      "Direct grab and distance grab interactions",
      "Ray-based object and UI interaction",
      "Socket snapping and placement validation",
      "Teleport locomotion setup",
      "Object interaction workflows",
      "Reusable interactable prefabs",
      "Input System integration",
    ],
    techStack: [
      "Unity",
      "C#",
      "XR Interaction Toolkit",
      "OpenXR",
      "Input System",
      "Unity UI",
      "Raycasting",
    ],
    challenges: [
      "Keeping multiple interaction modes predictable in the same scene.",
      "Preventing interaction conflicts between ray, grab, and socket states.",
      "Designing demo content that communicates engineering capability quickly.",
    ],
    solutions: [
      "Organized interactables around explicit states and interaction layers.",
      "Used clear socket rules and visual affordances to reduce ambiguity.",
      "Built the scene as a recruiter-friendly technical proof rather than a feature dump.",
    ],
    metrics: [
      "Covers core XR interaction primitives in one focused demo.",
      "Designed as a reusable reference scene for future prototypes.",
      "Supports quick adaptation into training, lab, or enterprise demos.",
    ],
    learnings: [
      "Interaction layers make XR scenes easier to reason about.",
      "A small polished demo can show more skill than a large unfocused scene.",
      "Technical affordances are as important as visual design in XR.",
    ],
    screenshots: [
      "/projects/xr-sandbox-1.svg",
      "/projects/xr-sandbox-2.svg",
      "/projects/xr-sandbox-3.svg",
    ],
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com/",
    featured: true,
    category: "XR",
    thumbnail: "/projects/xr-sandbox-1.svg",
  },
  {
    id: "sony-xyn-validation",
    slug: "sony-xyn-spatial-reality-display-mocopi-testing",
    title: "Sony XYN Spatial Reality Display + mocopi Testing",
    subtitle: "XR hardware and motion capture workflow validation for immersive content pipelines.",
    description:
      "A practical testing and evaluation project focused on Sony XYN Spatial Reality Display developer workflows and mocopi PC motion capture pipeline readiness for Unity/XR content.",
    problemStatement:
      "Emerging XR hardware and motion capture tools need careful workflow validation before they can be used confidently in simulation, training, visualization, or interactive 3D production pipelines.",
    features: [
      "Reviewed Spatial Reality Display development workflow and SDK/plugin readiness",
      "Tested glasses-free 3D content viewing assumptions for immersive visualization",
      "Evaluated mocopi PC motion capture workflow for lightweight body tracking",
      "Checked Windows PC setup requirements and practical development constraints",
      "Studied BVH/FBX motion data output flow for 3D and Unity-ready pipelines",
      "Mapped hardware testing observations into XR production use cases",
      "Documented integration risks, setup friction, and performance considerations",
      "Assessed suitability for simulation, training, and interactive 3D demos",
    ],
    techStack: [
      "Sony XYN",
      "Spatial Reality Display",
      "mocopi PC",
      "Unity",
      "OpenXR",
      "Motion Capture",
      "BVH / FBX",
      "Windows PC",
    ],
    challenges: [
      "Understanding how glasses-free 3D display development differs from headset-based XR.",
      "Evaluating motion capture data flow from mocopi PC into downstream 3D workflows.",
      "Identifying hardware, receiver, and PC requirement constraints before production use.",
    ],
    solutions: [
      "Created a validation checklist covering setup, display behavior, capture workflow, export formats, and Unity/XR relevance.",
      "Separated display testing from motion capture testing so each pipeline could be evaluated independently.",
      "Documented practical risks such as setup dependency, motion accuracy expectations, PC requirements, and workflow handoff points.",
    ],
    metrics: [
      "Validated product workflow fit for immersive visualization and simulation demos.",
      "Mapped motion capture output into common animation handoff formats such as BVH and FBX.",
      "Produced recruiter-friendly proof of comfort testing emerging XR hardware ecosystems.",
    ],
    learnings: [
      "XR engineering often requires evaluating hardware constraints before writing application logic.",
      "Motion capture workflows are only useful when setup, capture quality, export, and retargeting are treated as one pipeline.",
      "Spatial display and body tracking tools can support simulation work when their limitations are understood early.",
    ],
    screenshots: [
      "/projects/sony-xyn-1.svg",
      "/projects/sony-xyn-2.svg",
      "/projects/sony-xyn-3.svg",
    ],
    demoVideoUrl: "https://xyn.sony.net/en/developer/spatial-reality-display",
    githubUrl: "https://xyn.sony.net/en/products/mocopi_pc",
    featured: true,
    category: "XR",
    thumbnail: "/projects/sony-xyn-1.svg",
  },
];

export const projectFilters = ["All", "XR", "VR", "AR", "Simulation", "Unity Tools"] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
