"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
  const programmingLanguages = [
    "Java",
    "Python",
    "Kotlin",
    "JavaScript",
    "R",
    "C",
    "C++",
    "SpringBoot",
    "React.js",
    "Node.js",
    "Express.js",
  ]
  const databases = ["PostgreSQL", "SQL", "MongoDB", "MySQL"]
  const tools = ["Figma", "VS Code", "GitHub", "Android Studio", "Eclipse", "Jupyter Notebook"]
  const softSkills = [
    "Time Management",
    "Communication",
    "Quick Learning",
    "Problem-Solving",
    "Self-learning",
    "Teamwork",
  ]

  const getSkillColor = (skill: string, category: string) => {
    const colors = {
      programming: [
        "bg-orange-600 dark:bg-orange-500 text-white hover:bg-orange-700 dark:hover:bg-orange-600",
        "bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600",
        "bg-amber-600 dark:bg-amber-500 text-white hover:bg-amber-700 dark:hover:bg-amber-600",
        "bg-yellow-600 dark:bg-yellow-500 text-white hover:bg-yellow-700 dark:hover:bg-yellow-600",
        "bg-orange-700 dark:bg-orange-600 text-white hover:bg-orange-800 dark:hover:bg-orange-700",
        "bg-red-700 dark:bg-red-600 text-white hover:bg-red-800 dark:hover:bg-red-700",
        "bg-amber-700 dark:bg-amber-600 text-white hover:bg-amber-800 dark:hover:bg-amber-700",
        "bg-yellow-700 dark:bg-yellow-600 text-white hover:bg-yellow-800 dark:hover:bg-yellow-700",
      ],
      database: [
        "bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600",
        "bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600",
        "bg-cyan-600 dark:bg-cyan-500 text-white hover:bg-cyan-700 dark:hover:bg-cyan-600",
        "bg-sky-600 dark:bg-sky-500 text-white hover:bg-sky-700 dark:hover:bg-sky-600",
        "bg-blue-700 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-700",
        "bg-indigo-700 dark:bg-indigo-600 text-white hover:bg-indigo-800 dark:hover:bg-indigo-700",
      ],
      tools: [
        "bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600",
        "bg-pink-600 dark:bg-pink-500 text-white hover:bg-pink-700 dark:hover:bg-pink-600",
        "bg-rose-600 dark:bg-rose-500 text-white hover:bg-rose-700 dark:hover:bg-rose-600",
        "bg-violet-600 dark:bg-violet-500 text-white hover:bg-violet-700 dark:hover:bg-violet-600",
        "bg-fuchsia-600 dark:bg-fuchsia-500 text-white hover:bg-fuchsia-700 dark:hover:bg-fuchsia-600",
        "bg-purple-700 dark:bg-purple-600 text-white hover:bg-purple-800 dark:hover:bg-purple-700",
      ],
      soft: [
        "bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600",
        "bg-emerald-600 dark:bg-emerald-500 text-white hover:bg-emerald-700 dark:hover:bg-emerald-600",
        "bg-teal-600 dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-600",
        "bg-lime-600 dark:bg-lime-500 text-white hover:bg-lime-700 dark:hover:bg-lime-600",
        "bg-green-700 dark:bg-green-600 text-white hover:bg-green-800 dark:hover:bg-green-700",
        "bg-emerald-700 dark:bg-emerald-600 text-white hover:bg-emerald-800 dark:hover:bg-emerald-700",
      ],
    }

    const categoryColors = colors[category as keyof typeof colors] || colors.programming
    const index =
      category === "programming"
        ? programmingLanguages.indexOf(skill)
        : category === "database"
          ? databases.indexOf(skill)
          : category === "tools"
            ? tools.indexOf(skill)
            : softSkills.indexOf(skill)

    return categoryColors[index % categoryColors.length]
  }

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 gradient-text bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div 
              className="relative bg-white rounded-lg p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300 h-full flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#fed7aa'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Programming Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-start justify-start">
                {programmingLanguages.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border border-orange-200 rounded-full text-xs font-medium hover:from-orange-100 hover:to-red-100 transition-colors duration-200 whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div 
              className="relative bg-white rounded-lg p-6 border border-cyan-100 hover:border-cyan-200 transition-all duration-300 h-full flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#cffafe'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-start justify-start">
                {databases.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium hover:from-cyan-100 hover:to-blue-100 transition-colors duration-200 whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div 
              className="relative bg-white rounded-lg p-6 border border-purple-100 hover:border-purple-200 transition-all duration-300 h-full flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#e9d5ff'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tools & IDEs</h3>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-start justify-start">
                {tools.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium hover:from-purple-100 hover:to-pink-100 transition-colors duration-200 whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div 
              className="relative bg-white rounded-lg p-6 border border-green-100 hover:border-green-200 transition-all duration-300 h-full flex flex-col"
              style={{
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                borderColor: isDarkMode ? '#374151' : '#dcfce7'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="font-heading text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 flex-grow items-start justify-start">
                {softSkills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 rounded-full text-xs font-medium hover:from-green-100 hover:to-emerald-100 transition-colors duration-200 whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
