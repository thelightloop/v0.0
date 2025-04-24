"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  const userName = "thelightloop";
  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: `https://github.com/${userName}` },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: `https://www.linkedin.com/in/${userName}` },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: `https://twitter.com/${userName}` },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: `https://facebook.com/${userName}` },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: `https://instagram.com/${userName}` },
  ];


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <motion.div className="flex gap-2" variants={container} initial="hidden" animate="visible">
      {socialLinks.map((link, index) => (
        <motion.div key={index} variants={item}>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {link.icon}
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
