"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Blog() {
  const titleRef = useRef(null)
  const featuredRef = useRef(null)
  const searchRef = useRef(null)
  const postsRef = useRef<(HTMLDivElement | null)[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Initialize the refs array
  postsRef.current = []
  const addToRefs = (el: HTMLDivElement | null): void => {
    if (el && !postsRef.current.includes(el)) {
      postsRef.current.push(el)
    }
  }

  useEffect(() => {
    const tl = gsap.timeline()

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
        "-=0.3",
      )
      .from(
        searchRef.current,
        {
          y: 20,
          opacity: 10,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5",
      )

    gsap.from(postsRef.current, {
      y: 50,
      opacity: 10,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.6,
    })
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of React: What's Coming in React 19",
      excerpt:
        "Exploring the upcoming features in React 19 and how they will change the way we build web applications. Learn about the new rendering engine, improved server components, and more.",
      content:
        "React 19 is set to bring significant improvements to the popular JavaScript library. The React team has been working on a new rendering engine that promises better performance and smaller bundle sizes. Server components are also getting a major upgrade, making it easier to build hybrid applications that leverage both client and server rendering. In this post, we'll dive deep into these new features and how they can improve your development workflow.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 15, 2024",
      readTime: "8 min read",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["React", "JavaScript", "Frontend"],
      featured: true,
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout: Advanced Techniques",
      excerpt:
        "A comprehensive guide to using CSS Grid for complex layouts. Learn advanced techniques for responsive designs, nested grids, and animation integration.",
      content:
        "CSS Grid has revolutionized how we approach web layouts, providing a powerful two-dimensional system that makes complex designs more accessible. In this article, we'll explore advanced CSS Grid techniques that go beyond the basics. You'll learn how to create responsive layouts without media queries, how to nest grids for complex components, and how to integrate animations with your grid layouts for dynamic user experiences.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 2, 2024",
      readTime: "10 min read",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["CSS", "Design", "Frontend"],
    },
    {
      id: 3,
      title: "Optimizing React Performance: Practical Strategies",
      excerpt:
        "Tips and techniques to improve the performance of your React applications. Learn about memoization, code splitting, and effective state management.",
      content:
        "Performance optimization is crucial for delivering a great user experience in React applications. This post covers practical strategies you can implement today to make your React apps faster and more efficient. We'll explore memoization techniques with useMemo and useCallback, implement code splitting to reduce bundle sizes, and discuss state management approaches that minimize unnecessary re-renders. You'll also learn how to measure performance improvements with React's built-in profiler.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 20, 2024",
      readTime: "12 min read",
      author: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["React", "Performance", "JavaScript"],
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt:
        "A guide to creating web applications that are accessible to all users. Learn about ARIA attributes, keyboard navigation, and testing tools.",
      content:
        "Web accessibility is not just a nice-to-have feature—it's essential for ensuring your applications can be used by everyone. This comprehensive guide covers the fundamentals of building accessible web applications, from understanding the Web Content Accessibility Guidelines (WCAG) to implementing practical solutions. You'll learn how to use ARIA attributes correctly, ensure proper keyboard navigation, create accessible forms, and test your applications with screen readers and other assistive technologies.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2024",
      readTime: "9 min read",
      author: {
        name: "Jamie Taylor",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["Accessibility", "HTML", "Frontend"],
    },
    {
      id: 5,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt:
        "A beginner-friendly guide to TypeScript for JavaScript developers. Learn about static typing, interfaces, and how TypeScript improves code quality.",
      content:
        "TypeScript has become an essential tool for modern JavaScript development, offering static typing and enhanced tooling that can catch errors before runtime. This introduction is designed specifically for JavaScript developers looking to make the transition to TypeScript. We'll cover the basics of TypeScript's type system, how to define interfaces and types, and practical examples of how TypeScript can improve your code quality and developer experience. By the end, you'll have a solid foundation to start incorporating TypeScript into your projects.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 28, 2024",
      readTime: "7 min read",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["TypeScript", "JavaScript", "Backend"],
    },
    {
      id: 6,
      title: "Modern CSS Techniques Every Developer Should Know",
      excerpt:
        "Exploring modern CSS features that simplify complex styling tasks. Learn about CSS variables, container queries, and the new color functions.",
      content:
        "CSS has evolved significantly in recent years, introducing powerful features that make complex styling tasks much simpler. This article explores modern CSS techniques that every web developer should have in their toolkit. We'll dive into CSS custom properties (variables) for creating themeable designs, container queries for component-based responsive layouts, the new color functions like oklch() for more vibrant designs, and logical properties for better internationalization. These techniques will help you write more maintainable and flexible CSS code.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 15, 2024",
      readTime: "8 min read",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["CSS", "Design", "Frontend"],
    },
    {
      id: 7,
      title: "Building a RESTful API with Node.js and Express",
      excerpt:
        "A step-by-step guide to creating a RESTful API using Node.js and Express. Learn about routing, middleware, error handling, and authentication.",
      content:
        "RESTful APIs are the backbone of modern web applications, enabling communication between frontend and backend systems. This tutorial provides a comprehensive, step-by-step guide to building a RESTful API using Node.js and Express. We'll cover setting up routes, implementing middleware for request processing, handling errors gracefully, and adding JWT authentication to secure your API. You'll also learn best practices for structuring your API project and documenting your endpoints for other developers.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 30, 2024",
      readTime: "15 min read",
      author: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["Node.js", "API", "Backend"],
    },
    {
      id: 8,
      title: "Web Animation Techniques for Better User Experiences",
      excerpt:
        "Exploring different approaches to web animations and how they can enhance user experience. Learn about CSS animations, GSAP, and Framer Motion.",
      content:
        "Well-crafted animations can significantly enhance the user experience of your web applications, providing visual feedback and making interfaces more intuitive. This article explores different web animation techniques and when to use each approach. We'll compare CSS animations and transitions for simple effects, the GreenSock Animation Platform (GSAP) for complex timeline-based animations, and Framer Motion for React component animations. You'll learn how to implement each technique with practical examples and performance considerations.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 15, 2024",
      readTime: "11 min read",
      author: {
        name: "Jamie Taylor",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["Animation", "CSS", "Frontend"],
    },
    {
      id: 9,
      title: "Understanding Web Security: Common Vulnerabilities and How to Prevent Them",
      excerpt:
        "A guide to common web security vulnerabilities and how to protect your applications. Learn about XSS, CSRF, SQL injection, and security best practices.",
      content:
        "Web security is a critical aspect of application development that can't be overlooked. This comprehensive guide explores common web security vulnerabilities and provides practical strategies to protect your applications. We'll cover Cross-Site Scripting (XSS) attacks and content security policies, Cross-Site Request Forgery (CSRF) and proper token validation, SQL injection and parameterized queries, and other security best practices like HTTPS implementation and secure cookie handling. By implementing these security measures, you can significantly reduce the risk of your application being compromised.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 20, 2023",
      readTime: "14 min read",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["Security", "Backend", "Frontend"],
    },
    {
      id: 10,
      title: "Getting Started with Next.js 14: App Router and Server Components",
      excerpt:
        "An introduction to Next.js 14 with a focus on the App Router and Server Components. Learn how to build modern, server-rendered React applications.",
      content:
        "Next.js 14 introduces significant improvements to the framework, particularly with the App Router and Server Components. This tutorial provides a comprehensive introduction to these features and how they can improve your React applications. We'll walk through setting up a Next.js 14 project, understanding the file-based routing system, implementing server and client components appropriately, and leveraging server actions for form handling. You'll also learn about the new data fetching patterns and how they simplify state management in your applications.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 5, 2023",
      readTime: "13 min read",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      categories: ["Next.js", "React", "Frontend"],
    },
  ]

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      activeCategory === "all" || post.categories.some((cat) => cat.toLowerCase() === activeCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)

  // Get all unique categories
  const allCategories = [
    "all",
    ...Array.from(new Set(blogPosts.flatMap((post) => post.categories.map((cat) => cat.toLowerCase())))),
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-purple-600 dark:text-purple-400">Blog</span>
      </h1>

      {/* Featured Post */}
      {featuredPost && (
        <div ref={featuredRef} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
          <div className="group relative overflow-hidden rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.categories.map((category, i) => (
                    <Badge key={i} className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={featuredPost.author.avatar || "/placeholder.svg"}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{featuredPost.author.name}</span>
                  </div>
                  <Button asChild variant="ghost" className="group">
                    <Link href={`/blog/${featuredPost.id}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div ref={searchRef} className="mb-8 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex w-full overflow-auto py-1 mb-2">
            {allCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              ref={addToRefs}
              className="border rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, i) => (
                    <Badge key={i} variant="outline" className="bg-purple-50 dark:bg-purple-900/20">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="group">
                    <Link href={`/blog/${post.id}`} className="flex items-center">
                      Read
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-2">No posts found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-purple-100 dark:bg-purple-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Get the latest articles, tutorials, and updates on web development delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

