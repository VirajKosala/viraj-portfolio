'use client'

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight } from "lucide-react"

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Web Development':
      return 'bg-blue-500';
    case 'System Development':
      return 'bg-green-500';
    case 'Full-Stack':
      return 'bg-purple-500';
    case 'Mobile Development':
      return 'bg-orange-500';
    default:
      return 'bg-gray-500';
  }
};

const getTechColor = (tech: string) => {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-orange-100 text-orange-800',
    'bg-red-100 text-red-800',
    'bg-yellow-100 text-yellow-800',
  ];
  const index = tech.length % colors.length;
  return colors[index];
};

export default function ProjectsSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    // Check initial dark mode
    setIsDarkMode(document.documentElement.classList.contains('dark'))
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const projects = [
    {
      id: 1,
      title: "Malsara - Traditional Agriculture Platform",
      category: "Web Development",
      description: "Digital platform connecting farmers with traditional Sri Lankan agricultural practices, featuring crop management, weather integration, and marketplace functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      duration: "Dec 2024 - Present",
      image: "/images/malsara.png",
      githubUrl: "https://github.com/VirajKosala/malsara-traditional-agriculture-platform",
    },
    {
      id: 2,
      title: "Coconut-Based Product Management System",
      category: "System Development",
      description: "Complete inventory management system for coconut-based products with tracking and analytics.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      duration: "Feb 2025 - Jun 2025",
      image: "/images/CoconutPalm.jpg",
      githubUrl: "https://github.com/VirajKosala/Coconut-base-product-management-system",
    },
    {
      id: 3,
      title: "Online Drugs and Medicine Ordering System",
      category: "Full-Stack",
      description: "Modern e-commerce solution for pharmaceutical products with inventory management and delivery tracking.",
      technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
      duration: "Jul 2024 - Oct 2024",
      image: "/images/onlineDrugsandMedicine.webp",
      githubUrl: "https://github.com/VirajKosala/Drugs-and-medicine-management-system",
    },
    {
      id: 4,
      title: "SKILL NEST - Internship Management System",
      category: "Full-Stack",
      description: "Comprehensive internship management platform facilitating seamless interaction between interns and supervisors while enhancing skill development and career growth.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      duration: "3rd Year 2nd Semester",
      image: "/images/skillNest.png",
      githubUrl: "https://github.com/Janushan11/ITPM-Project",
    },
    {
      id: 5,
      title: "Online Advertising Agency Management System",
      category: "Web Development",
      description: "A comprehensive platform for managing advertising campaigns, client relationships, and performance analytics.",
      technologies: ["PHP", "HTML", "CSS", "XAMPP", "SQL"],
      duration: "Jan 2024 - Mar 2024",
      image: "/images/adver.jpg",
      githubUrl: "https://github.com/VirajKosala/online-advertising-management-agency-",
    },
    {
      id: 6,
      title: "Financial Tracking App with Room Database",
      category: "Mobile Development",
      description: "Feature-rich financial management application with local data persistence using Room Database, supporting expense tracking, budget management, and financial insights.",
      technologies: ["Android", "Kotlin", "Room Database", "MVVM", "Jetpack Compose"],
      duration: "Feb 2024 - Apr 2024",
      image: "/images/image.png",
      githubUrl: "https://github.com/VirajKosala/Financial-Tracker-with_Room_Database",
    },
    {
      id: 7,
      title: "HealthCare Application - Room Database",
      category: "Mobile Development",
      description: "Comprehensive healthcare management application using Room Database for patient records, appointments, and medical history tracking with secure data storage.",
      technologies: ["Android", "Kotlin", "Room Database", "Android Studio", "MVVM"],
      duration: "Nov 2024 - Present",
      image: "/images/healthcare.jpg",
      githubUrl: "https://github.com/VirajKosala/HealthCareApplication-Room-Database",
    },
    {
      id: 8,
      title: "HealthCare Application - Shared Preferences",
      category: "Mobile Development",
      description: "Lightweight healthcare tracking application using Shared Preferences for simple data storage, ideal for quick patient information access and basic medical record management.",
      technologies: ["Android", "Kotlin", "Shared Preferences", "Android Studio", "Material Design 3"],
      duration: "Dec 2024 - Present",
      image: "/images/healthcare2.webp",
      githubUrl: "https://github.com/VirajKosala/HealthCareApplication-Shared-Preferences",
    },
    {
      id: 9,
      title: "Financial Tracking App with shared preference",
      category: "Mobile Development",
      description: "Streamlined financial management application allowing users to track income and expenses with intuitive UI and real-time budgeting capabilities.",
      technologies: ["Android", "Kotlin", "Shared Preferences", "Android Studio", "Material Design 3"],
      duration: "Jan 2025 - Present",
      image: "/images/financial.webp",
      githubUrl: "https://github.com/VirajKosala/Financial-Tracker-Application_with_shared_preference-",
    },
    {
      id: 10,
      title: "Book Store Application",
      category: "Mobile Development",
      description: "Frontend-only book browsing application featuring user-friendly interface for exploring book categories and viewing detailed book information.",
      technologies: ["Android", "Kotlin", "Android Studio", "Material Design", "XML Layouts"],
      duration: "Feb 2025 - Present",
      image: "/images/book.webp",
      githubUrl: "https://github.com/VirajKosala/Book-Store-Application",
    },
  ]

  return (
    <section 
      id="projects" 
      className="py-16 px-4 bg-white dark:bg-gray-900"
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my development experience and technical skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <Card 
              key={project.id} 
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg p-0 cursor-pointer group backdrop-blur-sm border border-gray-200/50"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#e5e7eb'
              }}
            >
              <div 
                onClick={() => window.location.href = `/projects/${project.id}`}
                className="block cursor-pointer"
              >
                <div className="relative h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {project.duration}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 bg-blue-900 hover:bg-blue-800 text-white" 
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.location.href = `/projects/${project.id}`
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects - Shown when 'Show More' is clicked */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 transition-all duration-500 overflow-hidden ${showMore ? 'max-h-[2000px]' : 'max-h-0'}`}>
          {projects.slice(4).map((project) => (
            <Card 
              key={project.id}
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg p-0 cursor-pointer group backdrop-blur-sm border border-gray-200/50"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#e5e7eb'
              }}
            >
              <div 
                onClick={() => window.location.href = `/projects/${project.id}`}
                className="block cursor-pointer"
              >
                <div className="relative h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {project.duration}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 bg-blue-900 hover:bg-blue-800 text-white" 
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.location.href = `/projects/${project.id}`
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 text-center">
          <button
            onClick={toggleShowMore}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showMore ? "M19 9l-7 7-7-7" : "M19 15l-7-7-7 7"}></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              {showMore ? 'Show Less' : 'Show More Projects'}
            </span>
            <span className="relative invisible">
              {showMore ? 'Show Less' : 'Show More Projects'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}