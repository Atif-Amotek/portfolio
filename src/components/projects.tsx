'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    title: 'GoldenCars',
    description:
      'A modern management system for a car dealership. Viewing customers and drafting invoices and workorders.',
    image: '/goldencars.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    title: 'AutoBill SaaS',
    description:
      'A SaaS application for managing a Dealerships. Create invoices and workorders for customers using your own existing invoices and workorders.',
    image: '/autobill.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://autobill.be',
  },
  {
    title: 'ZeroRent Portal',
    description:
      'A portal for managing customers, loans and their payments. The portal is used by the customers to view their progress on the loan and the admin dashboard is used by the dealership to manage the customers and loans.',
    image: '/zerorent.png',
    technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
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
                    {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                    )}
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