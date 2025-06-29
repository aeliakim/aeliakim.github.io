"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("project");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentMiniProjectIndex, setCurrentMiniProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Stock & Warehouse Management",
      description:
        "A full-stack web to manage stocks and warehouses built with Laravel, Alpine.js, and PostgreSQL. Features include user authentication, admin dashboard, stock management, and warehouse management. Built for CV. Ovaplast.",
      image: [
        "/images/projects/project/gudang_ovaplast.png",
        "/images/projects/project/gudang_dashboard.png",
      ],
      technologies: ["Laravel", "Tailwind CSS", "Alpine.js", "PostgreSQL"],
      live: "https://gudang.ovaplast.com/",
    },
    {
      title: "PRAMASTI (Praktikum Management System)",
      description:
        "Website for managing practicum in Department of Computer Engineering. It has 5 different roles for the students, teachers, and the staff in the department to apply or manage the practicum. This website is made for academic project in Computer Engineering ITS.",
      image: [
        "/images/projects/project/Login.png",
        "/images/projects/project/Home_Praktikan.png",
        "/images/projects/project/Jadwal_Praktikum.png",
      ],
      technologies: ["React", "Express.js", "MySQL"],
      github: "https://github.com/aeliakim/pramasti-api",
    },
    {
      title: "TENAN (Teman Perjalanan)",
      description:
        "App for providing guide for tourist about tourisms place and hotels around it. The app was created for capstone project in Bangkit Academy 2023 Batch 1.",
      image: [
        "/images/projects/project/Home_Screen.png",
        "/images/projects/project/Story_Detail.png",
      ],
      technologies: ["Express.js", "MySQL", "Google Cloud"],
      github: "https://github.com/C23-PC620/tenan-api",
    },
  ];

  const miniProjects = [
    {
      title: "SEVENTEEN Discord Bot",
      description:
        "A Discord bot designed to automatically fetch and post the latest updates from SEVENTEEN's social media account directly to a specified Discord channel. It aims to keep fans updated in real-time without needing to constantly check the official account. Currently, this bot fetch the updates from SEVENTEEN's X (Twitter) official account.",
      image: [
        "/images/projects/miniproject/bot_profile(1).png",
        "/images/projects/miniproject/bot_message.png",
      ],
      technologies: ["JavaScript", "Discord.js", "Twitter API"],
      github: "https://github.com/aeliakim/seventeen-discord-bot",
    },
    {
      title: "Mini Library",
      description:
        "A basic web-based library management system built with Go (Golang) that allows users to add, view, and delete books. The application stores book data in a JSON file and provides a simple web interface.",
      image: ["/images/projects/miniproject/library.png"],
      technologies: ["Go", "HTML", "CSS"],
      github: "https://github.com/aeliakim/LibraryMiniProject-Golang",
    },
    {
      title: "BMI Calculator",
      description:
        "A simple and user-friendly Body Mass Index (BMI) calculator web application built with HTML, CSS, and JavaScript.",
      image: ["/images/projects/miniproject/bmi.png"],
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/revou-fundamental-course/28-oct-24-aeliakim",
      live: "https://revou-fundamental-course.github.io/28-oct-24-aeliakim/",
    },
  ];

  const currentProjects = activeTab === "project" ? projects : miniProjects;
  const currentIndex =
    activeTab === "project" ? currentProjectIndex : currentMiniProjectIndex;
  const setCurrentIndex =
    activeTab === "project"
      ? setCurrentProjectIndex
      : setCurrentMiniProjectIndex;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentProjects.length) % currentProjects.length
    );
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex, activeTab]);

  const nextImage = () => {
    const images = currentProjects[currentIndex]?.image || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = currentProjects[currentIndex]?.image || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImages = Array.isArray(currentProjects[currentIndex]?.image)
    ? currentProjects[currentIndex]?.image
    : [currentProjects[currentIndex]?.image];

  const hasMultipleImages = currentImages.length > 1;

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #f7cac9, #92a8d1)" }}
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
              Desiana Fitria
            </h1>
            <div className="flex space-x-6">
              <Link
                href="#about"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#education"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Education
              </Link>
              <Link
                href="#work"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Work Experience
              </Link>
              <Link
                href="#certifications"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Certifications
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-rose-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Hello, I&apos;m Desiana Fitria
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m a passionate developer, mainly interested in Back-End and
            Cloud Computing, also excited to learn new things to upgrade my
            skills.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/aeliakim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-rose-400 hover:bg-rose-500 text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/desiana-fitria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                I&apos;m a passionate web developer with experience in back-end
                and cloud computing technologies. I love creating tools that can
                accomodate my hobbies and solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6">
                With a background in computer engineering and several hands-on
                projects experience, I specialize in Node.js, Go, and cloud
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "Node.js",
                  "Go",
                  "Google Cloud",
                  "PostgreSQL",
                  "MySQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-rose-200 text-rose-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/Desiana_3x4.jpg"
                alt="Desiana"
                width={256}
                height={256}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Skills & Technologies
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-rose-200">
                <h4 className="text-xl font-semibold mb-6 text-rose-600 text-center">
                  Frontend
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/js-svgrepo-com.svg"
                      alt="JavaScript"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/html-5-svgrepo-com.svg"
                      alt="HTML"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      HTML
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/css-3-svgrepo-com.svg"
                      alt="CSS"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      CSS
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/tailwind-svgrepo-com.svg"
                      alt="Tailwind"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Tailwind
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/blade-ui-kit.svg"
                      alt="Blade"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Blade
                    </span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
                <h4 className="text-xl font-semibold mb-6 text-blue-600 text-center">
                  Backend
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/node-js-svgrepo-com.svg"
                      alt="Node.js"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Node.js
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/go-svgrepo-com.svg"
                      alt="Go"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Go
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/mysql-logo-svgrepo-com.svg"
                      alt="MySQL"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      MySQL
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/postgresql-logo-svgrepo-com.svg"
                      alt="PostgreSQL"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/laravel-1-logo-svgrepo-com.svg"
                      alt="Laravel"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Laravel
                    </span>
                  </div>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
                <h4 className="text-xl font-semibold mb-6 text-purple-600 text-center">
                  Tools & Others
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/google-cloud-svgrepo-com.svg"
                      alt="Google Cloud"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Google Cloud
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/vs-code-svgrepo-com.svg"
                      alt="VS Code"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      VS Code
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/git-svgrepo-com.svg"
                      alt="Git"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Git
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                    <Image
                      src="images/skills/postman-icon-svgrepo-com.svg"
                      alt="Postman"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Postman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-rose-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Bachelor of Computer Engineering
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                      Sepuluh Nopember Institute of Technology
                    </p>
                    <p className="text-gray-600 mb-3">
                      GPA: 3.44/4.00. Focused on software engineering,
                      algorithms, and data structures.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Software Engineering
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Data Structures
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Algorithms
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      2020 - 2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Bangkit Academy 2023 Batch 1
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">
                      Bangkit by Google, GoTo, and Traveloka
                    </p>
                    <p className="text-gray-600 mb-3">
                      Intensive program covering cloud computing technologies
                      and best practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Web Development
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Cloud Computing
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Backend Development
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Work Experience
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-rose-400">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Cloud Computing Mentor
                    </h4>
                    <p className="text-rose-600 font-medium mb-2">
                      Bangkit 2024 Batch 1
                    </p>
                    <ul className="list-disc text-gray-600 text-sm space-y-1 mb-3 ml-4">
                      <li>
                        Led a team of 25 participants in Bangkit 2024 Batch 1.
                      </li>
                      <li>
                        Successfully supported participants in completing their
                        final projects with a high satisfaction rate of 4.89 and
                        a completion rate of 96%.
                      </li>
                      <li>
                        Collaborated with the instructor to deliver engaging
                        learning experiences to Bangkit 2024 Batch 1
                        participants, resulting in a satisfaction rating of
                        4.85.
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Mentoring
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Leadership
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                        Cloud Computing
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      February - July 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Course Certifications
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/dibimbing_id_logo.jpeg"
                    alt="Dibimbing.id"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Golang</h4>
                    <p className="text-sm text-gray-500">Dibimbing.id</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive bootcamp certification covering Golang
                  fundamentals.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2024</span>
                  <a
                    href="https://dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com/production/digital-skill-fair/096600ab-33c1-46e8-b1aa-bb44955c0de7.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/revou.png"
                    alt="RevoU"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Software Engineer
                    </h4>
                    <p className="text-sm text-gray-500">RevoU</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive bootcamp certification covering software
                  engineering fundamentals.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2024</span>
                  <a
                    href="https://drive.google.com/file/d/1zr9Qyb-WEomYHDPmy8ttBMBZrdEX0Cyy/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/skills/google-cloud-svgrepo-com.svg"
                    alt="Google Cloud"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Associate Cloud Engineer
                    </h4>
                    <p className="text-sm text-gray-500">
                      Google Cloud Platform
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Demonstrates experience in developing and maintaining
                  applications on GCP.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://www.credly.com/badges/d57dc8d1-2de9-4859-aa23-dfa082dda9eb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/dicoding.png"
                    alt="Dicoding"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Web Development
                    </h4>
                    <p className="text-sm text-gray-500">Dicoding</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering fundamentals of web
                  development.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://www.dicoding.com/certificates/L4PQ6K2JVPO1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/dicoding.png"
                    alt="Dicoding"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">JavaScript</h4>
                    <p className="text-sm text-gray-500">Dicoding</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering JavaScript fundamentals.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://www.dicoding.com/certificates/QLZ92WR7DX5D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/dicoding.png"
                    alt="Dicoding"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Back-End with Google Cloud
                    </h4>
                    <p className="text-sm text-gray-500">Dicoding</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering Back-End development with
                  Google Cloud.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://www.dicoding.com/certificates/1RXYOK32KPVM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/dicoding.png"
                    alt="Dicoding"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Google Cloud Engineer
                    </h4>
                    <p className="text-sm text-gray-500">Dicoding</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering cloud computing with
                  Google Cloud.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://www.dicoding.com/certificates/1RXYOK32KPVM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/Coursera-Logo_600x600.svg.png"
                    alt="Coursera"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      System Administration and IT Infastructure Services
                    </h4>
                    <p className="text-sm text-gray-500">Coursera</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering system administration and
                  IT infrastructures.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://coursera.org/share/9349a9eb1a7947ed58463fc4576afe72"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/certifications/Coursera-Logo_600x600.svg.png"
                    alt="Coursera"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Computer Networking
                    </h4>
                    <p className="text-sm text-gray-500">Coursera</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering fundamental of modern
                  networking technologies and protocols.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <a
                    href="https://coursera.org/share/20ddca978baa573ef3542a6116c12b6d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-xs">
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800">Projects</h3>
              <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border">
                <button
                  onClick={() => setActiveTab("project")}
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === "project"
                      ? "bg-rose-400 text-white shadow-sm"
                      : "text-gray-600 hover:text-rose-400"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab("mini projects")}
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === "mini projects"
                      ? "bg-blue-400 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-400"
                  }`}
                >
                  Mini Projects
                </button>
              </div>
            </div>

            <div className="border-t-4 border-gray-800 mb-8"></div>

            {/* Blur container that holds everything */}
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
              <div className="flex items-center justify-center gap-8">
                {/* Left Arrow */}
                <div className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg mb-2"
                    onClick={prevProject}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </div>

                {/* Screenshots Section */}
                <Card className="overflow-hidden border-2 border-white flex-1 max-w-md bg-white">
                  <CardContent className="p-0 h-80 flex items-center justify-center relative">
                    {hasMultipleImages && (
                      <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
                        <button
                          onClick={prevImage}
                          className="bg-white/70 hover:bg-white/90 rounded-full p-1 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="bg-white/70 hover:bg-white/90 rounded-full p-1 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {currentImages[currentImageIndex] && (
                      <Image
                        src={currentImages[currentImageIndex]}
                        alt={`${currentProjects[currentIndex]?.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        width={600}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    )}
                    {hasMultipleImages && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {currentImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex
                                ? "bg-rose-400"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Description Section */}
                <Card className="border-2 border-white flex-1 max-w-md">
                  <CardContent className="p-6 h-80 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-800">
                        {currentProjects[currentIndex]?.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {currentProjects[currentIndex]?.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProjects[currentIndex]?.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className={`px-2 py-1 rounded-full text-xs ${
                                activeTab === "project"
                                  ? "bg-rose-100 text-rose-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      {currentProjects[currentIndex]?.github && (
                        <a
                          href={currentProjects[currentIndex]?.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-400 text-gray-600 hover:bg-gray-50 text-xs"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </a>
                      )}
                      {currentProjects[currentIndex]?.live && (
                        <a
                          href={currentProjects[currentIndex]?.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className={`text-xs ${
                              activeTab === "project"
                                ? "bg-rose-400 hover:bg-rose-500"
                                : "bg-blue-400 hover:bg-blue-500"
                            } text-white`}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-gray-500 text-sm"></span>
                    </div>
                  </CardContent>
                </Card>

                {/* Right Arrow */}
                <div className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg mb-2"
                    onClick={nextProject}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="flex justify-center space-x-2">
            <a href="mailto:desianadf01@gmail.com" className="inline-block">
              <Button className="bg-gradient-to-r from-rose-400 to-blue-400 hover:from-rose-500 hover:to-blue-500 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </a>
            <a
              href="https://wa.me/6281395207762"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6.01L0 24l6.18-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                Whatsapp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Desiana Fitria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
