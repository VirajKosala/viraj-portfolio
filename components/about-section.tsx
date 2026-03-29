"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ChevronDown, ChevronUp, Download } from "lucide-react"

export function AboutSection() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

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

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{
        background: isDarkMode
          ? 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 50%, #0f172a 100%)'
          : 'linear-gradient(135deg, #a8c9feff 0%, #bad9ffff 50%, #c6e1ffff 100%)'
      }}
    >
      {/* Changed max-w-6xl to max-w-7xl for wider overall layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-indigo-500/50 dark:from-blue-600/40 dark:via-blue-500/40 dark:to-indigo-600/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-r from-blue-600/60 to-indigo-600/60 dark:from-blue-700/50 dark:to-indigo-700/50 backdrop-blur-xl border border-blue-300/60 dark:border-blue-400/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-blue-200/5 to-transparent pointer-events-none rounded-3xl dark:from-white/10 dark:via-transparent dark:to-transparent"></div>
                <div className="relative p-10 z-10">
                  <h3 className="font-heading font-bold text-2xl mb-6 text-white">Profile</h3>
                  <p className="text-white/98 leading-relaxed text-pretty text-base font-medium">
                    Motivated and detail-oriented undergraduate student currently pursuing a degree in Information Technology at <span className="text-yellow-500 font-bold">SLIIT</span>. 
                    In <span className="font-bold text-yellow-300">third year, second semester</span>, specializing in Information Technology. I am eager to apply my knowledge in technology, 
                    data management, and software development to real-world challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center [perspective:1000px]">
            <div
              className={`relative w-80 h-80 transition-all duration-1000 [transform-style:preserve-3d] cursor-pointer ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Face (Image) */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400/20 via-blue-400/20 to-orange-400/20 p-1">
                    <img
                      src="/images/viraj-photo.jpg"
                      alt="Viraj Kosala"
                      className="w-full h-full rounded-full object-cover border-2 border-white/10 shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Back Face (Text) */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 p-1 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                  <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center p-6 text-center border-2 border-green-500/50 backdrop-blur-sm">
                    <div className="space-y-2">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-20 animate-pulse"></div>
                        <h3 className="relative font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                          Available for Opportunities
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            My academic journey and achievements
          </p>
        </div>

        {/* Adjusted container width */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline line - Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2"></div>

            <div className="space-y-0">
              {/* SLIIT Education - Left side */}
              <div className="relative flex items-center justify-between">
                {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="relative group w-[48%]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div 
                    className="relative bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-200 transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                      borderColor: isDarkMode ? '#374151' : '#dbeafe'
                    }}
                    onClick={() => toggleCard('sliit')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">
                        2023 - 2027
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      BSc (Hons) in Information Technology
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        Sri Lanka Institute of Information Technology (SLIIT)
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Specializing in Information Technology with focus on software development, data management, and emerging technologies.
                    </p>
                    
                    {/* Chevron Icon - Bottom Right */}
                    <div className="absolute bottom-4 right-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50"></div>
                        {expandedCard === 'sliit' ? (
                          <ChevronUp className="relative w-6 h-6 text-blue-500 drop-shadow-lg" />
                        ) : (
                          <ChevronDown className="relative w-6 h-6 text-blue-500 drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    
                    {/* Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'sliit' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Campus</h4>
                            <p className="text-sm text-gray-600">Malabe Campus, Colombo</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-700 mb-2">CGPA</h4>
                            <p className="text-sm text-gray-600">3.13</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-700 mb-2">Current Status</h4>
                            <p className="text-sm text-gray-600">3rd Year, 2nd Semester</p>
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <a 
                              href="/file/cv/IT23322912_StudentPerformanceProfile.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                            >
                              <Download className="w-4 h-4" />
                              View Result Sheet
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-background shadow-lg relative z-10"></div>
                {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="w-[48%]"></div>
              </div>

              {/* A-Level Education - Right side */}
              <div className="relative flex items-center justify-between">
                 {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="w-[48%]"></div>
                <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-background shadow-lg relative z-10"></div>
                {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="relative group w-[48%]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div 
                    className="relative bg-white rounded-lg p-4 border border-purple-100 hover:border-purple-200 transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                      borderColor: isDarkMode ? '#374151' : '#e9d5ff'
                    }}
                    onClick={() => toggleCard('alevel')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium">
                        2022 (2021)
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      GCE Advanced Level
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        G/Karandeniya Central College
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Physical Science Stream with Mathematics specialization, building strong analytical and mathematical foundations.
                    </p>
                    
                    {/* Chevron Icon - Bottom Right */}
                    <div className="absolute bottom-4 right-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-50"></div>
                        {expandedCard === 'alevel' ? (
                          <ChevronUp className="relative w-6 h-6 text-purple-500 drop-shadow-lg" />
                        ) : (
                          <ChevronDown className="relative w-6 h-6 text-purple-500 drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    
                    {/* Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'alevel' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="mt-4 pt-4 border-t border-purple-200">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Results</h4>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Physics:</span>
                                <span className="text-green-600 font-semibold">C</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Chemistry:</span>
                                <span className="text-green-600 font-semibold">C</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Combined Maths:</span>
                                <span className="text-green-600 font-semibold">C</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                              <Download className="w-4 h-4" />
                              Download Result Sheet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* O-Level Education - Left side */}
              <div className="relative flex items-center justify-between">
                {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="relative group w-[48%]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div 
                    className="relative bg-white rounded-lg p-4 border border-green-100 hover:border-green-200 transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                      borderColor: isDarkMode ? '#374151' : '#dcfce7'
                    }}
                    onClick={() => toggleCard('olevel')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">
                        2018
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      GCE Ordinary Level
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        G/Karandeniya Central College
                      </span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      Completed secondary education with excellent results, establishing strong foundation for advanced studies in science and mathematics.
                    </p>
                    
                    {/* Chevron Icon - Bottom Right */}
                    <div className="absolute bottom-4 right-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50"></div>
                        {expandedCard === 'olevel' ? (
                          <ChevronUp className="relative w-6 h-6 text-green-500 drop-shadow-lg" />
                        ) : (
                          <ChevronDown className="relative w-6 h-6 text-green-500 drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                    
                    {/* Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === 'olevel' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2">Results</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Buddhism:</span>
                                <span className="text-green-600 font-semibold">A</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">History:</span>
                                <span className="text-green-600 font-semibold">A</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Health Science:</span>
                                <span className="text-green-600 font-semibold">A</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Mathematics:</span>
                                <span className="text-green-600 font-semibold">A</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Sinhala:</span>
                                <span className="text-green-600 font-semibold">B</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">English:</span>
                                <span className="text-green-600 font-semibold">B</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Science:</span>
                                <span className="text-green-600 font-semibold">B</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Commerce:</span>
                                <span className="text-green-600 font-semibold">B</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Art:</span>
                                <span className="text-green-600 font-semibold">C</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                              <Download className="w-4 h-4" />
                              Download Result Sheet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background shadow-lg relative z-10"></div>
                {/* CHANGED: w-5/12 to w-[48%] */}
                <div className="w-[48%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}