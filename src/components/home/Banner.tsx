"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// animation configurations
const ANIMATION_CONFIG = {
  stars: { count: 120, twinkleSpeed: 2 },
  clouds: { count: 6, driftSpeed: 30 },
  planes: { count: 2, flySpeed: 25 },
  shootingStars: { interval: 12000 },
  transition: { duration: 2.5 },
}

export default function Banner() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setIsTransitioning(true)
      const timer = setTimeout(() => setIsTransitioning(false), ANIMATION_CONFIG.transition.duration * 1000)
      return () => clearTimeout(timer)
    }
  }, [isDark, mounted])

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/arifmiah07" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/in/arifmiah07" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com/arifmiah01" },
  ]

  // generate stars for night sky
  const generateStars = () => {
    return Array.from({ length: ANIMATION_CONFIG.stars.count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      twinkleDelay: Math.random() * 3,
      brightness: Math.random() * 0.8 + 0.2,
    }))
  }

  // generate clouds for day sky
  const generateClouds = () => {
    return Array.from({ length: ANIMATION_CONFIG.clouds.count }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 20,
      y: Math.random() * 60 + 10,
      size: Math.random() * 40 + 20,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.3,
    }))
  }

  const [stars] = useState(generateStars)
  const [clouds] = useState(generateClouds)

  if (!mounted) {
    return (
      <section className="py-10 md:py-16">
        <div className="rounded-xl bg-muted/50 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Currently Available for <span className="text-primary">Team Projects</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                I specialize in building modern web applications using React, Next.js, and TypeScript, Node.js, Express
                js and MongoDb. Let&apos;s collaborate on your next project and bring your ideas to life.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md border border-muted-foreground/20 bg-background px-4 py-2 hover:bg-muted/50 transition-colors"
                >
                  See my work <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-sm text-muted-foreground">Latest update</p>
                <p className="mt-1">
                  Currently working on{" "}
                  <a
                    href="https://github.com/arifmiah07/vibe-chat"
                    target="_blank"
                    className="text-primary hover:underline"
                    rel="noreferrer"
                  >
                    Vibe Chat - Realtime chat Application.
                  </a>
                </p>
                <p className="">
                  Tech stack:{" "}
                  <span className="text-green-500"> Socket.io, Mongoose, Express, TypeScript, Next.js, Redux</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="p-3 lg:px-10 py-10  md:px-8 md:py-16 relative overflow-hidden">
      {/* animated background container */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {isDark ? (
            // 🌙 NIGHT SKY ANIMATION
            <motion.div
              key="night"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_CONFIG.transition.duration }}
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
            >
              {/* stars */}
              {stars.map((star) => (
                <motion.div
                  key={`star-${star.id}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                  animate={{
                    opacity: [star.brightness * 0.3, star.brightness, star.brightness * 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: ANIMATION_CONFIG.stars.twinkleSpeed + Math.random(),
                    delay: star.twinkleDelay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* moon */}
              <motion.div
                className="absolute w-16 h-16 bg-yellow-100 rounded-full shadow-lg"
                style={{ top: "15%", right: "10%" }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-50 blur-sm scale-110" />
              </motion.div>

              {/* shooting stars */}
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top: "20%", left: "-5%" }}
                animate={{
                  x: ["0vw", "110vw"],
                  y: ["0vh", "30vh"],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: ANIMATION_CONFIG.shootingStars.interval / 1000,
                  ease: "easeOut",
                }}
              >
                <div className="absolute inset-0 bg-white blur-sm scale-150" />
              </motion.div>

              {/* second shooting star */}
              <motion.div
                className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full"
                style={{ top: "40%", left: "-3%" }}
                animate={{
                  x: ["0vw", "100vw"],
                  y: ["0vh", "20vh"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: ANIMATION_CONFIG.shootingStars.interval / 1000 + 6,
                  ease: "easeOut",
                }}
              />

              {/* satellites */}
              <motion.div
                className="absolute w-2 h-1 bg-red-400 rounded-sm"
                style={{ top: "30%", left: "0%" }}
                animate={{
                  x: ["0vw", "100vw"],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* nebula effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ) : (
            // ☀️ DAY SKY ANIMATION
            <motion.div
              key="day"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_CONFIG.transition.duration }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-100"
            >
              {/* sun */}
              <motion.div
                className="absolute w-20 h-20 bg-yellow-400 rounded-full"
                style={{ top: "10%", right: "15%" }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-60 blur-md scale-125" />
                <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-40 blur-lg scale-150" />
              </motion.div>

              {/* sun rays */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute w-1 bg-yellow-300 opacity-40"
                  style={{
                    height: "30px",
                    top: "8%",
                    right: "17.5%",
                    transformOrigin: "50% 60px",
                    transform: `rotate(${i * 45}deg)`,
                  }}
                  animate={{
                    scaleY: [0.5, 1, 0.5],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* clouds */}
              {clouds.map((cloud) => (
                <motion.div
                  key={`cloud-${cloud.id}`}
                  className="absolute bg-white rounded-full opacity-80"
                  style={{
                    left: `${cloud.x}%`,
                    top: `${cloud.y}%`,
                    width: `${cloud.size}px`,
                    height: `${cloud.size * 0.6}px`,
                  }}
                  animate={{
                    x: [0, 50, 0],
                    opacity: [cloud.opacity, cloud.opacity + 0.2, cloud.opacity],
                  }}
                  transition={{
                    duration: ANIMATION_CONFIG.clouds.driftSpeed + cloud.speed * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute -left-2 top-1 w-6 h-4 bg-white rounded-full opacity-90" />
                  <div className="absolute -right-1 top-0 w-4 h-3 bg-white rounded-full opacity-80" />
                </motion.div>
              ))}

              {/* airplanes */}
              <motion.div
                className="absolute w-6 h-2 bg-gray-600"
                style={{ top: "25%", left: "-10%" }}
                animate={{
                  x: ["0vw", "110vw"],
                  y: [0, -20, 10, 0],
                }}
                transition={{
                  duration: ANIMATION_CONFIG.planes.flySpeed,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute -top-0.5 left-2 w-2 h-1 bg-gray-600 transform -rotate-45" />
                <div className="absolute -bottom-0.5 left-2 w-2 h-1 bg-gray-600 transform rotate-45" />
              </motion.div>

              {/* second airplane */}
              <motion.div
                className="absolute w-4 h-1 bg-gray-500"
                style={{ top: "60%", left: "-8%" }}
                animate={{
                  x: ["0vw", "108vw"],
                  y: [0, 15, -10, 0],
                }}
                transition={{
                  duration: ANIMATION_CONFIG.planes.flySpeed + 8,
                  delay: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* flying birds */}
              <motion.div
                className="absolute"
                style={{ top: "35%", left: "-5%" }}
                animate={{
                  x: ["0vw", "105vw"],
                  y: [0, -30, 20, -10, 0],
                }}
                transition={{
                  duration: 35,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-800 rounded-full transform rotate-45" />
                  <div className="w-1 h-1 bg-gray-800 rounded-full transform -rotate-45" />
                </div>
              </motion.div>

              {/* floating light particles */}
              {Array.from({ length: 15 }, (_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    delay: Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* transition effects */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {isDark ? (
                // sunset effect
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-500 via-pink-500 to-purple-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ duration: ANIMATION_CONFIG.transition.duration }}
                />
              ) : (
                // sunrise effect
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-yellow-400 via-orange-400 to-pink-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0] }}
                  transition={{ duration: ANIMATION_CONFIG.transition.duration }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* original content with enhanced backdrop */}
      <div className="relative z-10 rounded-xl bg-muted/50 backdrop-blur-sm p-6 md:p-10 border border-white/10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <motion.h2
              className="text-2xl font-bold md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Currently Available for <span className="text-primary">Team Projects</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I specialize in building modern web applications using React, Next.js, and TypeScript, Node.js, Express js
              and MongoDb. Let&apos;s collaborate on your next project and bring your ideas to life.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-muted-foreground/20 bg-background/80 backdrop-blur-sm px-4 py-2 hover:bg-muted/50 transition-colors shadow-md hover:shadow-lg"
              >
                See my work <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-sm text-muted-foreground">Latest update</p>
              <p className="mt-1">
                Currently working on{" "}
                <a
                  href="https://github.com/arifmiah07/vibe-chat"
                  target="_blank"
                  className="text-primary hover:underline font-medium"
                  rel="noreferrer"
                >
                  Vibe Chat - Realtime chat Application.
                </a>
              </p>
              <p className="">
                Tech stack:{" "}
                <span className="text-green-500 font-medium">
                  {" "}
                  Socket.io, Mongoose, Express, TypeScript, Next.js, Redux
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
