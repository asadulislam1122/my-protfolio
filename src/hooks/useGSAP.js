import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export const useGSAP = (animationFunction, dependencies = []) => {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      animationFunction(element)
    }, element)

    return () => ctx.revert()
  }, dependencies)

  return ref
}

export const useScrollAnimation = (animationFunction, dependencies = []) => {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => animationFunction(element),
        once: true
      })
    }, element)

    return () => ctx.revert()
  }, dependencies)

  return ref
}

// Utility animations
export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay,
      ease: "power2.out" 
    }
  )
}

export const fadeInLeft = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      x: -50, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay,
      ease: "power2.out" 
    }
  )
}

export const fadeInRight = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      x: 50, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay,
      ease: "power2.out" 
    }
  )
}

export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      scale: 0.8, 
      opacity: 0 
    },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6, 
      delay,
      ease: "back.out(1.7)" 
    }
  )
}