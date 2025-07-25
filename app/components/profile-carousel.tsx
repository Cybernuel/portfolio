"use client"

import { useEffect, useState } from "react"

const profileImages = [
  {
    src: "/Image1.jpeg?height=400&width=400&text=Professional+Headshot",
    alt: "Emmanuel - Professional Headshot",
  },
  {
    src: "/Image2.jpeg?height=400&width=400&text=Conference+Speaking",
    alt: "Emmanuel - Speaking at Conference",
  },
  {
    src: "/Image1.jpeg?height=400&width=400&text=University+Ambassador",
    alt: "Emmanuel - University Ambassador",
  },
  {
    src: "/Image2.jpeg?height=400&width=400&text=Cybersecurity+Work",
    alt: "Emmanuel - At Work",
  },
  {
    src: "/Image1.jpeg?height=400&width=400&text=Team+Collaboration",
    alt: "Emmanuel - Team Collaboration",
  },
]

export default function ProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profileImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative animate-in fade-in-50 slide-in-from-left-5 duration-1000">
      <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {profileImages.map((image, index) => (
          <img
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Optional: Add dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {profileImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "bg-primary scale-110"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
