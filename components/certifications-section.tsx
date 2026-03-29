"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, X } from "lucide-react"

export function CertificationsSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const openCertificate = (url: string) => {
    if (url.endsWith('.pdf')) {
      window.open(url, '_blank')
    } else {
      setSelectedImage(url)
    }
  }

  const closeImage = () => {
    setSelectedImage(null)
  }
  const certifications = [
    {
      title: "Web-Design For Beginners",
      issuer: "University of Moratuwa",
      category: "Web Development",
      image: "/sertificates/Web_Design_for_Beginners_E-Certificate.pdf"
    },
    {
      title: "Front-End Web Development",
      issuer: "University of Moratuwa",
      category: "Web Development",
      image: "/sertificates/Front-End_Web_Development_E-Certificate.pdf"
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      category: "Programming",
      image: "/sertificates/Python_for_Beginners_E-Certificate.pdf"
    },
    {
      title: "Python Programming",
      issuer: "University of Moratuwa",
      category: "Programming",
      image: "/sertificates/Python_Programming_E-Certificate.pdf"
    },
    {
      title: "OOPs in Java Programming",
      issuer: "Simple Learn",
      category: "Programming",
      image: "/sertificates/oop_in_java.pdf"
    },
    {
      title: "Spoken and Writing English Course",
      issuer: "Slega Academy",
      category: "Language",
      image: "/certificates/spoken-and-writing-english-course.jpg"
    },
    {
      title: "A2-KEY exam",
      issuer: "Cambridge College of British English",
      category: "Language",
      image: "/certificates/a2-key-exam.jpg"
    },
  ]

  const categories = ["Web Development", "Programming", "Language"]

  return (
    <section 
      id="courses"
      className="py-20 bg-white dark:bg-gray-900"
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Courses & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-xl mb-4 text-primary">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications
                  .filter((cert) => cert.category === category)
                  .map((cert, index) => (
                    <Card 
                      key={index}
                      className="bg-white backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                      style={{
                        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                        borderColor: isDarkMode ? '#374151' : '#e5e7eb'
                      }}
                      onClick={() => openCertificate(cert.image)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-pretty">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeImage}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
