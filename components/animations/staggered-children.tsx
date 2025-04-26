"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type StaggeredChildrenProps = {
  children: React.ReactNode
  className?: string
  baseDelay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  containerAnimation?: boolean
}

export default function StaggeredChildren({
  children,
  className = "",
  baseDelay = 0,
  staggerDelay = 0.1,
  direction = "up",
  distance = 20,
  once = true,
  containerAnimation = false,
}: StaggeredChildrenProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  const getDirectionalValues = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
      case "none":
        return { x: 0, y: 0 }
      default:
        return { x: 0, y: distance }
    }
  }

  const { x, y } = getDirectionalValues()

  const containerVariants = {
    hidden: { opacity: containerAnimation ? 0 : 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: baseDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Clone children and wrap each with motion.div
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return (
        <motion.div key={index} variants={itemVariants} className="w-full">
          {child}
        </motion.div>
      )
    }
    return child
  })

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {staggeredChildren}
    </motion.div>
  )
}
