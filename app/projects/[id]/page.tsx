"use client"

import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Github, ExternalLink, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "Malsara - Traditional Agriculture Platform",
    category: "Web Development",
    description: "Digital platform connecting farmers with traditional Sri Lankan agricultural practices, featuring crop management, weather integration, and marketplace functionality.",
    fullDescription: "Malsara is a comprehensive digital platform designed to bridge modern technology with traditional Sri Lankan agricultural practices. The system provides farmers with tools for crop management, weather forecasting integration, pest control guidance, and a marketplace for buying and selling agricultural products. Built with responsive design and user-friendly interface to ensure accessibility for farmers in rural areas.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    duration: "Dec 2024 - Present",
    image: "/images/malsara.png",
    githubUrl: "https://github.com/VirajKosala/malsara-traditional-agriculture-platform",
    liveUrl: null,
    features: [
      "Crop management and tracking",
      "Weather integration and forecasting",
      "Traditional farming guidance",
      "Marketplace for agricultural products",
      "Pest and disease identification",
      "Yield prediction algorithms",
      "Mobile-responsive design for rural access"
    ],
    gallery: [
      { type: "image", src: "/images/malsara.png", alt: "Malsara Dashboard" },
      { type: "image", src: "/images/malsara.png", alt: "Crop Management Interface" },
      { type: "image", src: "/images/malsara.png", alt: "Weather Integration" },
      { type: "image", src: "/images/malsara.png", alt: "Marketplace View" }
    ]
  },
  {
    id: 2,
    title: "Coconut-Based Product Management System",
    category: "System Development",
    description: "Complete inventory management system for coconut-based products with tracking and analytics.",
    fullDescription: "A specialized inventory management solution designed for coconut-based product manufacturers. This system provides comprehensive tracking from raw material procurement to final product delivery, including quality control, batch tracking, and supply chain optimization.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    duration: "Feb 2025 - Jun 2025",
    image: "/images/CoconutPalm.jpg",
    githubUrl: "https://github.com/VirajKosala/Coconut-base-product-management-system",
    liveUrl: null,
    features: [
      "Real-time inventory tracking",
      "Quality control management",
      "Supply chain optimization",
      "Automated reorder system",
      "Analytics and reporting",
      "Batch tracking",
      "Supplier management",
      "Product categorization"
    ],
    gallery: [
      { type: "image", src: "/images/CoconutPalm.jpg", alt: "Inventory Dashboard" },
      { type: "image", src: "/images/CoconutPalm.jpg", alt: "Product Management" },
      { type: "image", src: "/images/CoconutPalm.jpg", alt: "Analytics Reports" },
      { type: "image", src: "/images/CoconutPalm.jpg", alt: "Supply Chain View" }
    ]
  },
  {
    id: 3,
    title: "Online Drugs and Medicine Ordering System",
    category: "Full-Stack",
    description: "Modern e-commerce solution for pharmaceutical products with inventory management and delivery tracking.",
    fullDescription: "A comprehensive pharmaceutical e-commerce platform that enables customers to order prescription and over-the-counter medications online. The system features robust inventory management, secure payment processing, prescription verification, and real-time delivery tracking. Built with compliance and safety as top priorities.",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    duration: "Jul 2024 - Oct 2024",
    image: "/images/onlineDrugsandMedicine.webp",
    githubUrl: "https://github.com/VirajKosala/Drugs-and-medicine-management-system",
    liveUrl: null,
    features: [
      "Secure prescription upload",
      "Real-time inventory management",
      "Payment gateway integration",
      "Delivery tracking system",
      "Customer verification system",
      "Medicine database search",
      "Order history tracking",
      "Pharmacy network integration"
    ],
    gallery: [
      { type: "image", src: "/images/onlineDrugsandMedicine.webp", alt: "Medicine Search" },
      { type: "image", src: "/images/onlineDrugsandMedicine.webp", alt: "Order Placement" },
      { type: "image", src: "/images/onlineDrugsandMedicine.webp", alt: "Prescription Upload" },
      { type: "image", src: "/images/onlineDrugsandMedicine.webp", alt: "Delivery Tracking" }
    ]
  },
  {
    id: 4,
    title: "SKILL NEST - Internship Management",
    category: "Full-Stack",
    description: "Comprehensive internship management platform facilitating seamless interaction between interns and supervisors while enhancing skill development and career growth.",
    fullDescription: "SKILL NEST is a comprehensive internship management platform developed by a 4-member team during 3rd year 2nd semester. This MERN stack application revolutionizes how internships are managed by providing a centralized hub for interns to discover opportunities, interact with supervisors, track progress, and develop essential skills. The platform features advanced matching algorithms to connect interns with suitable supervisors, real-time communication tools, progress tracking dashboards, and skill assessment modules to ensure meaningful internship experiences and career growth.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    duration: "3rd Year 2nd Semester",
    image: "/images/skillNest.png",
    githubUrl: "https://github.com/Janushan11/ITPM-Project",
    liveUrl: null,
    features: [
      "Intern-supervisor matching system",
      "Real-time communication platform",
      "Progress tracking and reporting",
      "Skill assessment and development",
      "Internship opportunity discovery",
      "Performance evaluation tools",
      "Career guidance resources",
      "Team collaboration features"
    ],
    gallery: [
      { type: "image", src: "/images/skill-nest-assement.png", alt: "Skill Assessment Page" },
      { type: "image", src: "/images/skill-nest-diaryManagement.png", alt: "Diary Management Interface" },
      { type: "image", src: "/images/skill-nest-dailyDiaryEntry.png", alt: "Daily Diary Entry" },
      { type: "image", src: "/images/skill-nest-supDashbaord.png", alt: "Supervisor Dashboard" }
    ]
  },
  {
    id: 5,
    title: "Online Advertising Agency Management System",
    category: "Web Development",
    description: "A comprehensive platform for managing advertising campaigns, client relationships, and performance analytics.",
    fullDescription: "This advanced advertising agency management system streamlines the entire workflow of digital marketing campaigns. The platform features real-time campaign tracking, client management dashboards, automated reporting, and integrated analytics tools. Built with modern web technologies to ensure scalability and performance.",
    technologies: ["PHP", "HTML", "CSS", "XAMPP", "SQL"],
    duration: "Jan 2024 - Mar 2024",
    image: "/images/adver.jpg",
    githubUrl: "https://github.com/VirajKosala/online-advertising-management-agency-",
    liveUrl: "https://example.com",
    features: [
      "Real-time campaign analytics",
      "Client relationship management",
      "Automated reporting system",
      "Multi-user collaboration",
      "Payment processing integration"
    ],
    gallery: [
      { type: "image", src: "/images/adver.jpg", alt: "Dashboard Overview" },
      { type: "image", src: "/images/adver.jpg", alt: "Campaign Analytics" },
      { type: "video", src: "/videos/demo.mp4", alt: "Platform Demo" }
    ]
  },
  {
    id: 6,
    title: "Financial Tracking App with Room Database",
    category: "Mobile Development",
    description: "Feature-rich financial management application with local data persistence using Room Database, supporting expense tracking, budget management, and financial insights.",
    fullDescription: "A comprehensive financial tracking mobile application designed to help users manage their personal finances effectively. The app features intuitive budget planning, expense categorization, investment tracking, and financial goal setting with real-time notifications and insights. Built with Room Database for reliable local data persistence and MVVM architecture for clean, maintainable code structure.",
    technologies: ["Android", "Kotlin", "Room Database", "MVVM", "Jetpack Compose"],
    duration: "Feb 2024 - Apr 2024",
    image: "/images/image.png",
    githubUrl: "https://github.com/VirajKosala/Financial-Tracker-with_Room_Database",
    liveUrl: null,
    features: [
      "Expense and income tracking",
      "Budget planning and management",
      "Financial analytics dashboard",
      "Data export functionality",
      "Secure local data storage",
      "Real-time financial insights",
      "Investment portfolio tracking"
    ],
    gallery: [
      { type: "image", src: "/images/image.png", alt: "Financial Dashboard" },
      { type: "image", src: "/images/image.png", alt: "Expense Tracking" },
      { type: "image", src: "/images/image.png", alt: "Budget Planning" },
      { type: "image", src: "/images/image.png", alt: "Analytics View" }
    ]
  },
  {
    id: 7,
    title: "HealthCare Application - Room Database",
    category: "Mobile Development",
    description: "Comprehensive healthcare management application using Room Database for patient records, appointments, and medical history tracking with secure data storage.",
    fullDescription: "A comprehensive healthcare management application designed to streamline patient care and medical record management. The application provides secure storage of patient information, appointment scheduling, medication tracking, and medical history management. Built with Room Database for reliable local data persistence and MVVM architecture for clean, maintainable code structure.",
    technologies: ["Android", "Kotlin", "Room Database", "Android Studio", "MVVM"],
    duration: "Nov 2024 - Present",
    image: "/images/healthcare.jpg",
    githubUrl: "https://github.com/VirajKosala/HealthCareApplication-Room-Database",
    liveUrl: null,
    features: [
      "Patient record management",
      "Appointment scheduling system",
      "Medical history tracking",
      "Medication reminders",
      "Secure data encryption",
      "Offline data access",
      "Doctor-patient communication",
      "Health analytics dashboard"
    ],
    gallery: [
      { type: "image", src: "/images/healthcare.jpg", alt: "Patient Dashboard" },
      { type: "image", src: "/images/healthcare.jpg", alt: "Appointment Calendar" },
      { type: "image", src: "/images/healthcare.jpg", alt: "Medical Records" },
      { type: "image", src: "/images/healthcare.jpg", alt: "Medication Tracker" }
    ]
  },
  {
    id: 8,
    title: "HealthCare Application - Shared Preferences",
    category: "Mobile Development",
    description: "Lightweight healthcare tracking application using Shared Preferences for simple data storage, ideal for quick patient information access and basic medical record management.",
    fullDescription: "A lightweight healthcare tracking application designed for simple and efficient medical record management. The app uses Shared Preferences for basic data storage, making it ideal for quick patient information access and essential medical record keeping. Perfect for scenarios where complex database functionality is not required.",
    technologies: ["Android", "Kotlin", "Shared Preferences", "Android Studio", "Material Design 3"],
    duration: "Dec 2024 - Present",
    image: "/images/healthcare2.webp",
    githubUrl: "https://github.com/VirajKosala/HealthCareApplication-Shared-Preferences",
    liveUrl: null,
    features: [
      "Simple patient data storage",
      "Quick information access",
      "Basic medical history tracking",
      "Lightweight design",
      "Fast data retrieval",
      "Material Design 3 UI",
      "Offline functionality"
    ],
    gallery: [
      { type: "image", src: "/images/healthcare2.webp", alt: "Patient Quick View" },
      { type: "image", src: "/images/healthcare2.webp", alt: "Medication Tracker" },
      { type: "image", src: "/images/healthcare2.webp", alt: "Appointment Reminders" },
      { type: "image", src: "/images/healthcare2.webp", alt: "Settings Interface" }
    ]
  },
  {
    id: 9,
    title: "Financial Tracking App with shared preference",
    category: "Mobile Development",
    description: "Streamlined financial management application allowing users to track income and expenses with intuitive UI and real-time budgeting capabilities.",
    fullDescription: "A streamlined financial management application designed to simplify personal finance tracking. The app allows users to easily add, view, edit, and delete income and expense records with a simple, intuitive interface. Features real-time financial tracking, budget management, and data persistence using Shared Preferences for reliable local storage.",
    technologies: ["Android", "Kotlin", "Shared Preferences", "Android Studio", "Material Design 3"],
    duration: "Jan 2025 - Present",
    image: "/images/financial.webp",
    githubUrl: "https://github.com/VirajKosala/Financial-Tracker-Application_with_shared_preference-",
    liveUrl: null,
    features: [
      "Income and expense tracking",
      "Add, edit, delete records",
      "Real-time financial updates",
      "Budget management tools",
      "Intuitive user interface",
      "Data persistence with Shared Preferences",
      "Financial analytics dashboard",
      "Transaction categorization"
    ],
    gallery: [
      { type: "image", src: "/images/financial.webp", alt: "Finance Dashboard" },
      { type: "image", src: "/images/financial.webp", alt: "Add Transaction" },
      { type: "image", src: "/images/financial.webp", alt: "Budget Overview" },
      { type: "image", src: "/images/financial.webp", alt: "Transaction History" }
    ]
  },
  {
    id: 10,
    title: "Book Store Application",
    category: "Mobile Development",
    description: "Frontend-only book browsing application featuring user-friendly interface for exploring book categories and viewing detailed book information.",
    fullDescription: "A front-end-only Book Store application developed using Android Studio with a focus on creating an engaging and intuitive user experience. The app features a clean, modern interface allowing users to browse different book categories, view detailed book information, and navigate through various sections seamlessly. While it doesn't include backend functionality, it showcases excellent layout design and user interaction patterns.",
    technologies: ["Android", "Kotlin", "Android Studio", "Material Design", "XML Layouts"],
    duration: "Feb 2025 - Present",
    image: "/images/book.webp",
    githubUrl: "https://github.com/VirajKosala/Book-Store-Application",
    liveUrl: null,
    features: [
      "Book category browsing",
      "Detailed book information view",
      "User-friendly interface",
      "Smooth navigation",
      "Material Design components",
      "Responsive layouts",
      "Search functionality",
      "Book details display"
    ],
    gallery: [
      { type: "image", src: "/images/book.webp", alt: "Book Store Home" },
      { type: "image", src: "/images/book.webp", alt: "Category Browse" },
      { type: "image", src: "/images/book.webp", alt: "Book Details" },
      { type: "image", src: "/images/book.webp", alt: "Navigation Menu" }
    ]
  }
]

const getCategoryColor = (category: string) => {
  const colors = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  ];
  const index = category.length % colors.length;
  return colors[index];
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const project = projects.find(p => p.id === parseInt(resolvedParams.id))
  
  if (!project) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 hover:bg-muted/50 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Project Image */}
              <div className="lg:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Project Info */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mt-4 mb-2">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Duration</h3>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className={getCategoryColor(project.category)}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Full Description */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Media Gallery</h2>
              
              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={prevImage}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <span className="text-sm text-muted-foreground">
                  {currentImageIndex + 1} / {project.gallery.length}
                </span>
                
                <button 
                  onClick={nextImage}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Single Image Display */}
              <div className="relative rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                <div className="relative">
                  {project.gallery[currentImageIndex].type === 'image' ? (
                    <img
                      src={project.gallery[currentImageIndex].src}
                      alt={project.gallery[currentImageIndex].alt}
                      className="w-full h-[700px] object-contain"
                    />
                  ) : (
                    <video
                      src={project.gallery[currentImageIndex].src}
                      className="w-full h-[700px] object-contain"
                      controls
                      poster={project.image}
                    />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{project.gallery[currentImageIndex].alt}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}