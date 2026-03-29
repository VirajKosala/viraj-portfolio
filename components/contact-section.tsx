"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

// EmailJS Configuration
const SERVICE_ID = 'service_4j1aumo'
const TEMPLATE_ID = 'template_11xv686'  // ✅ Updated with correct template ID
const PUBLIC_KEY = 'sGU6c9PKxuqe8EKyN'

export function ContactSection() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmDialog(true)
  }

  const handleConfirmSubmit = async () => {
    setShowConfirmDialog(false)
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields')
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Map form data to template parameters
      const templateParams = {
        name: formData.name,      // Matches {{name}} in your template
        email: formData.email,    // Matches {{email}} in your template
        message: formData.message // Matches {{message}} in your template
      }

      console.log('Sending email with params:', templateParams)
      console.log('Using SERVICE_ID:', SERVICE_ID)
      console.log('Using TEMPLATE_ID:', TEMPLATE_ID)

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log('Email sent successfully:', response)

      // On Success: Clear form and show success dialog
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setShowSuccessDialog(true)

    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      
      // Show more detailed error message
      let errorMessage = 'Failed to send message'
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === 'object' && error !== null) {
        // Type guard for EmailJS error
        const emailJSError = error as { text?: string };
        // Type guard for HTTP error
        const httpError = error as { status?: number | string; statusText?: string };
        
        // Handle EmailJS specific errors
        if ('text' in emailJSError && emailJSError.text) {
          errorMessage = `EmailJS Error: ${emailJSError.text}`;
        } 
        // Handle HTTP errors
        else if ('status' in httpError && httpError.status) {
          const status = httpError.status;
          const statusText = 'statusText' in httpError ? httpError.statusText : 'Unknown error';
          errorMessage = `HTTP Error: ${status} - ${statusText}`;
        } 
        // Fallback for other error types
        else {
          errorMessage = `Unknown error: ${JSON.stringify(error)}`;
        }
      }
      
      alert(`Error: ${errorMessage}`)
      console.log('Full error details:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#ffffff'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 gradient-text bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg font-semibold max-w-2xl mx-auto" style={{ color: isDarkMode ? '#e2e8f0' : '#000000' }}>
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card 
              className="backdrop-blur-sm border border-blue-200/50 dark:border-orange-500/50 hover:border-blue-300/70 dark:hover:border-orange-600/70 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              style={{
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <CardHeader className="bg-gradient-to-r from-orange-200 to-red-200 dark:from-orange-900/80 dark:to-red-900/80">
                <CardTitle className="font-heading text-xl text-white" style={{ color: '#ffffff' }}>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <span>virajkosala0204@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <span>+94 713 44 92 92</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span>Galle, Sri Lanka</span>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              style={{
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <CardHeader className="bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900/80 dark:to-indigo-900/80">
                <CardTitle className="font-heading text-xl text-white" style={{ color: '#ffffff' }}>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-2 border-blue-500 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:border-l-4 hover:border-l-white hover:ml-1 transform hover:scale-105 transition-all duration-300 bg-transparent rounded-lg shadow-md shadow-gray-400/50"
                  >
                    <a
                      href="https://www.linkedin.com/in/viraj-weerathunga-b5a9a6322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-2 border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-l-4 hover:border-l-white hover:ml-1 transform hover:scale-105 transition-all duration-300 bg-transparent rounded-lg shadow-md shadow-gray-400/50"
                  >
                    <a
                      href="https://github.com/VirajKosala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card 
            className="backdrop-blur-sm border border-blue-200/50 dark:border-green-500/50 hover:border-blue-300/70 dark:hover:border-green-600/70 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
            style={{
              backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <CardHeader className="bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-900/80 dark:to-emerald-900/80">
              <CardTitle className="font-heading text-xl text-white" style={{ color: '#ffffff' }}>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-green-200 focus:border-green-400 transition-colors placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-green-200 focus:border-green-400 transition-colors placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-2 border-green-200 focus:border-green-400 transition-colors placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="border-2 border-orange-200">
          <DialogHeader>
            <DialogTitle className="text-orange-700">Confirm Message Submission</DialogTitle>
            <DialogDescription>Are you sure you want to send this message to Viraj Kosala?</DialogDescription>
          </DialogHeader>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg space-y-2">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              Confirm & Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="border-2 border-green-200">
          <DialogHeader>
            <DialogTitle className="text-green-700 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription>
              Thank you for reaching out! Your message has been sent successfully. Viraj will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Great!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
