import { useRef, useEffect, useState } from 'react'

const ContactSection = () => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Validate required fields
    if (!name || !email || !subject || !message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:asadulislam0288@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from MD Asadullah Portfolio Contact Form`
    )}`

    try {
      // Open default email client
      window.location.href = mailtoLink
      
      // Show success message
      setSubmitStatus('success')
      e.target.reset()
      setTimeout(() => setSubmitStatus(''), 8000) // Longer timeout for user to see message
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSocialClick = (platform) => {
    switch (platform) {
      case 'Email':
        window.location.href = 'mailto:asadulislam0288@gmail.com'
        break
      case 'Phone':
        window.location.href = 'tel:+8801327822021'
        break
      case 'WhatsApp':
        window.open('https://wa.me/8801327822021', '_blank')
        break
      case 'LinkedIn':
        window.open('https://linkedin.com/in/your-profile', '_blank')
        break
      case 'GitHub':
        window.open('https://github.com/your-username', '_blank')
        break
      default:
        console.log(`${platform} clicked`)
    }
  }

  const socialIcons = [
    { platform: 'Email', icon: 'alternate_email' },
    { platform: 'Phone', icon: 'call' },
    { platform: 'WhatsApp', icon: 'chat' },
    { platform: 'LinkedIn', icon: 'work' },
    { platform: 'GitHub', icon: 'code' }
  ]

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full overflow-x-hidden py-16"
      ref={ref}
    >
      <div 
        className="absolute top-0 left-0 -mt-20 -ml-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
      ></div>
      <div 
        className="absolute bottom-40 right-0 -mr-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      ></div>

      <main className="flex-1 flex flex-col px-6 gap-10 z-10 relative">
        <div 
          className="text-center space-y-4"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none'
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span 
              className="h-6 w-1 bg-gradient-to-b from-primary to-purple-400 rounded-full animate-expand-height"
              style={{ 
                animationDelay: isVisible ? '0.3s' : '0s',
                animationFillMode: 'both'
              }}
            ></span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">Get In Touch</h2>
            <span 
              className="h-6 w-1 bg-gradient-to-b from-purple-400 to-primary rounded-full animate-expand-height"
              style={{ 
                animationDelay: isVisible ? '0.5s' : '0s',
                animationFillMode: 'both'
              }}
            ></span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Let's create something <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"
              style={{ 
                animation: isVisible ? 'fadeIn 0.8s ease-out 0.6s both' : 'none'
              }}
            >
              amazing
            </span> together
          </h1>
          <p 
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto"
            style={{ 
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none'
            }}
          >
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        {/* Direct Contact Information */}
        <div 
          className="max-w-4xl mx-auto w-full"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <div className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">alternate_email</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">Email</h3>
                  <a 
                    href="mailto:asadulislam0288@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    asadulislam0288@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">Phone</h3>
                  <a 
                    href="tel:+8801327822021"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    +880 1327 822021
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">WhatsApp</h3>
                  <a 
                    href="https://wa.me/8801327822021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    +880 1327 822021
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="max-w-2xl mx-auto w-full space-y-8"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none'
          }}
        >
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span className="font-medium">Email client opened! Please send the message from your email app.</span>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">error</span>
                <span className="font-medium">Please fill in all fields or email me directly at asadulislam0288@gmail.com</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' }
              ].map((field, index) => (
                <div 
                  key={field.id}
                  className="space-y-2"
                  style={{ 
                    animation: isVisible ? `fadeInUp 0.4s ease-out ${0.8 + index * 0.1}s both` : 'none'
                  }}
                >
                  <label htmlFor={field.id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-102 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
            
            <div 
              className="space-y-2"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.4s ease-out 1.0s both' : 'none'
              }}
            >
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-102 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="What's this about?"
              />
            </div>
            
            <div 
              className="space-y-2"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.4s ease-out 1.1s both' : 'none'
              }}
            >
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:scale-102 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-[0_10px_20px_-10px_rgba(55,19,236,0.5)] hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 hover:scale-102 active:scale-98 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.4s ease-out 1.2s both' : 'none'
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">
                    progress_activity
                  </span>
                  Sending...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-pulse">
                    send
                  </span>
                  Send Message
                </>
              )}
            </button>
          </form>

          <div 
            className="text-center space-y-6"
            style={{ 
              animation: isVisible ? 'fadeInUp 0.6s ease-out 1.0s both' : 'none'
            }}
          >
            <div className="flex items-center gap-4 justify-center">
              <div 
                className="h-px bg-gray-200 dark:bg-white/10 flex-1 animate-expand-width"
                style={{ 
                  animationDelay: isVisible ? '1.0s' : '0s',
                  animationFillMode: 'both'
                }}
              ></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Quick contact options</span>
              <div 
                className="h-px bg-gray-200 dark:bg-white/10 flex-1 animate-expand-width"
                style={{ 
                  animationDelay: isVisible ? '1.2s' : '0s',
                  animationFillMode: 'both'
                }}
              ></div>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              {socialIcons.map((social, index) => (
                <button
                  key={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                  aria-label={social.platform}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-90"
                  style={{ 
                    animation: isVisible ? `fadeInScale 0.4s ease-out ${1.4 + index * 0.1}s both` : 'none'
                  }}
                >
                  <span 
                    className="material-symbols-outlined text-[20px] animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {social.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="text-center pt-8 border-t border-gray-200 dark:border-white/10"
          style={{ 
            animation: isVisible ? 'fadeIn 0.6s ease-out 1.5s both' : 'none'
          }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 MD Asadullah. Built with React & Tailwind CSS
          </p>
        </div>
      </main>
    </section>
  )
}

export default ContactSection