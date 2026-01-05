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
                  alt="Portrait of Asadullah" 
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
                MERN Stack Developer (React) | Future Full-Stack Developer
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
              Hello! I'm MD Asadullah — a passionate MERN Stack Web Developer.
            </p>
            <p>
              I build modern, responsive, and user-friendly web applications using HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, MongoDB, and Firebase.
            </p>
            <p>
              With a background in graphic design, I bring strong UI/UX sense to every project, creating experiences that are both visually appealing and easy to use. I enjoy turning ideas into real-world digital products through clean code, performance optimization, and accessible design.
            </p>
            <p>
              I'm continuously learning and growing as a Full-Stack Developer, driven by hard work, consistency, and curiosity.
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary text-lg">🎯</span>
              <span><strong>My goal</strong> is to build impactful web applications, contribute to meaningful projects, and grow as a professional developer.</span>
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full"></span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">Education</h2>
            </div>
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase border border-gray-200 dark:border-white/10 px-2 py-1 rounded-md">
              Academic Background
            </span>
          </div>
          
          <div className="space-y-4">
            {/* Polytechnic Institute */}
            <div className="group bg-white dark:bg-surface-dark rounded-xl p-5 border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">apartment</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base">Diploma in Computer Science</h3>
                      <p className="text-sm text-primary font-medium">Thakurgoan Polytechnic Institute</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md block mb-1">
                        2022 - 2023
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                        7th Semester
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Currently pursuing Diploma in Computer Science with focus on software development, programming fundamentals, and modern web technologies. Gaining hands-on experience in various programming languages and development frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">
                      Computer Science
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md">
                      Programming
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md">
                      Software Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Hero Course */}
            <div className="group bg-white dark:bg-surface-dark rounded-xl p-5 border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base">Complete Web Development Course</h3>
                      <p className="text-sm text-primary font-medium">Programming Hero Bangladesh</p>
                    </div>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-md">
                      Top Course
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Completed comprehensive web development training from Bangladesh's leading programming education platform. Mastered modern web technologies including React, JavaScript, Node.js, and full-stack development practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">
                      React.js
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-md">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md">
                      Full-Stack
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills & Certifications */}
            <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10 rounded-xl p-4 border border-primary/20 dark:border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Technical Expertise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Frontend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">React & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">MongoDB Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Responsive Design</span>
                </div>
              </div>
            </div>
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