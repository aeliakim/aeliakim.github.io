"use client";

import { useState } from "react";
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const miniProjects = [
    {
      title: "Weather Widget",
      description:
        "A responsive weather widget that displays current weather conditions and forecasts using OpenWeather API.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "CSS3", "Weather API"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Color Palette Generator",
      description:
        "A tool for generating harmonious color palettes for design projects with export functionality.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Color Theory", "CSS"],
      github: "https://github.com",
      live: "https://example.com",
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
            Hello, I'm Desiana Fitria
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm a passionate developer, mainly interested in Back-End and Cloud
            Computing, also excited to learn new things to upgrade my skills.
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
                I'm a passionate web developer with experience in back-end and
                cloud computing technologies. I love creating tools that can
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
                      Bangkit Academy 2024 Batch 1
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
                      2024
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
            Certifications
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AWS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      AWS Certified Developer
                    </h4>
                    <p className="text-sm text-gray-500">Amazon Web Services</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Demonstrates expertise in developing and maintaining
                  applications on AWS platform.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2024</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">GCP</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Google Cloud Professional
                    </h4>
                    <p className="text-sm text-gray-500">
                      Google Cloud Platform
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Professional-level certification for cloud architecture and
                  development.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      JavaScript Algorithms
                    </h4>
                    <p className="text-sm text-gray-500">freeCodeCamp</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive certification covering JavaScript fundamentals
                  and data structures.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">RX</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      React Developer
                    </h4>
                    <p className="text-sm text-gray-500">Meta</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Professional certification for React development and modern
                  frontend practices.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2024</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">UX</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">UX Design</h4>
                    <p className="text-sm text-gray-500">Google</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive program covering user experience design
                  principles and practices.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2023</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PM</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">
                      Project Management
                    </h4>
                    <p className="text-sm text-gray-500">PMI</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Professional certification in project management methodologies
                  and best practices.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Issued: 2024</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Certificate
                  </Button>
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
              <h3 className="text-3xl font-bold text-gray-800">PROJECTS</h3>
              <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border">
                <button
                  onClick={() => setActiveTab("project")}
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === "project"
                      ? "bg-rose-400 text-white shadow-sm"
                      : "text-gray-600 hover:text-rose-400"
                  }`}
                >
                  project
                </button>
                <button
                  onClick={() => setActiveTab("mini projects")}
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === "mini projects"
                      ? "bg-blue-400 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-400"
                  }`}
                >
                  mini projects
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
                <Card className="overflow-hidden border-2 border-gray-800 flex-1 max-w-md">
                  <CardContent className="p-0 h-80 flex items-center justify-center relative">
                    <img
                      src={
                        currentProjects[currentIndex]?.image ||
                        "/placeholder.svg"
                      }
                      alt={currentProjects[currentIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        screenshots of the project
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Description Section */}
                <Card className="border-2 border-gray-800 flex-1 max-w-md">
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
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-gray-500 text-sm">
                        project description
                      </span>
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
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <a href="mailto:your.email@example.com" className="inline-block">
            <Button className="bg-gradient-to-r from-rose-400 to-blue-400 hover:from-rose-500 hover:to-blue-500 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
