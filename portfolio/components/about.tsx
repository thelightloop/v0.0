"use client"

import { motion } from "framer-motion"
import { Code2, Database, Server } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skills = [
    { name: ".NET Core", icon: <Server className="w-5 h-5" /> },
    { name: "C#", icon: <Code2 className="w-5 h-5" /> },
    { name: "ASP.NET MVC", icon: <Code2 className="w-5 h-5" /> },
    { name: "Entity Framework", icon: <Database className="w-5 h-5" /> },
    { name: "SQL Server", icon: <Database className="w-5 h-5" /> },
    { name: "Azure", icon: <Server className="w-5 h-5" /> },
    { name: "RESTful APIs", icon: <Code2 className="w-5 h-5" /> },
    { name: "Flutter", icon: <Code2 className="w-5 h-5" /> },
    { name: "Microservices", icon: <Server className="w-5 h-5" /> },
    { name: "DevOps", icon: <Server className="w-5 h-5" /> },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I'm a passionate .NET Developer currently working at Himalayan Everest Insurance, with previous experience
            at Aqore Software, Pana Tech, and Ekbana. I specialize in building robust enterprise applications and
            innovative solutions using the latest Microsoft technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="text-2xl font-bold text-center mb-8"
          >
            Technical Skills
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-2 text-blue-600">{skill.icon}</div>
                <p className="font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
