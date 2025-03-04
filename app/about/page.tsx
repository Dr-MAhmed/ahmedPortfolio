"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 30,
      opacity: 10,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        imageRef.current,
        {
          x: -50,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        contentRef.current,
        {
          x: 50,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .from(
        skillsRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
  }, [])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "Node.js",
    "UI/UX Design",
    "Figma",
    "Responsive Design",
    "CSS/SCSS",
    "Git",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-12 text-center">
        About <span className="text-purple-600 dark:text-purple-400">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div ref={imageRef} className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Profile" fill className="object-cover" />
        </div>
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-2xl font-bold">Hi, I'm [Your Name]</h2>
          <p className="text-muted-foreground">
            I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional
            websites and applications. My journey in tech began when I built my first website at 15, and I've been
            hooked ever since.
          </p>
          <p className="text-muted-foreground">
            I specialize in creating responsive, user-friendly interfaces that not only look great but also provide
            exceptional user experiences. My approach combines technical expertise with creative problem-solving to
            deliver solutions that exceed expectations.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
            hiking in the mountains.
          </p>
        </div>
      </div>

      <div ref={skillsRef} className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-8">Skills & Expertise</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 text-sm py-2 px-4"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

