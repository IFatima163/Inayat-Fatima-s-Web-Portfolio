import { useState } from "react"
import { projects } from "./projectsData"
import ProjectCard from "./ProjectCard"

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4) // show first 4 projects

  const handleToggle = () => {
    if (visibleCount >= projects.length) {
      // Collapse back to 4 projects and scroll to top of section
      setVisibleCount(4)
      const section = document.getElementById("projects")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Load 4 more
      setVisibleCount(prev => prev + 4)
    }
  }

  const visibleProjects = projects.slice(0, visibleCount)
  const allLoaded = visibleCount >= projects.length

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 
          className="
            text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
            bg-clip-text text-transparent text-center
          "
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleToggle}
            className="
              bg-gradient-to-r from-purple-500 to-blue-400 text-white py-3 px-8 rounded-lg
              font-semibold transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5
            "
          >
            {allLoaded ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  )
}
