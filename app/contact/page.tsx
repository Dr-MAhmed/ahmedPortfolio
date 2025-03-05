"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  // 🟢 State for Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 30,
      opacity: 10,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        formRef.current,
        {
          x: -50,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        infoRef.current,
        {
          x: 50,
          opacity: 10,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8",
      )
  }, [])

  // 🟢 Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // 🟢 Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    // ✅ WhatsApp API Link
    const whatsappNumber = "923137751829" // ✅ Apna WhatsApp Number Yahan Dalain
    const whatsappMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // ✅ Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message" rows={6} value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Send className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>
        </form>

        <div ref={infoRef} className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you have any questions or want to work together. I'm always open to discussing
              new projects and opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">ahmedhc.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+92 (313) 775-1829</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
