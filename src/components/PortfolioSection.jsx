const PortfolioSection = () => {
  const projects = [
    {
      title: "ClubSphere App",
      description: "A comprehensive club management platform with member tracking, event scheduling, and community features",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://i.ibb.co.com/0pXH7fBX/Screenshot-43.png",
      status: "Live",
      liveUrl: "https://clubsphere-app.netlify.app/"
    },
    {
      title: "TradeFlow App",
      description: "Modern trading platform with real-time data, portfolio management, and advanced analytics dashboard",
      tech: ["React", "TypeScript", "Firebase", "Chart.js"],
      image: "https://i.ibb.co.com/DfVY22rj/Screenshot-44.png",
      status: "Live",
      liveUrl: "https://tradeflow-app.pages.dev/"
    },
    {
      title: "Zip Shift",
      description: "Fast and secure file transfer application with drag-and-drop functionality and real-time progress tracking",
      tech: ["React", "Firebase", "Material-UI", "WebRTC"],
      image: "https://i.ibb.co.com/Dg6GW9XT/zap.png",
      status: "Live",
      liveUrl: "https://zip-shift-e182c.web.app/"
    }
  ]

  const handleViewProject = (project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank')
    }
  }

  return (
    <section id="portfolio" className="relative min-h-screen w-full overflow-x-hidden py-16">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 -ml-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <main className="flex-1 flex flex-col px-6 gap-10 z-10 relative max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-6 w-1 bg-gradient-to-b from-primary to-purple-400 rounded-full"></span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">My Work</h2>
            <span className="h-6 w-1 bg-gradient-to-b from-purple-400 to-primary rounded-full"></span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Projects that showcase my <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">expertise</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
            A collection of recent projects that demonstrate my skills in modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleViewProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-700 dark:text-gray-300 rounded-xl transition-all group-hover:bg-primary group-hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  View Live Site
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button className="group flex items-center gap-3 mx-auto px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-primary hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-primary">folder_open</span>
            <span className="font-medium text-gray-700 dark:text-gray-300">View All Projects</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </main>
    </section>
  )
}

export default PortfolioSection