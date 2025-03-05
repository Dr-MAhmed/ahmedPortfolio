"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  content: string
  author: string
  position: string
  company: string
  avatar: string
  logo?: string
  rating: number
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the attention to detail was impressive. The custom features they implemented have helped us increase our conversion rate by 25%.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Fashion Retailer",
      avatar: "/client2.jpg",
      logo: "/comp1.svg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "The portfolio website they created for me perfectly captures my style and has significantly increased client inquiries. The custom animations are stunning and the mobile experience is flawless. I couldn't be happier with the results.",
      author: "Michael Chen",
      position: "Photographer",
      company: "Visual Arts Studio",
      avatar: "/client1.jpg",
      logo: "/comp2.svg",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Our task management app has transformed how our team collaborates. The intuitive interface and real-time updates have boosted our productivity by 35%. The developer was responsive to feedback and delivered exactly what we needed.",
      author: "Alex Rivera",
      position: "Product Manager",
      company: "Tech Startup",
      avatar: "/client3.jpg",
      logo: "/comp3.svg",
      rating: 5,
    },
  ]

  // Reset refs array
  testimonialRefs.current = []

  // Add or remove refs from the array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el)
    }
  }

  useEffect(() => {
    // Hide all testimonials initially
    gsap.set(testimonialRefs.current, {
      opacity: 0,
      y: 20,
    })

    // Show the active testimonial
    gsap.to(testimonialRefs.current[activeIndex], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })

    return () => {
      gsap.killTweensOf(testimonialRefs.current)
    }
  }, [activeIndex])

  const handlePrev = () => {
    gsap.to(testimonialRefs.current[activeIndex], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      },
    })
  }

  const handleNext = () => {
    gsap.to(testimonialRefs.current[activeIndex], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      },
    })
  }

  return (
    <div
      ref={containerRef}
      className="relative py-16 px-8 md:px-16 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-gray-900 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900/50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-purple-600 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-purple-600 translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Large quote mark */}
      <div className="absolute top-8 left-8 text-purple-300 dark:text-purple-800 opacity-30">
        <Quote className="h-20 w-20" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} ref={addToRefs} className={`${index === activeIndex ? "block" : "hidden"}`}>
            {/* Star rating */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mx-0.5`}
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-medium mb-10 text-center leading-relaxed">"{testimonial.content}"</p>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-purple-200 dark:border-purple-800 shadow-md">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <p className="font-bold text-xl mb-1">{testimonial.author}</p>
              <p className="text-muted-foreground mb-4">
                {testimonial.position}, {testimonial.company}
              </p>

              {testimonial.logo && (
                <div className="mt-2 h-12 w-auto opacity-70">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    width={120}
                    height={60}
                    className="h-full w-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Navigation controls */}
        <div className="flex justify-center mt-10 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="rounded-full h-12 w-12 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-purple-600 dark:bg-purple-400 scale-125"
                  : "bg-purple-200 dark:bg-purple-800 hover:bg-purple-300 dark:hover:bg-purple-700"
              }`}
              onClick={() => {
                if (index === activeIndex) return
                gsap.to(testimonialRefs.current[activeIndex], {
                  opacity: 0,
                  y: 20,
                  duration: 0.3,
                  ease: "power3.in",
                  onComplete: () => {
                    setActiveIndex(index)
                  },
                })
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="rounded-full h-12 w-12 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

