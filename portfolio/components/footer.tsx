"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { SocialLinks } from "./social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="mt-4 pt-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400"
        >
          © {currentYear} – <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
            @thelightloop</span> <br />
          Keep building. Keep breaking. Keep becoming.
          <br />
          Crafted in Nepal{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
            alt="Nepal Flag"
            className="inline-block w-3 h-3 ml-1 align-text-center"
          />
        </motion.p>
      </div>
    </footer>
  )
}
