const AboutDetailSection = () => {
  const skills = [
    {
      name: 'React & Next.js',
      description: 'Advanced Proficiency',
      icon: 'code',
      percentage: 95,
      color: 'from-blue-500 to-primary'
    },
    {
      name: 'MongoDB',
      description: 'Database Management',
      icon: 'storage',
      percentage: 90,
      color: 'from-green-600 to-primary'
    },
    {
      name: 'Tailwind & CSS',
      description: 'Pixel Perfect Design',
      icon: 'style',
      percentage: 98,
      color: 'from-cyan-400 to-primary'
    }
  ]

  const additionalSkills = [
    { name: 'Git', description: 'Version Control', icon: 'terminal', color: 'orange' },
    { name: 'Vite', description: 'Build Tool', icon: 'bolt', color: 'purple' }
  ]

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

  const handleResumeClick = () => {
    console.log('Resume clicked')
  }

  return (
    <section id="skills" className="relative min-h-screen w-full overflow-x-hidden py-16">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 left-0 -ml-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between px-6 py-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 p-1">
            <img 
              src="https://img.icons8.com/nolan/64/buysellads.png"
              alt="MD Asadullah Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <button 
            onClick={handleResumeClick}
            className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-[16px]">download</span>
          </button>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-6 gap-10 z-10 relative">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-purple-400 rounded-full opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white dark:border-background-dark shadow-2xl">
                <img 
                  alt="Portrait of MD Asadullah" 
                  className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  src="https://i.ibb.co.com/p6xVHDq6/e05fca6d-15af-4b6c-b0b9-b052dd9b1c29.jpg"
                />
              </div>
              <div className="absolute bottom-1 right-1 bg-white dark:bg-gray-800 p-1.5 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm z-10">
                <span className="material-symbols-outlined text-primary text-[16px] block">verified</span>
              </div>
            </div>
            <div className="space-y-2 max-w-sm">
              <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
                Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">masterpieces</span> one pixel at a time.
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                Frontend Developer & UI Specialist
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-black text-primary">1+</span>
              <span className="text-xs uppercase text-gray-500 font-bold tracking-wider mt-1">Years Exp.</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-black text-purple-400">10+</span>
              <span className="text-xs uppercase text-gray-500 font-bold tracking-wider mt-1">Projects</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-6 w-1 bg-gradient-to-b from-primary to-purple-400 rounded-full"></span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">My Journey</h2>
          </div>
          <div className="prose prose-sm dark:prose-invert leading-relaxed text-gray-600 dark:text-gray-400 max-w-none">
            <p>
              Hello! I'm MD Asadullah. With a unique background in graphic design, I bridge the gap between pure aesthetics and engineering. I don't just build websites; I craft accessible, pixel-perfect experiences that feel alive.
            </p>
            <p>
              I'm deeply passionate about open source, performance optimization, and creating intuitive interfaces that genuinely delight users on any device.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">Technical Skills</h2>
            </div>
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase border border-gray-200 dark:border-white/10 px-2 py-1 rounded-md">
              Core Stack
            </span>
          </div>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{skill.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm">{skill.name}</h3>
                      <p className="text-xs text-gray-500">{skill.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary dark:text-white">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-surface-dark rounded-xl p-3 border border-gray-100 dark:border-white/5 shadow-sm flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                  <div className={`w-8 h-8 rounded-full bg-${skill.color}-50 dark:bg-${skill.color}-900/20 flex items-center justify-center text-${skill.color}-600 dark:text-${skill.color}-400 shrink-0`}>
                    <span className="material-symbols-outlined text-[18px]">{skill.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-[10px] text-gray-500">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="px-6 mt-8">
        <button 
          onClick={handleContactClick}
          className="w-full group flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-6 text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(55,19,236,0.6)] hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95"
        >
          <span>Contact Me</span>
          <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">send</span>
        </button>
      </div>
    </section>
  )
}

export default AboutDetailSection