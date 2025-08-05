import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {
    //to refresh form after message is sent:
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    //for sending data through actual gmail:    
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!") 
                setFormData({name: "", email: "", message: ""})
            }
        )
        .catch(() => alert("Something went wrong. Please try again."))
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            {/*<RevealOnScroll>*/}
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 
                            bg-clip-text text-transparent text-center">
                        Let's Work Together
                    </h2>
                    <p className="text-gray-300 mb-6">
                        I'm open to freelance opportunities, collaborations, and internships.<br/>
                        If you like what you see, reach out - I’d love to hear from you.
                    </p>                    
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a
                        href="https://github.com/IFatima163"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition"
                    >
                        <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" className="w-5 h-5" />
                        GitHub
                    </a>
                    <a
                        href="www.linkedin.com/in/inayat-fatima-qureshi-87b1bb227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition"
                    >
                        <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn" className="w-5 h-5" />
                        LinkedIn
                    </a>
                    <a
                        href="https://itch.io/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition"
                    >
                        <img src={`${import.meta.env.BASE_URL}itch.png`} alt="Itch.io" className="w-5 h-5" />
                        Itch.io
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition"
                    >
                        <span>📄</span>
                        View Resume
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}resume.pdf`}
                        download
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl hover:bg-white/10 transition"
                    >
                        <span>⬇️</span>
                        Download Resume
                    </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                    Prefer to talk directly? Call or message me at <span className="text-white">+60 10 202 6820</span>
                    </p>
                    <h4 className="text-xl font-bold mb-4 mt-8">
                        Let's Talk
                    </h4>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required value={formData.name} className="w-full 
                                    bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                                    focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Name" 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full 
                                    bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                                    focus:border-blue-500 focus:bg-blue-500/5" placeholder="emailaddress@gmail.com" 
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" required value={formData.message} className="w-full 
                                    bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                                    focus:border-blue-500 focus:bg-blue-500/5" placeholder="<Your Message Here/>" 
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                        </div>
                        <button type="submit" className="text-base bg-gradient-to-r from-purple-500 to-blue-400 text-white py-3 px-6 
                                rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            {/*</RevealOnScroll>*/}
        </section>
    )
}