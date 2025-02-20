'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description:
      'An analytics dashboard that uses machine learning to provide insights and predictions based on user data. Features interactive visualizations and automated reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="bg-neutral-50 py-32 dark:bg-neutral-800" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-16 text-center font-pixel text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
            Featured Projects
          </h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="group relative grid gap-8 lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-xl bg-neutral-100 shadow-lg transition-transform duration-300 group-hover:scale-[1.02] dark:bg-neutral-700 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 font-pixel text-xl font-bold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-neutral-600 dark:text-neutral-300">{project.description}</p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900/50 dark:text-red-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}