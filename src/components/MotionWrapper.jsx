import { motion } from 'framer-motion'

// Animation variants
export const fadeInUp = {
  hidden: { 
    y: 60, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const fadeInLeft = {
  hidden: { 
    x: -60, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const fadeInRight = {
  hidden: { 
    x: 60, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const scaleIn = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Motion wrapper component
const MotionWrapper = ({ 
  children, 
  variant = fadeInUp, 
  className = "",
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variant}
      className={className}
      style={{ 
        ...variant.visible?.transition && { 
          transitionDelay: `${delay}s` 
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper