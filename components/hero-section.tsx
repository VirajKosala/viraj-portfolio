"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [isDark, setIsDark] = useState(false)
  const [showVideo, setShowVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Play video once when component mounts
    if (showVideo && videoRef.current) {
      videoRef.current.playbackRate = 1
      videoRef.current.play().catch(error => {
        console.log('Video play failed:', error)
      })
    }
  }, [showVideo])

  const handleVideoEnd = () => {
    // Remove video when it naturally ends
    setShowVideo(false)
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/file/cv/Viraj Kosala_CV.pdf'
    link.download = 'Viraj Kosala_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="mt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(to bottom, #000428, #004e92, #000428)'
          : 'linear-gradient(to bottom right, #dbeafe, #bfdbfe, #cffafe)',
        position: 'relative'
      }}
    >
      {/* Video Background - Plays Once and Removes When Ends */}
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
              opacity: 0.5,
              zIndex: 1
            }}
          >
            <source src="/video/Fish_Swimming_Video_Creation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(30, 27, 75, 0.8) 50%, rgba(15, 23, 42, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(96, 165, 250, 0.6) 50%, rgba(147, 197, 253, 0.6) 100%)',
          zIndex: 2
        }}
      />

      {/* Starry background for dark mode */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 3 }}>
          {/* Flowing walgatharu stars */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`flow-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `walgatharu ${Math.random() * 8 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
          {/* Wave pattern stars */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `wave ${Math.random() * 6 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          {/* Spiral stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`spiral-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.4,
                animation: `spiral ${Math.random() * 12 + 6}s linear infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
          {/* Floating particles */}
          {[...Array(60)].map((_, i) => (
            <div
              key={`float-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 1 + 0.5}px`,
                height: `${Math.random() * 1 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8 mt-12">
          {/* Text Content */}
          <div className="max-w-4xl">
            {/* Name Section */}
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-none mb-6" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                Hi, I'm <span style={{ color: '#ea580c' }}>Viraj Kosala</span>
              </h1>
            </div>

            {/* Title Section */}
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl font-semibold leading-tight mb-3" style={{ color: '#ea580c' }}>
                Undergraduate at SLIIT
              </p>
              <p className="text-lg sm:text-xl font-medium leading-tight" style={{ color: isDark ? '#d1d5db' : '#1f2937' }}>
                Software Engineering Student @ SLIIT 🎓 | Full-Stack Developer | Passionate about UI/UX & Problem Solving | Developing Innovative Web Applications 🌍
              </p>
            </div>

            {/* Description Section */}
            <div className="space-y-4 max-w-3xl mx-auto mb-6">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                I enjoy building innovative web applications , focusing on full-stack development, clean UI/UX, and practical solutions that create real-world impact.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: isDark ? '#d1d5db' : '#374151' }}>
                Driven by curiosity and continuous learning, I'm always exploring new technologies and improving my skills to design efficient, scalable, and user-friendly systems.
              </p>
            </div>

            {/* Quote Section */}
            <div className="mb-8">
              <p className="text-base sm:text-lg italic leading-relaxed" style={{ color: '#059669' }}>
                I'm always open to discussing new opportunities and interesting projects
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={downloadCV}
                className="gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:!text-gray-700 bg-transparent"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
