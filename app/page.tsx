"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialsMarquee from "@/components/testimonials-marquee"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const testimonialsHeadingRef1 = useRef(null)
  const testimonialsHeadingRef2 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(headingRef.current, {
      y: 50,
      opacity: 10,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 10,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      )

    // Animate testimonial headings when they come into view
    gsap.from(testimonialsHeadingRef1.current, {
      y: 30,
      opacity: 10,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialsHeadingRef1.current,
        start: "top 80%",
      },
    })

    gsap.from(testimonialsHeadingRef2.current, {
      y: 30,
      opacity: 10,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialsHeadingRef2.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold tracking-tight">
            Creative <span className="text-purple-600 dark:text-purple-400">Developer</span> & Designer
          </h1>
          <p ref={textRef} className="text-lg text-muted-foreground">
            I build exceptional digital experiences that combine creativity with technical expertise. Let's bring your
            ideas to life with stunning design and flawless functionality.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div ref={imageRef} className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/amoog.jpg"
            alt="Creative Developer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </div>
      </div>

      {/* Centered Testimonials Sections */}
      <div className="mt-32 mb-12 flex flex-col items-center">
        {/* Testimonials Marquee */}
        <div className="w-full max-w-6xl mx-auto mb-32">
          <h2 ref={testimonialsHeadingRef1} className="text-2xl md:text-3xl font-bold mb-12 text-center relative">
            <span className="relative inline-block">
              What <span className="text-purple-600 dark:text-purple-400">Clients</span> Say
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></span>
            </span>
          </h2>
          <TestimonialsMarquee />
        </div>

        {/* Featured Testimonials Section */}
        <div className="w-full max-w-6xl mx-auto">
          <h2 ref={testimonialsHeadingRef2} className="text-2xl md:text-3xl font-bold mb-12 text-center relative">
            <span className="relative inline-block">
              Client <span className="text-purple-600 dark:text-purple-400">Success</span> Stories
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></span>
            </span>
          </h2>
          <TestimonialsSection />
        </div>
      </div>
    </div>
  )
}

