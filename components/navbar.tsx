'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "courses", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const getNavLinkClass = (section: string) => {
    return `transition-all duration-300 px-4 py-2 font-medium cursor-pointer ${
      activeSection === section
        ? "text-primary font-semibold border-b-2 border-primary pb-1"
        : "text-foreground hover:text-primary"
    }`
  }

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b-2 border-primary/20 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Name on Left */}
          <div className="font-heading font-bold text-xl" style={{ color: '#ea580c' }}>
            Viraj Kosala Weerathunga
          </div>

          {/* Large Spacer to create maximum gap */}
          <div className="flex-grow"></div>

          {/* Navigation Bar on Right Side */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection("home")} 
              className={getNavLinkClass("home")}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={getNavLinkClass("about")}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("experience")} 
              className={getNavLinkClass("experience")}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("skills")} 
              className={getNavLinkClass("skills")}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className={getNavLinkClass("projects")}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("courses")} 
              className={getNavLinkClass("courses")}
            >
              Courses & Certifications
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={getNavLinkClass("contact")}
            >
              Contact
            </button>
            
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-primary/20 rounded-b-lg">
              <button
                onClick={() => scrollToSection("home")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("home")}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("about")}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("skills")}`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("projects")}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("courses")}`}
              >
                Courses & Certifications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`block px-3 py-2 w-full text-left rounded-md ${getNavLinkClass("contact")}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
