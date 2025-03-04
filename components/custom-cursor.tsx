"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trailElements, setTrailElements] = useState<Array<{ id: number; delay: number; scale: number }>>([])
  const trailCount = 5

  // Create trail elements on mount
  useEffect(() => {
    const newTrailElements = []
    for (let i = 0; i < trailCount; i++) {
      newTrailElements.push({
        id: i,
        delay: i * 0.05,
        scale: 1 - i * 0.15,
      })
    }
    setTrailElements(newTrailElements)
  }, [])

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      const isHoverable = !!(
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.tagName === "A" ||
        hoveredElement?.closest("button") ||
        hoveredElement?.closest("a") ||
        window.getComputedStyle(hoveredElement || document.body).cursor === "pointer"
      )

      setIsPointer(isHoverable)

      // Apply magnetic effect to hoverable elements
      if (isHoverable && hoveredElement) {
        const rect = hoveredElement.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(Math.pow(position.x - centerX, 2) + Math.pow(position.y - centerY, 2))

        // Only apply magnetic effect when cursor is close to the element
        if (distance < 100) {
          const strength = 0.3
          const magnetX = position.x + (centerX - position.x) * strength
          const magnetY = position.y + (centerY - position.y) * strength

          gsap.to(cursorRef.current, {
            x: magnetX,
            y: magnetY,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mousemove", updateCursorStyle)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mousemove", updateCursorStyle)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [position])

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return

    // Main cursor animation
    gsap.to(cursorRef.current, {
      x: position.x,
      y: position.y,
      duration: 0.1,
      ease: "power1.out",
    })

    // Follower animation with slight delay
    gsap.to(followerRef.current, {
      x: position.x,
      y: position.y,
      duration: 0.5,
      ease: "power3.out",
    })

    // Animate trail elements
    document.querySelectorAll(".cursor-trail").forEach((el, index) => {
      gsap.to(el, {
        x: position.x,
        y: position.y,
        duration: 0.5 + index * 0.08,
        ease: "power3.out",
      })
    })
  }, [position])

  // Apply animations when cursor state changes
  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return

    if (isPointer) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        opacity: 0.7,
        backgroundColor: "rgba(168, 85, 247, 0.7)",
        duration: 0.3,
      })
      gsap.to(followerRef.current, {
        scale: 1.8,
        opacity: 0,
        duration: 0.3,
      })
      gsap.to(".cursor-trail", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
      })
    } else {
      gsap.to(cursorRef.current, {
        scale: isClicking ? 0.8 : 1,
        opacity: 1,
        backgroundColor: "rgb(168, 85, 247)",
        duration: 0.3,
      })
      gsap.to(followerRef.current, {
        scale: isClicking ? 0.8 : 1,
        opacity: 0.5,
        duration: 0.3,
      })
      gsap.to(".cursor-trail", {
        opacity: 0.2,
        scale: (i) => (isClicking ? 0.5 : 1 - i * 0.15),
        duration: 0.3,
        stagger: 0.03,
      })
    }
  }, [isPointer, isClicking])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Trail elements */}
      {trailElements.map((trail) => (
        <div
          key={trail.id}
          className={`cursor-trail fixed top-0 left-0 w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-20`}
          style={{
            transitionDelay: `${trail.delay}s`,
            scale: trail.scale,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`cursor fixed top-0 left-0 w-5 h-5 bg-purple-500 dark:bg-purple-400 rounded-full z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      />

      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className={`cursor-follower fixed top-0 left-0 w-12 h-12 border-2 border-purple-500 dark:border-purple-400 rounded-full z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? "opacity-50" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </>
  )
}

