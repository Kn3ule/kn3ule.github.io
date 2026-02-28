export const personalInfo = {
  name: "Tim Konle",
  title: "Software Engineer GenAI @ Müller",
  description:
    "25-year-old Software Engineer from Germany passionate about AI, cloud technologies, and football. Currently building production GenAI applications at Müller.",
  github: "https://github.com/Kn3ule",
  linkedin: "https://www.linkedin.com/in/tim-konle-3378a8239/",
  image: "/images/Shooting_Syfit.JPG",
}

export const experience = [
  {
    role: "Software Engineer - GenAI",
    company: "Müller",
    period: "Since 2025",
    description: [
      "Design and deploy production GenAI applications leveraging LLMs (Anthropic Claude, OpenAI, Google VertexAI) for multimodal data extraction and structured information processing at scale",
      "Build full-stack Python applications including RESTful APIs (FastAPI), orchestrated ML workflows (Prefect), and microservices architecture on cloud-native infrastructure",
      "Develop end-to-end AI pipelines integrating computer vision, OCR, and LLM-based structured extraction with automatic validation and multi-language processing capabilities",
      "Manage cloud infrastructure on Google Cloud Platform: Kubernetes cluster operations, database management (PostgreSQL), object storage, and DevOps tooling (Docker, Terraform, Helm)",
      "Implement scalable async Python systems with comprehensive testing, CI/CD automation, and observability for production ML services",
    ],
  },
  {
    role: "Software Developer",
    company: "Syfit (Internship, Working Student & Full-Time)",
    period: "2020 – 2025",
    description: [
      "Designed and developed REST APIs and microservices for data exchange with IoT devices, mobile apps, and customer applications",
      "Established AWS infrastructure, implementing AWS IoT Core for scalable IoT device communication",
      "Worked extensively with Python, Docker, Kubernetes, MQTT, and REST protocols",
    ],
  },
]

export const education = [
  {
    degree: "M.Sc. Business Informatics",
    focus: "Focus: Data Science",
    institution: "Aalen University, Germany",
    period: "2023 – 2025",
    thesis:
      "Integrating Sentiment Analysis into Football Scouting: A Data-Driven Approach",
    thesisPartner: "In cooperation with VfB Stuttgart 1893 AG",
    thesisPdf: "/pdf/Masterthesis_Tim_Konle.pdf",
  },
  {
    degree: "B.Sc. Business Informatics",
    institution: "Aalen University, Germany",
    period: "2018 – 2022",
    thesis:
      "Konzeption und Entwicklung eines Chatbots zur Informationsbeschaffung für Studierende des Bachelorstudiengangs Wirtschaftsinformatik an der Hochschule Aalen",
    thesisPdf: "/pdf/Bachelorarbeit_Tim_Konle.pdf",
  },
]

export const projects = [
  {
    title: "Sentiment Analysis for Football Scouting",
    description:
      "Master's thesis in cooperation with VfB Stuttgart 1893 AG. Automated sentiment analysis of social media comments (Instagram) for football scouting. GPT 4o-mini achieved the best performance with 82% accuracy compared to XLM-Roberta (65%) and VADER (38%).",
    techStack: ["Python", "OpenAI GPT-4o-mini", "Streamlit", "XLM-Roberta", "VADER", "Docker"],
    images: ["/images/SAFS_upload_json.png", "/images/SAFS_upload_csv.png", "/images/SAFS_visualize_data.png"],
    github: "https://github.com/Kn3ule/sentiment-analysis-football-scouting",
    category: "AI/ML",
  },
  {
    title: "WI_HSAA Chatbot",
    description:
      "Developed a chatbot as part of my bachelor's thesis to help Business Informatics students at Aalen University find information about their degree program.",
    techStack: ["Python", "Scikit-Learn", "PostgreSQL", "NLP"],
    images: ["/images/WIHSAA_BOT.png", "/images/WIHSAA_BOT2.png"],
    github: "https://github.com/Kn3ule/WI_HSAA_Bot",
    pdf: "/pdf/Bachelorarbeit_Tim_Konle.pdf",
    category: "AI/ML",
  },
  {
    title: "Insite Forum",
    description:
      "Built an employee forum for a fictional company as part of a university programming seminar, working in a team of developers.",
    techStack: ["Python", "Django", "HTML/CSS", "Bootstrap", "PostgreSQL"],
    images: [
      "/images/Insite_Start.png",
      "/images/Insite_Home.png",
      "/images/Insite_Menu.png",
    ],
    github:
      "https://github.com/Projektseminar-Programmierung-Gruppe-4/ProgGr4",
    category: "Web Development",
  },
]

export const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: [
      "LLMs (Claude, GPT, Gemini)",
      "Agentic Development (Claude Code)",
      "LangChain",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NLP",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "Groovy", "Swift", "JavaScript"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Prefect", "REST APIs", "Microservices", "MQTT"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["GCP", "AWS", "Kubernetes", "Docker", "Terraform", "Helm", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Neo4j"],
  },
  {
    title: "Football & Coaching",
    skills: ["DFB C-License", "Sports Data Analytics", "Scouting Analytics"],
  },
]

export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "CV", href: "#cv" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]
