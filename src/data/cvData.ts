export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: {
    linkedin: string;
    portfolio: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date_range: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date_range: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  date_range: string;
  details: string[];
  description?: string;
  live_url?: string;
  github_url?: string;
  image?: string;
  badge?: string;
}

export interface CourseItem {
  title: string;
  provider: string;
  location: string;
  date_range: string;
  details: string;
}

export interface SkillCategories {
  frontend_development: string[];
  react_js_development: string[];
  backend_development: string[];
  api_integration_and_data_handling: string[];
  forms_and_validation: string[];
  database_fundamentals: string[];
  tools_and_version_control: string[];
  software_development_practices: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface CVData {
  personal_information: PersonalInfo;
  summary: string;
  education: EducationItem[];
  professional_experience: ExperienceItem[];
  projects: ProjectItem[];
  courses: CourseItem[];
  skills: SkillCategories;
  languages: LanguageItem[];
}

export const cvData: CVData = {
  personal_information: {
    name: "George Romany",
    title: "Software Engineer | Frontend Developer (Next.js) | Backend Developer (Node.js)",
    email: "george.romany.dev@gmail.com",
    phone: "+20 01055387922",
    location: "Cairo, Egypt",
    links: {
      linkedin: "://linkedin.com",
      portfolio: "my-Porfolio",
    },
  },
  summary:
    "Software Engineer focused on Full-Stack Web Development, with hands-on experience building web applications using React, Next.js, Node.js, and Express.js. Experienced in developing practical projects, including an e-commerce platform and a social media application, with a focus on responsive user interfaces, reusable components, API integration, and backend development. Passionate about writing clean, maintainable code and building scalable web applications while continuously improving technical skills and problem-solving abilities. My 7 years of experience in Document Control have strengthened my organizational skills, attention to detail, and ability to manage workflows efficiently, qualities that I apply to my software development work.",
  education: [
    {
      degree: "Management Information Systems (MIS)",
      institution: "Thebes Academy",
      location: "Cairo, Egypt",
      date_range: "09/2019 – 06/2023",
      details:
        "Developed a web application as a graduation project using HTML, CSS, JavaScript, PHP, and MySQL, gaining practical experience in web development, database management, problem-solving, and application development.",
    },
  ],
  professional_experience: [
    {
      role: "MERN Stack Web Development Trainee",
      company: "AMIT Learning",
      location: "Cairo, Egypt",
      date_range: "06/2026 – Present",
      responsibilities: [
        "Pursuing hands-on training in full-stack web development, focusing on modern web technologies and practical application development.",
        "Building web applications using HTML, CSS, JavaScript, React.js, Next.js, and React Bootstrap, with experience in responsive UI development and reusable components.",
        "Managing application state and forms using Redux Toolkit, Context API, Formik, and Yup.",
        "Learning backend development with Node.js and Express.js, alongside foundational database concepts using MongoDB.",
        "Integrating APIs using Axios and DummyJSON, and implementing navigation and routing with React Router.",
        "Using Git and GitHub for version control and project management.",
        "Applying technical skills through practical projects, including an e-commerce platform, an admin dashboard, and social media applications.",
        "Using Tailwind CSS to build and style modern web interfaces.",
      ],
    },
  ],
  projects: [
    {
      title: "E-Commerce Client",
      description:
        "A modern e-commerce storefront featuring product browsing, product details, product filtering, and shopping cart functionality.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Axios",
        "REST API",
      ],
      date_range: "10/2026 – 10/2026",
      badge: "Client Storefront",
      live_url: "https://e-commerce-alpha-three-89.vercel.app/",
      github_url: "https://github.com/georgeromany3018-ai/E-commerce",
      image: "/screenshots/HomPage.png",
      details: [
        "Implemented dynamic product catalog discovery with category filtering and keyword search using Axios and DummyJSON API.",
        "Engineered comprehensive product detail pages with real-time stock status, customer ratings, and responsive image galleries.",
        "Managed global cart and wishlist states with Redux Toolkit for seamless multi-item quantity updates and persistence.",
        "Structured clean client-side routing with React Router for smooth navigation across storefront pages.",
      ],
    },
    {
      title: "E-Commerce Admin Dashboard",
      description:
        "An administrative dashboard for managing e-commerce products, featuring CRUD operations, search, filtering, sorting, and pagination.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Axios",
        "REST API",
      ],
      date_range: "10/2026 – 10/2026",
      badge: "Admin Dashboard",
      live_url: "https://e-commerce-alpha-three-89.vercel.app/dashboard",
      github_url: "https://github.com/georgeromany3018-ai/E-commerce",
      image: "/screenshots/AdminPage.png",
      details: [
        "Built administrative product management panel supporting full CRUD workflows (create, read, update, delete).",
        "Implemented multi-field search, category-based filtering, and dynamic column sorting for fast product administration.",
        "Integrated client and server pagination controls to efficiently handle and display large catalog datasets.",
        "Designed structured modal forms with real-time input validation for adding and updating catalog items.",
      ],
    },
  ],
  courses: [
    {
      title: "MERN Stack Development Diploma",
      provider: "Amit Learning",
      location: "Online",
      date_range: "06/2026 – Present",
      details:
        "Completed practical training in full-stack web development using MongoDB, Express.js, React.js, and Node.js, covering frontend development, backend fundamentals, and building web applications.",
    },
    {
      title: "Python Programming Course",
      provider: "Udemy",
      location: "Online",
      date_range: "06/2025 – 08/2025",
      details:
        "Completed an online course covering Python programming fundamentals, including variables, data types, conditional statements, loops, functions, and basic problem-solving.",
    },
    {
      title: "Java Programming Course",
      provider: "Udemy",
      location: "Online",
      date_range: "12/2023 – 03/2024",
      details:
        "Completed an online course covering Java programming fundamentals, including variables, data types, conditional statements, loops, methods, object-oriented programming (OOP), and basic problem-solving.",
    },
  ],
  skills: {
    frontend_development: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "React Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
      "UI Development",
    ],
    react_js_development: [
      "React Hooks",
      "Context API",
      "Redux Toolkit",
      "Component-Based Architecture",
      "Reusable Components",
      "Props and State",
      "React Router",
      "State Management",
    ],
    backend_development: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Server-Side Development",
      "Client-Server Communication",
      "Backend Fundamentals",
    ],
    api_integration_and_data_handling: [
      "Axios",
      "REST API Integration",
      "HTTP Requests",
      "JSON Data Handling",
      "Asynchronous JavaScript",
      "Promises",
      "Async/Await",
    ],
    forms_and_validation: [
      "Formik",
      "Yup",
      "Form Handling",
      "Input Validation",
      "Formik-Based Form Management",
    ],
    database_fundamentals: [
      "MongoDB",
      "NoSQL Database Fundamentals",
      "Data Storage Concepts",
    ],
    tools_and_version_control: [
      "Git",
      "GitHub",
      "Vite",
      "npm",
      "Browser Developer Tools",
    ],
    software_development_practices: [
      "Problem Solving",
      "Debugging",
      "Clean Code Principles",
      "Component Reusability",
      "Responsive Design",
      "Application Development",
    ],
  },
  languages: [
    {
      language: "Arabic",
      proficiency: "Native",
    },
    {
      language: "English",
      proficiency: "Upper-Intermediate (B2)",
    },
  ],
};

