'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypescriptCode } from '@/components/typescript-code'

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-32 dark:from-neutral-900 dark:to-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 font-pixel text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
            >
              Full Stack Developer
              <span className="mt-2 block text-red-800 dark:text-red-500">Building Digital Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 text-lg text-neutral-600 dark:text-neutral-300"
            >
              Crafting modern web applications with TypeScript and Next.js
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-red-900 to-red-800 dark:from-red-800 dark:to-red-900"
            >
              <Image
                src="/profile.jpg"
                alt="Atif Khalil"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </motion.div>
            <TypescriptCode />
          </div>
        </div>
      </motion.div>
    </section>
  )
}