"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const projectId = Number.parseInt(id as string);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: 30,
      opacity: 10,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        imageRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        contentRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        metaRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }, []);

  // Project data (in a real app, this would come from an API or database)
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing. Built with a focus on performance and user experience.",
      longDescription:
        "This comprehensive e-commerce solution features a responsive design, advanced filtering, real-time inventory updates, and seamless payment integration. The admin dashboard provides detailed analytics and inventory management tools.",
      image: "/urban1.png",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
      client: "Fashion Retailer",
      date: "January 2023",
      duration: "3 months",
      category: "web",
      challenge:
        "The main challenge was creating a seamless shopping experience across devices while maintaining fast load times with a large product catalog. The client also needed a robust inventory management system that could handle real-time updates.",
      solution:
        "I implemented a responsive design with optimized images and lazy loading to ensure fast performance. The product catalog uses efficient filtering and search algorithms. For inventory management, I created a real-time dashboard with webhooks to sync inventory across multiple sales channels.",
      features: [
        "Responsive product catalog with advanced filtering",
        "Secure checkout with multiple payment options",
        "Customer account management and order history",
        "Admin dashboard with sales analytics",
        "Inventory management with low stock alerts",
        "Email notifications for orders and shipping updates",
      ],
      testimonial: {
        quote:
          "The e-commerce platform exceeded our expectations. Sales have increased by 35% since launch, and the inventory management system has saved our team countless hours.",
        author: "Sarah Johnson",
        role: "Marketing Director",
      },
      gallery: ["/urban2.png", "/urban3.png", "/urban4.png"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode, animations, and contact form. Designed to showcase creative work with a focus on visual impact.",
      longDescription:
        "This portfolio site features smooth page transitions, interactive project galleries, and a custom-built content management system. The responsive design ensures a consistent experience across all devices.",
      image: "/portfolioimg.png",
      tags: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#",
      client: "Photographer",
      date: "March 2023",
      duration: "1 month",
      category: "web",
      featured: true,
      challenge:
        "The client needed a visually striking portfolio that would showcase their photography work while maintaining fast load times for high-resolution images. They also wanted a simple way to update content without coding knowledge.",
      solution:
        "I designed a minimalist interface that puts the focus on the photography, with optimized image loading and caching. The custom CMS allows the client to easily update galleries and project information through a user-friendly interface.",
      features: [
        "Responsive image galleries with lightbox functionality",
        "Dark/light mode toggle for different viewing preferences",
        "Smooth page transitions and animations",
        "Custom content management system",
        "Contact form with email integration",
        "SEO optimization for better visibility",
      ],
      testimonial: {
        quote:
          "My new portfolio site has received countless compliments from clients. The image galleries look stunning, and I can easily update my work without any technical help.",
        author: "Michael Chen",
        role: "Photographer",
      },
      gallery: ["/port2.png", "/port3.png", "/port4.png"],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features. Helps teams stay organized and track progress efficiently.",
      longDescription:
        "This task management solution includes features like drag-and-drop task organization, time tracking, team collaboration tools, and customizable workflows. The real-time updates ensure all team members stay in sync.",
      image: "/ecklee grill.png",
      tags: ["React", "Firebase", "TypeScript", "Redux"],
      link: "#",
      github: "#",
      client: "Tech Startup",
      date: "May 2023",
      duration: "2 months",
      category: "app",
      challenge:
        "The startup needed a task management system that could handle their agile development process with multiple teams working on different projects simultaneously. They required real-time updates and integration with their existing tools.",
      solution:
        "I built a customizable task management app with real-time synchronization using Firebase. The app features drag-and-drop kanban boards that can be customized for different teams and projects, with integrations for Slack, GitHub, and Google Calendar.",
      features: [
        "Customizable kanban boards for different workflows",
        "Real-time updates and notifications",
        "Time tracking and reporting",
        "Team collaboration with comments and file attachments",
        "Integration with Slack, GitHub, and Google Calendar",
        "Mobile app for on-the-go task management",
      ],
      testimonial: {
        quote:
          "This task management app has transformed how our teams collaborate. The real-time updates and customizable workflows have significantly improved our productivity.",
        author: "Alex Rivera",
        role: "Product Manager",
      },
      gallery: ["/grill2.png", "/grill3.png", "/grill4.png"],
    },
    {
      id: 4,
      title: "Travel Blog",
      description:
        "A travel blog with content management system and interactive maps. Designed to showcase travel experiences with rich media content.",
      longDescription:
        "This travel blog features interactive maps showing travel routes, a photo gallery with lightbox functionality, and a custom CMS for easy content updates. The blog also includes social sharing integration and comment functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "CMS", "Mapbox", "MongoDB"],
      link: "#",
      github: "#",
      client: "Travel Blogger",
      date: "July 2023",
      duration: "6 weeks",
      category: "web",
      challenge:
        "The client wanted a visually engaging travel blog that could showcase their journeys with interactive maps and rich media content. They needed a simple way to update content while traveling with limited internet access.",
      solution:
        "I created a travel blog with offline editing capabilities and automatic synchronization when online. The interactive maps show travel routes with points of interest, and the media gallery optimizes images for fast loading even on slow connections.",
      features: [
        "Interactive maps showing travel routes and destinations",
        "Rich media galleries with photos and videos",
        "Offline content creation and editing",
        "Social media integration for sharing",
        "Comment system with moderation",
        "Newsletter subscription for followers",
      ],
      testimonial: {
        quote:
          "My travel blog has never looked better. The interactive maps are a huge hit with my readers, and I can easily update content even with spotty internet connections while traveling.",
        author: "Emma Wilson",
        role: "Travel Blogger",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 5,
      title: "Fitness Tracking Mobile App",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness goals. Helps users maintain a healthy lifestyle with personalized recommendations.",
      longDescription:
        "This fitness app includes workout tracking with visual progress charts, nutrition logging with barcode scanning, goal setting with reminders, and integration with popular fitness wearables. The app provides personalized recommendations based on user activity.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      link: "#",
      github: "#",
      client: "Fitness Company",
      date: "September 2023",
      duration: "4 months",
      category: "app",
      challenge:
        "The fitness company wanted an app that would differentiate itself in a crowded market by offering more personalized recommendations and better integration with fitness devices. They also needed detailed analytics on user behavior.",
      solution:
        "I developed a React Native app with machine learning algorithms that provide personalized workout and nutrition recommendations based on user progress and goals. The app integrates with popular fitness wearables and provides detailed analytics for both users and the company.",
      features: [
        "Personalized workout and nutrition plans",
        "Progress tracking with visual charts",
        "Barcode scanning for easy nutrition logging",
        "Integration with fitness wearables",
        "Social features for workout sharing and challenges",
        "Offline mode for workouts without internet",
      ],
      testimonial: {
        quote:
          "Our fitness app has received outstanding reviews from users. The personalized recommendations and device integrations have given us a competitive edge in the market.",
        author: "David Thompson",
        role: "CEO, FitLife",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description:
        "A digital ordering system for restaurants with menu management, order tracking, and payment processing. Streamlines the ordering process for both customers and staff.",
      longDescription:
        "This restaurant system includes digital menu management with real-time updates, table reservation system, kitchen order display, and integrated payment processing. The system also provides analytics on popular dishes and peak hours.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
      link: "#",
      github: "#",
      client: "Restaurant Chain",
      date: "November 2023",
      duration: "3 months",
      category: "web",
      featured: true,
      challenge:
        "The restaurant chain needed to modernize their ordering system to reduce wait times and staff errors. They wanted a solution that would work for both dine-in and takeout orders, with integration to their existing POS system.",
      solution:
        "I created a comprehensive digital ordering system with separate interfaces for customers, servers, and kitchen staff. The system uses real-time updates to keep everyone informed about order status, with automatic routing to the appropriate kitchen station.",
      features: [
        "Digital menu with real-time availability updates",
        "Table-side ordering via tablets for servers",
        "QR code ordering for customers",
        "Kitchen display system with order prioritization",
        "Integrated payment processing",
        "Analytics dashboard for menu performance",
      ],
      testimonial: {
        quote:
          "The digital ordering system has revolutionized our operations. Order errors have decreased by 85%, and our average table turnover time has improved by 20 minutes.",
        author: "Robert Garcia",
        role: "Operations Manager",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 7,
      title: "3D Product Configurator",
      description:
        "An interactive 3D product configurator allowing customers to customize products before purchase. Enhances the shopping experience with real-time visualization.",
      longDescription:
        "This 3D configurator allows customers to customize products with different colors, materials, and components. The real-time rendering provides immediate visual feedback, and the configuration can be saved or shared. The tool integrates directly with the e-commerce checkout process.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Three.js", "WebGL", "React", "Node.js"],
      link: "#",
      github: "#",
      client: "Furniture Manufacturer",
      date: "December 2023",
      duration: "5 months",
      category: "3d",
      challenge:
        "The furniture manufacturer wanted to reduce returns by letting customers visualize custom furniture configurations before purchasing. They needed a solution that would work well on both desktop and mobile devices.",
      solution:
        "I developed a 3D product configurator using Three.js with optimized 3D models for fast loading on all devices. The configurator allows customers to change colors, materials, and components with real-time rendering. The interface is touch-friendly for mobile users and includes AR capabilities for visualizing furniture in their own space.",
      features: [
        "Real-time 3D visualization with accurate materials and lighting",
        "Customization of colors, fabrics, and components",
        "AR mode for visualizing products in your space",
        "Save and share configurations",
        "Automatic pricing updates based on selections",
        "Direct integration with shopping cart",
      ],
      testimonial: {
        quote:
          "Since implementing the 3D configurator, our return rate has dropped by 45% and our average order value has increased by 28%. Customers love being able to visualize their custom furniture before ordering.",
        author: "Jennifer Lee",
        role: "Marketing Director",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
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
      duration: "4 months",
      category: "web",
      challenge:
        "The educational institution needed to transition from in-person to online learning during the pandemic. They required a platform that would maintain student engagement and provide detailed progress tracking for instructors.",
      solution:
        "I built a comprehensive learning platform with interactive video lessons, gamified quizzes, and social learning features. The platform includes detailed analytics for instructors to identify struggling students and content that needs improvement.",
      features: [
        "Video lessons with interactive elements",
        "Adaptive quizzes that adjust to student performance",
        "Progress tracking and certificates",
        "Discussion forums and peer review",
        "Instructor dashboard with student analytics",
        "Mobile app for learning on the go",
      ],
      testimonial: {
        quote:
          "Our transition to online learning was seamless thanks to this platform. Student engagement has remained high, and our instructors have valuable insights into student performance.",
        author: "Dr. Patricia Moore",
        role: "Academic Director",
      },
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  ];

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        className="mb-8 group"
        onClick={() => router.push("/projects")}
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Button>

      <div ref={headerRef} className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.description}</p>
      </div>

      <div ref={imageRef} className="mb-12">
        <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div ref={contentRef} className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.testimonial && (
            <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
              <blockquote className="text-muted-foreground italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="font-medium">{project.testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {project.testimonial.role}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={metaRef} className="space-y-8">
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Date</div>
                <div className="font-medium">{project.date}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Duration
                </div>
                <div className="font-medium">{project.duration}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Category
                </div>
                <div className="font-medium capitalize">{project.category}</div>
              </div>
              <Separator />
              <div>
                <div className="text-sm text-muted-foreground mb-2">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-purple-50 dark:bg-purple-900/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Link
                href={project.link}
                className="flex items-center justify-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link
                href={project.github}
                className="flex items-center justify-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Link>
            </Button>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-lg font-bold mb-4">Need a similar project?</h3>
            <p className="text-muted-foreground mb-4">
              I'm available for freelance projects. Let's discuss how I can help
              bring your ideas to life.
            </p>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
