"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface StaggeredGridProps {
  children: React.ReactNode
  className?: string
}

export default function StaggeredGrid({ children, className = "" }: StaggeredGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <div
            key={index}
            className={`transition-all duration-600 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
            }}
          >
            {child}
          </div>
        ))}
    </div>
  )
}
