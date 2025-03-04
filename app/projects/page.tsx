"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Calendar,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const titleRef = useRef(null);
  const featuredRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [filter, setFilter] = useState("all");

  // Initialize the refs array
  projectsRef.current = [];
  interface RefElement extends HTMLDivElement {}

  const addToRefs = (el: RefElement | null): void => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 30,
      opacity: 10,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        featuredRef.current,
        {
          y: 40,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        filterRef.current,
        {
          y: 20,
          opacity: 10,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      );

    gsap.from(projectsRef.current, {
      y: 50,
      opacity: 10,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.6,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing. Built with a focus on performance and user experience.",
      longDescription:
        "This comprehensive e-commerce solution features a responsive design, advanced filtering, real-time inventory updates, and seamless payment integration. The admin dashboard provides detailed analytics and inventory management tools.",
      image: "/placeholder.svg",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
      client: "Fashion Retailer",
      date: "January 2023",
      category: "web",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode, animations, and contact form. Designed to showcase creative work with a focus on visual impact.",
      longDescription:
        "This portfolio site features smooth page transitions, interactive project galleries, and a custom-built content management system. The responsive design ensures a consistent experience across all devices.",
      image: "/placeholder.svg",
      tags: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
      client: "Photographer",
      date: "March 2023",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features. Helps teams stay organized and track progress efficiently.",
      longDescription:
        "This task management solution includes features like drag-and-drop task organization, time tracking, team collaboration tools, and customizable workflows. The real-time updates ensure all team members stay in sync.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "TypeScript", "Redux"],
      link: "#",
      github: "#",
      client: "Tech Startup",
      date: "May 2023",
      category: "app",
    },
    {
      id: 4,
      title: "Travel Blog",
      description:
        "A travel blog with content management system and interactive maps. Designed to showcase travel experiences with rich media content.",
      longDescription:
        "This travel blog features interactive maps showing travel routes, a photo gallery with lightbox functionality, and a custom CMS for easy content updates. The blog also includes social sharing integration and comment functionality.",
      image: "/placeholder.svg",
      tags: ["Next.js", "CMS", "Mapbox", "MongoDB"],
      link: "#",
      github: "#",
      client: "Travel Blogger",
      date: "July 2023",
      category: "web",
    },
    {
      id: 5,
      title: "Fitness Tracking Mobile App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness goals. Helps users maintain a healthy lifestyle with personalized recommendations.",
      longDescription:
        "This fitness app includes workout tracking with visual progress charts, nutrition logging with barcode scanning, goal setting with reminders, and integration with popular fitness wearables. The app provides personalized recommendations based on user activity.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      link: "#",
      github: "#",
      client: "Fitness Company",
      date: "September 2023",
      category: "app",
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description:
        "A digital ordering system for restaurants with menu management, order tracking, and payment processing. Streamlines the ordering process for both customers and staff.",
      longDescription:
        "This restaurant system includes digital menu management with real-time updates, table reservation system, kitchen order display, and integrated payment processing. The system also provides analytics on popular dishes and peak hours.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
      link: "#",
      github: "#",
      client: "Restaurant Chain",
      date: "November 2023",
      category: "web",
      featured: true,
    },
    {
      id: 7,
      title: "3D Product Configurator",
      description:
        "An interactive 3D product configurator allowing customers to customize products before purchase. Enhances the shopping experience with real-time visualization.",
      longDescription:
        "This 3D configurator allows customers to customize products with different colors, materials, and components. The real-time rendering provides immediate visual feedback, and the configuration can be saved or shared. The tool integrates directly with the e-commerce checkout process.",
      image: "/placeholder.svg",
      tags: ["Three.js", "WebGL", "React", "Node.js"],
      link: "#",
      github: "#",
      client: "Furniture Manufacturer",
      date: "December 2023",
      category: "3d",
    },
    {
      id: 8,
      title: "Educational Platform",
      description:
        "An online learning platform with course management, progress tracking, and interactive quizzes. Designed to make learning engaging and accessible.",
      longDescription:
        "This educational platform features video lessons with transcripts, interactive quizzes with immediate feedback, progress tracking with certificates, and a discussion forum for student collaboration. The platform includes an instructor dashboard for course management and student performance analytics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Express", "MongoDB", "AWS"],
      link: "#",
      github: "#",
      client: "Educational Institution",
      date: "February 2024",
      category: "web",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1
        ref={titleRef}
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
      >
        My{" "}
        <span className="text-purple-600 dark:text-purple-400">Projects</span>
      </h1>

      {/* Featured Project Section */}
      <div ref={featuredRef} className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={`featured-${project.id}`}
              className="group relative overflow-hidden rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        className="bg-purple-600/80 text-white hover:bg-purple-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white text-purple-900 hover:bg-white/90"
                    >
                      <Link href={project.link} className="flex items-center">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20"
                    >
                      <Link href={project.github} className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Filters */}
      <div ref={filterRef} className="mb-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="app">Apps</TabsTrigger>
            <TabsTrigger value="3d">3D/Interactive</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={addToRefs}
            className="border rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-900/20"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-900/20"
                  >
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{project.client}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button asChild variant="default" size="sm" className="flex-1">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center justify-center"
                  >
                    Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link
                    href={project.link}
                    className="flex items-center justify-center"
                  >
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-purple-100 dark:bg-purple-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  );
}
