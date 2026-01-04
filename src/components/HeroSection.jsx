import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
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

  const handleSocialClick = (platform) => {
    console.log(`${platform} clicked`)
  }

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <main 
        className="flex flex-1 flex-col justify-center px-6 relative z-10 pb-12"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div 
            className="flex flex-col gap-5 max-w-lg z-20 order-2 md:order-1"
            style={{ animation: 'fadeInLeft 0.8s ease-out 0.2s both' }}
          >
            <div className="space-y-2">
              <h1 
                className="text-5xl font-extrabold tracking-tight leading-[1.1]"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
              >
                Hi, I'm <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                  style={{ animation: 'fadeIn 0.8s ease-out 0.8s both' }}
                >
                  MD Asadullah
                </span>
              </h1>
              <h2 
                className="text-2xl font-bold text-primary dark:text-primary flex items-center gap-2"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
              >
                Frontend Developer
                <span 
                  className="h-0.5 bg-primary rounded-full inline-block opacity-50 animate-expand-width"
                  style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
                ></span>
              </h2>
            </div>
            <p 
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.8s both' }}
            >
              I build accessible, pixel-perfect, and performant web experiences that look great on any device.
            </p>
            <div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              style={{ animation: 'fadeInUp 0.6s ease-out 1.0s both' }}
            >
              <button 
                onClick={handleContactClick}
                className="group flex h-14 items-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-[0_10px_20px_-10px_rgba(55,19,236,0.5)] hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px] animate-pulse">mail</span>
                Contact Me
              </button>
              <div className="flex items-center gap-4">
                {[
                  { platform: 'LinkedIn', icon: 'work' },
                  { platform: 'Dribbble', icon: 'palette' },
                  { platform: 'Email', icon: 'alternate_email' }
                ].map((social, index) => (
                  <button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform)}
                    aria-label={social.platform}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3"
                    style={{ 
                      animation: `fadeInScale 0.4s ease-out ${1.4 + index * 0.1}s both` 
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="relative flex items-center justify-center py-6 md:py-0 order-1 md:order-2"
            style={{ animation: 'fadeInRight 0.8s ease-out 0.4s both' }}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none animate-pulse-slow"
            ></div>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-primary to-[#6e50ff] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-45 opacity-20 scale-110 animate-float"
              ></div>
              <div 
                className="absolute inset-0 bg-gradient-to-bl from-primary to-[#4c2cf1] animate-morph"
              ></div>
              <div 
                className="absolute inset-2 overflow-hidden rounded-[60%_40%_40%_60%_/_50%_50%_50%_50%] border-4 border-background-light dark:border-background-dark shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <img 
                  alt="Portrait of MD Asadullah, frontend developer" 
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" 
                  src="https://i.ibb.co.com/p6xVHDq6/e05fca6d-15af-4b6c-b0b9-b052dd9b1c29.jpg"
                />
              </div>
              <div 
                className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-background-light dark:bg-background-dark shadow-lg border border-gray-100 dark:border-white/10 hover:rotate-180 transition-transform duration-500"
                style={{ animation: 'fadeInScale 0.6s ease-out 1.6s both' }}
              >
                <span className="material-symbols-outlined text-primary text-3xl">code</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div 
        className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center gap-2"
        style={{ 
          animation: 'fadeInUp 0.6s ease-out 2s both',
          opacity: Math.max(0, 0.6 - scrollY / 200)
        }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 dark:text-gray-400">Scroll Down</span>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600 p-1 animate-bounce">
          <div className="h-1.5 w-1.5 rounded-full bg-primary mb-auto"></div>
        </div>
      </div>
      
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(#3713ec 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>
    </section>
  )
}

export default HeroSection