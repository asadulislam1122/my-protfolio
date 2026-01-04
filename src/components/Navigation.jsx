import { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'portfolio', 'services', 'contact']
      const scrollPosition = window.scrollY + 100
      
      // Update scrolled state for navigation background
      setScrolled(window.scrollY > 50)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav 
      className={`sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-white/5 transition-all duration-300 ${
        scrolled 
          ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-lg' 
          : 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md'
      }`}
      style={{ 
        animation: 'slideDown 0.6s ease-out',
      }}
    >
      <div className="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:py-6">
        <div 
          className="flex items-center gap-2"
          style={{ 
            animation: 'fadeInLeft 0.6s ease-out 0.2s both',
          }}
        >
          <img 
            src="https://img.icons8.com/nolan/64/buysellads.png"
            alt="MD Asadullah Logo"
            className="w-8 h-8 transition-transform duration-300 hover:rotate-180"
          />
        </div>
        
        <div 
          className="no-scrollbar -mx-6 flex items-center gap-2 overflow-x-auto px-6 md:mx-0 md:px-0"
          style={{ 
            animation: 'fadeInRight 0.6s ease-out 0.4s both',
          }}
        >
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeSection === item.id
                  ? 'bg-primary/10 font-bold text-primary hover:bg-primary/20'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white'
              }`}
              style={{
                animation: `fadeInUp 0.4s ease-out ${0.1 * index}s both`
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation