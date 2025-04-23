"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Fintech App",
      company: "Himalayan Everest Insurance",
      description:
        "A comprehensive financial technology application for insurance management, payment processing, and financial reporting.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "fintech"],
      technologies: [".NET Core", "C#", "SQL Server", "Azure"],
    },
    {
      id: 2,
      title: "Smart Pasal",
      company: "Pana Tech",
      description: "A mobile application for inventory management and point-of-sale operations for small businesses.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["mobile", "flutter"],
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 3,
      title: "KURA Education",
      company: "Aqore Software",
      description: "An educational platform for online learning, course management, and student progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "web"],
      technologies: [".NET Core", "C#", "Entity Framework", "SQL Server"],
    },
    {
      id: 4,
      title: "Kura Tech",
      company: "Aqore Software",
      description: "A technology news and information portal with content management system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "web"],
      technologies: [".NET Core", "C#", "JavaScript", "SQL Server"],
    },
    {
      id: 5,
      title: "Kura Shop",
      company: "Aqore Software",
      description: "An e-commerce platform with product management, shopping cart, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "web", "ecommerce"],
      technologies: [".NET Core", "C#", "Entity Framework", "SQL Server"],
    },
    {
      id: 6,
      title: "Kura Blog",
      company: "Aqore Software",
      description: "A blogging platform with content management, user authentication, and commenting system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "web"],
      technologies: [".NET Core", "C#", "JavaScript", "SQL Server"],
    },
    {
      id: 7,
      title: "Kura Society",
      company: "Aqore Software",
      description: "A social networking platform for communities with user profiles, groups, and messaging.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["dotnet", "web", "social"],
      technologies: [".NET Core", "C#", "SignalR", "SQL Server"],
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.tags.includes(activeTab))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">A showcase of my recent development work and projects</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="max-w-xl mx-auto mb-12"
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 md:grid-cols-7 w-full h-auto">
              <TabsTrigger value="all" className="py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="dotnet" className="py-2">
                .NET
              </TabsTrigger>
              <TabsTrigger value="web" className="py-2">
                Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="py-2">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="flutter" className="py-2">
                Flutter
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="py-2">
                E-commerce
              </TabsTrigger>
              <TabsTrigger value="fintech" className="py-2">
                Fintech
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeIn}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.company}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
