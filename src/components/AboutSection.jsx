import { useRef, useEffect, useState } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const techStack = [
    { name: 'React', icon: 'code' },
    { name: 'MongoDB', icon: 'storage' },
    { name: 'Tailwind', icon: 'style' },
    { name: 'HTML5', icon: 'html' },
    { name: 'Vite', icon: 'bolt' },
    { name: 'Git', icon: 'terminal' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const handleWorkTogether = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      const navHeight = 80
      const elementPosition = contactSection.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleAllSkills = () => {
    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      const navHeight = 80
      const elementPosition = skillsSection.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full overflow-x-hidden py-16"
      ref={ref}
    >
      <main className="flex-1 flex flex-col px-6 gap-8 z-10 relative">
        <div 
          className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        ></div>
        
        <div className={`relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="flex flex-col gap-6">
            <div 
              className="space-y-3 pr-8"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
              }}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="h-0.5 bg-primary rounded-full animate-expand-width"
                  style={{ 
                    animationDelay: isVisible ? '0.3s' : '0s',
                    animationFillMode: 'both'
                  }}
                ></span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight leading-[1.15]">
                Driven by <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"
                  style={{ 
                    animation: isVisible ? 'fadeIn 0.8s ease-out 0.6s both' : 'none'
                  }}
                >
                  curiosity
                </span>, focused on impact.
              </h1>
            </div>
            <div 
              className="grid grid-cols-[auto_1fr] gap-5 mt-2 items-end"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
              }}
            >
              <div className="relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 ease-out animate-float"></div>
                <div className="relative h-32 w-28 rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl bg-gray-200 dark:bg-gray-800">
                  <img 
                    alt="Portrait of MD Asadullah, MERN Stack developer" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src="https://i.ibb.co.com/p6xVHDq6/e05fca6d-15af-4b6c-b0b9-b052dd9b1c29.jpg"
                  />
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  { value: "1+ Years", label: "Experience" },
                  { value: "10+", label: "Projects Done" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="flex flex-col justify-center p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                    style={{ 
                      animation: isVisible ? `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s both` : 'none'
                    }}
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div 
          className="space-y-4 relative"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
          }}
        >
          <div 
            className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-full opacity-30 animate-expand-height"
            style={{ 
              animationDelay: isVisible ? '0.8s' : '0s',
              animationFillMode: 'both'
            }}
          ></div>
          <div className="pl-5 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              My Story
            </h2>
            <div className="prose prose-sm dark:prose-invert leading-relaxed text-gray-600 dark:text-gray-400">
              <p style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s both' : 'none' }}>
                Hello! I'm MD Asadullah, a passionate MERN Stack developer with a background in graphic design. This unique blend allows me to bridge the gap between design and full-stack engineering, ensuring that applications not only function perfectly but deliver stunning user experiences.
              </p>
              <p style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 1.0s both' : 'none' }}>
                I specialize in building modern, scalable web applications using MongoDB, Express.js, React, and Node.js. I'm passionate about clean code, performance optimization, and creating intuitive interfaces that delight users across all devices.
              </p>
            </div>
          </div>
        </div>

        <div 
          className="space-y-5"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s both' : 'none'
          }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <button 
              onClick={handleAllSkills}
              className="text-xs text-primary font-medium hover:underline flex items-center hover:scale-105 active:scale-95 transition-all duration-200"
            >
              All Skills <span className="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                style={{ 
                  animation: isVisible ? `fadeInUp 0.4s ease-out ${1.0 + index * 0.1}s both` : 'none'
                }}
              >
                <span 
                  className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110 transition-transform animate-pulse-slow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech.icon}
                </span>
                <span className="font-medium text-sm text-gray-700 dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div 
        className="px-6 mt-8"
        style={{ 
          animation: isVisible ? 'fadeInUp 0.6s ease-out 1.2s both' : 'none'
        }}
      >
        <button 
          onClick={handleWorkTogether}
          className="w-full group flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(55,19,236,0.6)] hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 hover:scale-102 active:scale-98 transition-all duration-300"
        >
          <span>Let's Work Together</span>
          <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform animate-pulse">
            arrow_forward
          </span>
        </button>
      </div>
    </section>
  )
}

export default AboutSection