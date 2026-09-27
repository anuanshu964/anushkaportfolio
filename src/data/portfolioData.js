export const personalData = {
  name: "D. Anushka",
  role: "B.Tech Artificial Intelligence & Machine Learning Student",
  headline: "B.Tech AI & ML Student | Aspiring AI/ML Developer",
  location: "India",
  email: "anuanshu964@gmail.com",
  linkedin: "https://www.linkedin.com/in/d-anushka",
  github: "https://github.com/anuanshu964",
  githubHandle: "anuanshu964",
  bio: "I am a B.Tech student specializing in Artificial Intelligence and Machine Learning. I am interested in building intelligent systems, learning emerging technologies, and developing practical software projects. I have strong analytical, logical reasoning, and problem-solving skills.",
  stats: [
    { label: "Specialization", value: "AI & Machine Learning" },
    { label: "Core Focus", value: "Intelligent Systems" },
    { label: "Key Strengths", value: "Analytical & Problem Solving" },
    { label: "Status", value: "Available for Internships" },
  ]
};

export const skillsData = {
  programmingLanguages: [
    { name: "Python", level: "Advanced", category: "Language", icon: "Code2", desc: "Machine Learning, Scripting, Data Analytics" },
    { name: "Java", level: "Intermediate", category: "Language", icon: "Coffee", desc: "OOPs Concepts, Robust Application Logic" },
    { name: "C", level: "Intermediate", category: "Language", icon: "Cpu", desc: "Procedural Programming, System Architecture" },
  ],
  coreCS: [
    { name: "Data Structures", level: "Core", category: "CS", icon: "Binary", desc: "Arrays, Linked Lists, Trees, Stacks, Queues, Graphs" },
    { name: "OOPs", level: "Core", category: "CS", icon: "Boxes", desc: "Polymorphism, Inheritance, Encapsulation, Abstraction" },
    { name: "DBMS", level: "Core", category: "CS", icon: "Database", desc: "Relational Modeling, SQL Queries, Normalization" },
  ],
  problemSolving: [
    { name: "Analytical Thinking", level: "Proficient", category: "Aptitude", icon: "LineChart", desc: "Data Interpretation, Pattern Extraction" },
    { name: "Logical Reasoning", level: "Proficient", category: "Aptitude", icon: "BrainCircuit", desc: "Algorithmic Logic, Deductive Analysis" },
    { name: "Problem Solving", level: "Proficient", category: "Aptitude", icon: "Lightbulb", desc: "Edge Case Detection, Algorithmic Optimization" },
  ],
  toolsAndPlatforms: [
    { name: "VS Code", category: "Development", icon: "Terminal", desc: "Primary IDE, Extensions, Debugging" },
    { name: "Git", category: "Version Control", icon: "GitBranch", desc: "Source Control, Branching, Collaboration" },
    { name: "GitHub", category: "Cloud VCS", icon: "Github", desc: "Repositories, Code Reviews, Portfolio Showcasing" },
    { name: "MS Office", category: "Productivity", icon: "FileSpreadsheet", desc: "Documentation, Data Analysis, Reports" },
  ]
};

export const projectsData = [
  {
    id: "forgemind",
    title: "ForgeMind – AI Predictive Maintenance",
    tagline: "Intelligent Anomaly Detection for Industrial Equipment",
    description: "An AI-based predictive maintenance system that detects abnormal machine behavior and helps identify potential equipment failures early using unsupervised machine learning.",
    longDescription: "ForgeMind continuously evaluates machine telemetry to identify outliers before critical component breakdown occurs. Leveraging the Isolation Forest algorithm, the model flags unusual fluctuations in temperature, vibration, and rotational speeds, significantly reducing unexpected downtime.",
    tags: ["Python", "Machine Learning", "Isolation Forest", "Data Analysis", "Predictive AI"],
    featured: true,
    badge: "Featured AI Project",
    status: "Completed",
    stats: [
      { label: "Model", value: "Isolation Forest" },
      { label: "Target", value: "Zero Downtime" },
      { label: "Method", value: "Unsupervised ML" }
    ],
    features: [
      "Real-time sensor telemetry anomaly classification",
      "Isolation Forest algorithm tuned for low false-positive rates",
      "Early warning threshold indicators to preempt mechanical failures",
      "Clean data preprocessing and feature scaling pipeline in Python"
    ],
    github: "https://github.com/anuanshu964/forgemind-ai-maintenance",
    demo: "#"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tagline: "Modern, Responsive Developer Portfolio",
    description: "A responsive portfolio website showcasing my skills, projects, certifications and professional profile with a cutting-edge AI-inspired dark interface.",
    longDescription: "Engineered from scratch using modern web technologies to exhibit a clean, high-performance, and accessible profile for internships and recruitment. Features responsive glassmorphic cards, smooth navigation, interactive resume viewer, and validated contact forms.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Lucide Icons", "Vite"],
    featured: true,
    badge: "Live Web App",
    status: "Completed",
    stats: [
      { label: "Performance", value: "100%" },
      { label: "Responsive", value: "Mobile/Desktop" },
      { label: "Architecture", value: "Modular React" }
    ],
    features: [
      "Modern dark theme with glassmorphic cards and subtle gradient glows",
      "Interactive technical skills explorer and certifications showcase",
      "Built-in interactive resume viewer with print and download ready formats",
      "Client-side verified contact form with instant validation feedback"
    ],
    github: "https://github.com/anuanshu964/anushkaportfolio",
    demo: "#hero"
  },
  {
    id: "future-aiml",
    title: "NeuroSense – Multi-Modal Edge AI",
    tagline: "Upcoming Deep Learning Research Project",
    description: "An upcoming machine learning project designed for automated sensory pattern recognition, computer vision analysis, and real-time inference.",
    longDescription: "Currently in architectural design phase, NeuroSense explores state-of-the-art neural network pipelines for edge computer vision and multimodal predictive reasoning. Focused on optimizing lightweight deep neural architectures.",
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "CNNs"],
    featured: false,
    badge: "Upcoming Project",
    status: "In Development",
    stats: [
      { label: "Phase", value: "Research & Design" },
      { label: "Domain", value: "Computer Vision" },
      { label: "Framework", value: "PyTorch" }
    ],
    features: [
      "Exploratory data analysis on benchmark vision datasets",
      "Deep convolutional neural network architecture prototyping",
      "Latency vs. accuracy benchmark experiments for real-time deployment",
      "Modular Python inference engine with extensible pipeline design"
    ],
    github: "https://github.com/anuanshu964",
    demo: "#"
  }
];

export const certificationsData = [
  {
    id: "c-simplilearn",
    title: "C Programming",
    issuer: "Simplilearn",
    badgeColor: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300",
    iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
    description: "Comprehensive certification covering procedural programming, memory management, pointers, and algorithm design in C.",
    skillsAcquired: ["Procedural Logic", "Pointers & Memory", "Dynamic Allocation", "Modular Programming"],
    verified: true
  },
  {
    id: "java-scaler",
    title: "Java Programming",
    issuer: "Scaler",
    badgeColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    iconBg: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    description: "In-depth certification covering object-oriented architecture, classes, interfaces, collections framework, and clean code principles.",
    skillsAcquired: ["Object-Oriented Design", "Inheritance & Polymorphism", "Java Collections", "Exception Handling"],
    verified: true
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Engineering College / University",
    location: "India",
    status: "Currently Pursuing",
    summary: "Rigorous academic curriculum emphasizing foundations of artificial intelligence, machine learning algorithms, statistical modeling, algorithmic problem solving, and software engineering.",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning & Intelligent Systems",
      "Core Coursework: Data Structures & Algorithms, DBMS, OOPs with Java/C++, Machine Learning Fundamentals",
      "Active participant in technical problem solving, coding challenges, and software development projects",
      "Maintaining strong academic record with analytical focus"
    ]
  }
];
