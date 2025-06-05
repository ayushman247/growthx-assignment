import React, { useState } from "react"
import { motion } from "framer-motion"
import { ReactComponent as StarBust } from './assets/starburst-four-point-icon.svg'
import AnimatedTriangular from "./components/Triangle"

export default function Animation() {
   const [isAnimating, setIsAnimating] = useState(false)
  const [key, setKey] = useState(0)

  const triggerAnimation = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setKey((prev) => prev + 1)
      setIsAnimating(true)
    }, 100)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-6">
      <motion.button
        onClick={triggerAnimation}
        className="absolute bottom-10 z-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Play Animation</span>
      </motion.button>
      {isAnimating && (
      <motion.div
      key={key}
        initial={{ y: 0 }}
        animate={{ y: [0, -50, -50] }}
        transition={{
          delay: 1.8,
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center space-y-6"
      >
        <motion.div
          initial={{ x: -100, y: -100, scale: 0.1, rotate: 0, opacity: 0 }}
          animate={{
            x: [-100, 0, 0],
            y: [-100, 20, 20],
            scale: [0.5, 1.5, 1.5, 1.5],
            rotate: [0, 180, 180],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            times: [0, 0.6, 0.7, 1],
            repeatType: "loop",
          }}
          className="w-24 h-24 text-white flex justify-center"
        >
          <StarBust fill="currentColor" />
        </motion.div>

        <div className="flex justify-center">
          <AnimatedTriangular isAnimating={isAnimating}/>
        </div>

        <motion.div
          className="font-comfortaa text-white text-[80px] font-bold tracking-[0.5em] uppercase text-center transform -translate-x-[0.25em] ml-[70px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            delay:2,
            duration: 1.7,
            ease: "easeInOut",
            times: [0, 0.1, 0.8, 1],
            repeatType: "loop",
          }}
        >
          ELEVATE
        </motion.div>
      </motion.div>
       )}
    </div>
  )
}
