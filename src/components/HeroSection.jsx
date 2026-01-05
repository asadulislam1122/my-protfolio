import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MotionWrapper, { fadeInLeft, fadeInRight, scaleIn, staggerContainer } from './MotionWrapper'

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
    switch (platform) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/md-asadullah-a62863396/', '_blank')
        break
      case 'GitHub':
        window.open('https://github.com/asadulislam1122', '_blank')
        break
      case 'Facebook':
        window.open('https://www.facebook.com/prince.asadul.426723', '_blank')
        break
      case 'Email':
        window.location.href = 'mailto:asadulislam0288@gmail.com'
        break
      default:
        console.log(`${platform} clicked`)
    }
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
          <MotionWrapper 
            variant={fadeInLeft}
            className="flex flex-col gap-5 max-w-lg z-20 order-2 md:order-1"
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-5xl font-extrabold tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Asadullah
                </motion.span>
              </motion.h1>
              <motion.h2 
                className="text-2xl font-bold text-primary dark:text-primary flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                MERN Stack Developer (React)
                <motion.span 
                  className="h-0.5 bg-primary rounded-full inline-block opacity-50"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                ></motion.span>
              </motion.h2>
            </div>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Skilled in HTML, CSS, Tailwind, JavaScript | Backend with Node.js, Firebase, MongoDB | Future Full-Stack Web Developer | Dedicated & Hardworking
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.button 
                onClick={handleContactClick}
                className="group flex h-14 items-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-[0_10px_20px_-10px_rgba(55,19,236,0.5)] hover:bg-primary/90 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="material-symbols-outlined text-[20px] animate-pulse">mail</span>
                Contact Me
              </motion.button>
              <motion.div 
                className="flex items-center gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  { platform: 'LinkedIn', icon: 'https://img.icons8.com/color/48/linkedin.png', type: 'image' },
                  { platform: 'GitHub', icon: 'https://img.icons8.com/color-glass/48/github--v1.png', type: 'image' },
                  { platform: 'Facebook', icon: 'https://img.icons8.com/color/48/facebook-new.png', type: 'image' }
                ].map((social, index) => (
                  <motion.button
                    key={social.platform}
                    onClick={() => handleSocialClick(social.platform)}
                    aria-label={social.platform}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-white hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-3"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.platform}
                      className="w-6 h-6 transition-all duration-300"
                    />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </MotionWrapper>
          
          <MotionWrapper
            variant={fadeInRight}
            className="relative flex items-center justify-center py-6 md:py-0 order-1 md:order-2"
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none animate-pulse-slow"
            ></div>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary to-[#6e50ff] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-45 opacity-20 scale-110"
                animate={{ 
                  rotate: [45, 50, 45],
                  scale: [1.1, 1.15, 1.1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-bl from-primary to-[#4c2cf1]"
                animate={{
                  borderRadius: [
                    "63% 37% 39% 61% / 52% 53% 47% 48%",
                    "50% 50% 50% 50% / 50% 50% 50% 50%",
                    "40% 60% 70% 30% / 60% 40% 60% 40%",
                    "63% 37% 39% 61% / 52% 53% 47% 48%"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute inset-2 overflow-hidden rounded-[60%_40%_40%_60%_/_50%_50%_50%_50%] border-4 border-background-light dark:border-background-dark shadow-2xl hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  alt="Portrait of Asadullah, MERN Stack Developer" 
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" 
                  src="https://i.ibb.co.com/p6xVHDq6/e05fca6d-15af-4b6c-b0b9-b052dd9b1c29.jpg"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-background-light dark:bg-background-dark shadow-lg border border-gray-100 dark:border-white/10 hover:rotate-180 transition-transform duration-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ rotate: 180 }}
              >
                <span className="material-symbols-outlined text-primary text-3xl">code</span>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </main>
      
      <motion.div 
        className="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        style={{ 
          opacity: Math.max(0, 0.6 - scrollY / 200)
        }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 dark:text-gray-400">Scroll Down</span>
        <motion.div 
          className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600 p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary mb-auto"></div>
        </motion.div>
      </motion.div>
      
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