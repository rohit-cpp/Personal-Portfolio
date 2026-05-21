import {
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiSocketdotio,
  SiFastapi,
  SiPostman,
  SiLangchain,
  SiNextdotjs,
  SiRedis,
  SiMysql,
  SiRabbitmq,
  SiLeetcode,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { DiHtml5, DiCss3 } from "react-icons/di";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Rohit Gawande",
  greet: "Hello there! 👋🏻",
  description:
    "AI Software Engineer experienced in building scalable infrastructure, distributed systems, and AI-powered applications. Proficient in Node.js, Python, Redis, and modern AI-driven development workflows.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Distributed Task Scheduler",
    description:
      "Node.js · Express · Redis · BullMQ · Docker — Redis-backed distributed job scheduling system using BullMQ with priority queues, delayed jobs, cron scheduling, deduplication, and parent-child DAG workflows. 5x throughput via concurrent workers, rate limiting, and priority-based scheduling. Reduced failure rates across 10,000+ concurrent tasks with exponential backoff retries and stalled job detection.",
    image: projectImage5,
    githubLink: "https://github.com/rohit-cpp/Distributed-Task-Scheduler",
  },
  {
    id: 2,
    name: "Microservices Blogging Platform",
    description:
      "Next.js · TypeScript · PostgreSQL · React · RabbitMQ — Reduced database reads by ~60% using Redis cache-aside with cursor pagination and TTL-based caching. Event-driven cache invalidation via RabbitMQ durable queues. Eliminated duplicate submissions through idempotency-key middleware with 24-hour TTL. Improved debugging by ~40% with correlation-ID logging and centralized error handling. Dockerized on AWS EC2.",
    image: projectImage2,
    githubLink: "https://github.com/rohit-cpp/Microservices-Blogging-Platform",
  },
  {
    id: 3,
    name: "TeamScript — AI Collaborative Workspace",
    description:
      "MERN · Socket.IO · Gemini API · Tiptap — AI-powered collaborative team workspace built in 7 days. Real-time document editing with version control, AI grammar/SEO tools, suggestion system, and role-based team management. Features rephrase, summarize, translate, and title generation powered by Gemini API.",
    image: projectImage3,
    githubLink: "https://github.com/rohit-cpp/MERN-TeamScript",
  },
  {
    id: 4,
    name: "MERN Job Portal",
    description:
      "MongoDB · Express · React · Node.js · JWT · Gemini AI — Job portal with recruiter/student dashboards, role-based access, job posting/filtering, and AI-powered rejection feedback. Includes career roadmap generator providing personalized AI-curated learning paths based on user interests and goals.",
    image: projectImage4,
    githubLink: "https://github.com/rohit-cpp/MERN-JOB-PORTAL",
  },
  {
    id: 5,
    name: "Sleep Tracker App",
    description:
      "Next.js 15 · TypeScript · Neon DB · Prisma · Clerk Auth — Full-stack sleep tracking application with mood correlation. Interactive charts via react-chartjs-2 showing daily sleep hours and mood patterns. Best/worst day tracking, secure authentication, and serverless PostgreSQL on Neon DB.",
    image: projectImage6,
    githubLink: "https://github.com/rohit-cpp/Sleep-Tracker",
  },
  {
    id: 6,
    name: "LMS — Learning Management System",
    description:
      "MongoDB · Express · React · Node.js · JWT — Full-featured Learning Management System with course creation, student enrollment, lecture management, and progress tracking. Role-based access for instructors and students with secure JWT authentication.",
    image: projectImage1,
    githubLink: "https://github.com/rohit-cpp/MERN-LMS-react-project",
  },
  {
    id: 7,
    name: "FoodieHub — MERN Food E-Commerce",
    description:
      "MongoDB · Express · React · Node.js · Context API — Fully functional food e-commerce website with category-based browsing, cart management with quantity controls, price/discount display, and full-stack deployment. Responsive UI built with Tailwind CSS.",
    image: projectImage5,
    githubLink: "https://github.com/rohit-cpp/Mern-Stack-Food-App",
  },
  {
    id: 8,
    name: "Bluestock ML Financial Analysis",
    description:
      "Python · Flask · SQL · Pandas · ML — Production-style ML-powered financial analysis system with interactive dashboard. Generates structured insights for companies using stock data APIs. Supports MySQL/SQLite with environment-based configuration and sample data loading scripts.",
    image: projectImage2,
    githubLink: "https://github.com/rohit-cpp/Bluestock-ml-analysis",
  },
];

export const BIO = [
  "Backend and AI Software Engineer experienced in building scalable infrastructure, distributed systems, and AI-powered applications. Proficient in Node.js, Python, Redis, and modern AI-driven development workflows to accelerate productivity.",
  "At LeadMasters AI, I built a PRM module with 30+ REST endpoints and 5 database tables for appointment booking, doctor scheduling, clinical sessions, and real-time conflict detection. Integrated AWS SES with automated DKIM/SPF/DMARC setup, open/click tracking, and unsubscribe workflows. Designed a Redis-backed campaign engine processing up to 1,000 emails/min with configurable batching, rate limiting, and credit lifecycle management.",
  "Engineered AI-powered applications using RAG pipelines, LLM integrations, Flux Kontext APIs, and scalable backend workflows for production deployments. Built and maintained CRM, scheduling, and newsletter automation systems with 30+ dynamic templates, bulk schedulers, and React Native mobile integrations.",
];

export const SKILLS = [
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "TypeScript",
    experience: "1+ year",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <SiNextdotjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <TbBrandReactNative className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React Native",
    experience: "<1 year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-300 lg:text-5xl" />,
    name: "Express",
    experience: "2+ years",
  },
  {
    icon: <SiFastapi className="text-4xl text-teal-400 lg:text-5xl" />,
    name: "FastAPI",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <SiPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <SiMysql className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <SiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <SiPrisma className="text-4xl text-white lg:text-5xl" />,
    name: "Prisma",
    experience: "1+ year",
  },
  {
    icon: <SiLangchain className="text-4xl text-green-400 lg:text-5xl" />,
    name: "LangChain",
    experience: "1+ year",
  },
  {
    icon: <SiRabbitmq className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "RabbitMQ",
    experience: "<1 year",
  },
  {
    icon: <FaDocker className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Docker",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "AWS SES",
    experience: "<1 year",
  },
  {
    icon: <FaGitAlt className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <DiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
  },
  {
    icon: <DiCss3 className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <SiSocketdotio className="text-4xl text-white lg:text-5xl" />,
    name: "Socket.IO",
    experience: "1+ year",
  },
  {
    icon: <SiPostman className="text-4xl text-orange-400 lg:text-5xl" />,
    name: "Postman",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "LeadMasters AI | Onsite, Hyderabad",
    duration: "Aug 2025 – Present",
    description:
      "Built a PRM module with 30+ REST endpoints and 5 database tables for appointment booking, doctor scheduling, clinical sessions, and real-time conflict detection, eliminating double bookings through server-side validation. Integrated AWS SES with automated DKIM/SPF/DMARC setup, open/click tracking, and unsubscribe workflows, reducing email domain configuration time from days to under 2 hours. Designed a Redis-backed campaign engine processing up to 1,000 emails/min with configurable batching, rate limiting, and credit lifecycle management. Engineered AI-powered applications using RAG pipelines, LLM integrations, Flux Kontext APIs, and scalable backend workflows for production deployments. Built and maintained CRM, scheduling, and newsletter automation systems with 30+ dynamic templates, bulk schedulers, and React Native mobile integrations. Collaborated across teams to debug production issues, improve architecture, and deliver end-to-end features in fast-paced startup environments.",
  },
  {
    title: "Software Engineer Intern",
    company: "Bluestock Fintech | Remote, Pune",
    duration: "Jul 2025 – Aug 2025",
    description:
      "Built an IPO management platform (React + Node.js + PostgreSQL) with JWT-based RBAC, secure file uploads, and search/filter across 1,000+ IPO records; optimised API endpoints for mobile responsiveness. Built an ML-powered financial analysis system (Python + MySQL + StockTicker API) that auto-generates structured insights for 100+ companies.",
  },
  {
    title: "Full-Stack Web Development Intern",
    company: "Unified Mentor Pvt. Ltd | Remote, Gurugram",
    duration: "May 2025",
    description:
      "Built a Privacy-Preserving Location-Based Query system (MERN + AES-256 + geospatial indexing) with RBAC, admin dashboard, and audit logging — cut manual oversight time by 40%. Created a responsive marketplace admin dashboard (React + Zustand + shadcn/ui) with full CRUD for users, shops, products, offers, categories, and floors.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech, Electronics & Telecommunications",
    institution: "North Maharashtra University, Jalgaon",
    duration: "Jan 2021 – Sep 2024",
    description:
      "Focused on electronics and telecommunications engineering with coursework in programming, data structures, and signal processing. Actively participated in coding clubs and hackathons. Completed projects involving web development and embedded systems.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/rohit-gawande/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rohit-cpp/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/xOmTu32Lsy/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
];
