"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { SocialLinks } from "./social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">.NET Developer</h3>
            <p className="text-gray-400">Building robust enterprise solutions</p>
          </div>

          <div className="mb-6 md:mb-0">
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400"
          >
            © {currentYear} .NET Developer Portfolio. Made with <Heart className="inline-block w-4 h-4 text-red-500" />{" "}
            in Nepal
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
