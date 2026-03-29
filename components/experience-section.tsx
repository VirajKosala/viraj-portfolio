"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Code, Cpu, MapPin, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

export function ExperienceSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))
    
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Software Intern",
      company: "Sri Lanka Telecom (SLT)",
      duration: "Aug 2025 -Feb 2026",
      location: "Colombo, Sri Lanka",
      description: "Developing and maintaining enterprise-level web applications with a focus on performance and user experience.",
      responsibilities: [
        "Developing the IntraLink chat application for internal communication among SLT employees",
        "Implementing real-time messaging features using WebSockets",
        "Designing and developing responsive UIs with React and Tailwind CSS",
        "Building RESTful APIs with Spring Boot and Java",
        "Collaborating with cross-functional teams to define and implement new features"
      ],
      technologies: ["Spring Boot", "React", "Java", "WebSocket", "Tailwind CSS", "PostgreSQL"],
      logo: "/images/SLT_logo.png",
      projectImages: [
        { src: "/images/intern/viraj_login.png", alt: "Login", caption: "Login Interface" },
        { src: "/images/intern/viraj_reg.png", alt: "Registration", caption: "Registration Page" },
        { src: "/images/intern/viraj_chat.png", alt: "Interface", caption: "Chat Interface" },
        { src: "/images/intern/viraj_Creategroup.png", alt: "Groups", caption: "Create Group" },
        { src: "/images/intern/Viraj_group.png", alt: "Messaging", caption: "Group Chat" },
        { src: "/images/intern/viraj_notification.png", alt: "Notif", caption: "Notifications" }
      ]
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % experiences[0].projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + experiences[0].projectImages.length) % experiences[0].projectImages.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="experience" className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className={`text-3xl font-bold mb-3 ${
            isDarkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400' 
              : 'text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}>
            Experience
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My career path and professional growth in the tech industry
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {isDarkMode && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              )}
              
              <div 
                className={`relative overflow-hidden transition-all duration-300 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 hover:shadow-lg'
                }`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className={`p-2.5 rounded-xl shadow-sm border ${
                      isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                      <Image 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        width={48} 
                        height={48} 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-white" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
                            {exp.role}
                          </h3>
                          <p className={`text-sm font-medium mt-1 ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            Project: IntraLink Chat Application
                          </p>
                          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-300 mt-2 space-x-3">
                            <span className="flex items-center font-medium">
                              {exp.company}
                            </span>
                            <span className={`hidden sm:inline-block w-1 h-1 rounded-full ${
                              isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                            }`}></span>
                            <span className="flex items-center">
                              <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                              {exp.location}
                            </span>
                            <span className={`hidden sm:inline-block w-1 h-1 rounded-full ${
                              isDarkMode ? 'bg-gray-500' : 'bg-gray-400'
                            }`}></span>
                            <span className={`flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full ${
                              isDarkMode 
                                ? 'text-blue-300 bg-blue-900/30' 
                                : 'text-blue-700 bg-blue-100'
                            }`}>
                              <Calendar className="w-3.5 h-3.5 mr-1.5" />
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                        
                        <button 
                          className={`ml-auto p-1.5 rounded-full transition-colors ${
                            isDarkMode 
                              ? 'hover:bg-gray-700' 
                              : 'hover:bg-gray-100'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleExpand(exp.id)
                          }}
                        >
                          {expandedCard === exp.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                          )}
                        </button>
                      </div>
                      
                      <p className={`mt-3 text-pretty ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {exp.description}
                      </p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 4).map((tech, i) => (
                          <span 
                            key={i}
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              isDarkMode 
                                ? 'bg-blue-900/50 text-blue-300' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            +{exp.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === exp.id ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className={`px-6 pb-6 pt-0 border-t ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          <Code className="w-4 h-4 mr-2" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 pl-6">
                          {exp.responsibilities.map((item, i) => (
                            <li 
                              key={i} 
                              className={`relative pl-3 ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              } before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          <Cpu className="w-4 h-4 mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                                isDarkMode 
                                  ? 'bg-blue-900/50 text-blue-300' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Showcase */}
                      {exp.projectImages && exp.projectImages.length > 0 && (
                        <div className="pt-4">
                          <h4 className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                            <ImageIcon className="w-4 h-4 mr-2" />
                            Application Screenshots
                          </h4>
                          <div className={`relative rounded-xl overflow-hidden ${
                            isDarkMode 
                              ? 'bg-gray-800' 
                              : 'bg-white'
                          }`}>
                            {/* Browser Top Bar */}
                            <div className={`flex items-center justify-between px-4 py-2 border-b ${
                              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                            }`}>
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className={`text-xs font-medium ${
                                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  Application Screenshots
                                </div>
                              </div>
                              
                              {/* Navigation Arrows */}
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                                  }`}
                                  aria-label="Previous image"
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"/>
                                  </svg>
                                </button>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                  className={`p-1.5 rounded-lg transition-colors ${
                                    isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                                  }`}
                                  aria-label="Next image"
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"/>
                                  </svg>
                                </button>
                              </div>
                            </div>

                            {/* Image Gallery */}
                            <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                              <div className="flex transition-transform duration-300 ease-in-out" 
                                   style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                                {exp.projectImages.map((image, index) => (
                                  <div key={index} className="w-full flex-shrink-0">
                                    <img 
                                      src={image.src} 
                                      alt={image.alt}
                                      className="w-full h-auto object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Caption */}
                            <div className={`px-4 py-2 border-t ${
                              isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                            }`}>
                              <div className={`text-center text-sm font-medium ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                {exp.projectImages[currentImageIndex].caption}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
