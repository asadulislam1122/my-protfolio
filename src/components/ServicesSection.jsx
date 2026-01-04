const ServicesSection = () => {
  const services = [
    {
      icon: "web",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
      price: "Starting at $2,500"
    },
    {
      icon: "smartphone",
      title: "Mobile-First Design",
      description: "Mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
      features: ["Progressive Web Apps", "Touch Interactions", "Offline Support", "App-like Experience"],
      price: "Starting at $1,800"
    },
    {
      icon: "palette",
      title: "UI/UX Design",
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive functionality.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,200"
    },
    {
      icon: "speed",
      title: "Performance Optimization",
      description: "Speed up your existing website with advanced optimization techniques and best practices.",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Caching Strategies"],
      price: "Starting at $800"
    },
    {
      icon: "support_agent",
      title: "Consultation & Support",
      description: "Technical guidance, code reviews, and ongoing support for your development projects.",
      features: ["Code Review", "Architecture Planning", "Best Practices", "Ongoing Support"],
      price: "Starting at $150/hour"
    },
    {
      icon: "integration_instructions",
      title: "API Integration",
      description: "Seamless integration with third-party services, databases, and external APIs.",
      features: ["REST APIs", "GraphQL", "Database Design", "Authentication"],
      price: "Starting at $1,000"
    }
  ]

  const handleGetQuote = (service) => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      const navHeight = 80
      const elementPosition = contactSection.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    console.log(`Get quote for: ${service.title}`)
  }

  return (
    <section id="services" className="relative min-h-screen w-full overflow-x-hidden py-16">
      <div className="absolute top-0 left-0 -mt-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 -mr-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <main className="flex-1 flex flex-col px-6 gap-10 z-10 relative max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-6 w-1 bg-gradient-to-b from-primary to-purple-400 rounded-full"></span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">Services</h2>
            <span className="h-6 w-1 bg-gradient-to-b from-purple-400 to-primary rounded-full"></span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            How I can help bring your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">vision</span> to life
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
            Comprehensive web development services tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {service.price}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    What's included:
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => handleGetQuote(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary text-gray-700 dark:text-gray-300 rounded-xl transition-all group-hover:bg-primary group-hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">request_quote</span>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => handleGetQuote({ title: 'Custom Project' })}
            className="group flex items-center gap-3 mx-auto px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <span className="material-symbols-outlined">chat</span>
            <span className="font-medium">Let's Talk About Your Project</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </main>
    </section>
  )
}

export default ServicesSection