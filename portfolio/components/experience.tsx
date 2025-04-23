"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Himalayan Everest Insurance",
      position: ".NET Developer",
      period: "Current",
      description:
        "Developing and maintaining enterprise-level fintech applications. Leading the development of the Fintech app, implementing secure payment processing and financial reporting features.",
    },
    {
      company: "Aqore Software Pvt.",
      position: ".NET Developer",
      period: "Previous",
      description:
        "Worked on multiple client projects including KURA Education, Kura Tech, Kura Shop, Kura Blog, and Kura Society. Implemented robust backend systems and RESTful APIs.",
    },
    {
      company: "Pana Tech",
      position: "Software Developer",
      period: "Previous",
      description:
        "Developed mobile applications using Flutter. Led the development of Smart Pasal mobile app, implementing inventory management and point-of-sale features.",
    },
    {
      company: "Ekbana",
      position: "Junior Developer",
      period: "Previous",
      description:
        "Started career working on web applications using .NET framework. Contributed to various e-commerce and enterprise solutions.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">My professional journey in software development</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeIn}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2 pl-10 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10 transform md:translate-x-4">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                    <span>{exp.position}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
