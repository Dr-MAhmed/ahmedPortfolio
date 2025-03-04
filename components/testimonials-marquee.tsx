"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  content: string
  author: string
  position: string
  company: string
  avatar: string
  rating: number
}

export default function TestimonialsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and the attention to detail was impressive.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Fashion Retailer",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      content:
        "The portfolio website they created for me perfectly captures my style and has significantly increased client inquiries. The custom animations are stunning!",
      author: "Michael Chen",
      position: "Photographer",
      company: "Visual Arts Studio",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Our task management app has transformed how our team collaborates. The intuitive interface and real-time updates have boosted our productivity by 35%.",
      author: "Alex Rivera",
      position: "Product Manager",
      company: "Tech Startup",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 4,
      content:
        "The interactive 3D product configurator has reduced our return rate by 45% and increased average order value. Customers love being able to customize their furniture.",
      author: "Jennifer Lee",
      position: "Marketing Director",
      company: "Furniture Manufacturer",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 5,
      content:
        "Our restaurant ordering system has revolutionized our operations. Order errors have decreased by 85%, and our table turnover time has improved significantly.",
      author: "Robert Garcia",
      position: "Operations Manager",
      company: "Restaurant Chain",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 6,
      content:
        "The educational platform made our transition to online learning seamless. Student engagement has remained high, and our instructors have valuable insights into performance.",
      author: "Dr. Patricia Moore",
      position: "Academic Director",
      company: "Educational Institution",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!trackRef.current) return

    // Clone the track for seamless looping
    const track = trackRef.current
    const clone = track.cloneNode(true) as HTMLElement
    marqueeRef.current?.appendChild(clone)

    // Set up the animation
    const marqueeElements = [track, clone]

    // Reset positions
    gsap.set(marqueeElements, { xPercent: 0 })

    // Create the animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    })

    const duration = 40
    const direction = 1 // -1 for left, 1 for right

    tl.to(marqueeElements, {
      xPercent: -100 * direction,
      duration: duration,
      ease: "none",
    })

    // Pause on hover
    marqueeRef.current?.addEventListener("mouseenter", () => {
      tl.pause()
    })

    marqueeRef.current?.addEventListener("mouseleave", () => {
      tl.play()
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative overflow-hidden py-6" ref={marqueeRef}>
      <div ref={trackRef} className="flex gap-6 whitespace-nowrap">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 border border-purple-100 dark:border-purple-900/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Top quote mark */}
            <div className="absolute top-4 right-4 opacity-10 text-purple-600 dark:text-purple-400">
              <Quote className="h-12 w-12 rotate-180" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Star rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-200 dark:border-purple-800 mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom quote mark */}
            <div className="absolute bottom-4 left-4 opacity-10 text-purple-600 dark:text-purple-400">
              <Quote className="h-12 w-12" />
            </div>

            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 rounded-t-xl"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

