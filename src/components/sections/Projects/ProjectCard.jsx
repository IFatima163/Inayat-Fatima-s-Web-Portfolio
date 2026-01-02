import RevealOnScroll from "../../RevealOnScroll"

export default function ProjectCard({
  title,
  description,
  mediaType,
  mediaSrc,
  techStack = [],
  links = []
}) {
  return (
    <RevealOnScroll>
      <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col h-full">
        
        {/* Media Preview (video or image) */}
        {mediaType === "video" ? (
          <video 
            autoPlay loop muted playsInline preload="auto"
            className="rounded-lg mb-4 border border-purple-500/20 w-full h-48 md:h-64 lg:h-72 object-cover"
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={mediaSrc} 
            alt={`${title} Preview`} 
            className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg mb-4 border border-purple-500/20"
          />
        )}

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 grow">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, key) => (
            <span key={key} className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full 
                                      text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex justify-end gap-3">
          {links.map(({ href, label }, i) => (
            <a key={i} href={href} target="_blank"
              className="bg-linear-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded 
                         font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-0.5">
              {label}
            </a>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  )
}
