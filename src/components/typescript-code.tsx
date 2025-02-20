'use client'

import { motion } from 'framer-motion'

export function TypescriptCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute -right-4 top-1/3 hidden -translate-y-1/2 transform lg:block"
    >
      <pre className="rounded-lg bg-gray-900 p-4 text-sm">
        <code>
          <span className="text-blue-400">interface</span>{' '}
          <span className="text-green-400">Developer</span>{' '}
          <span className="text-gray-400">{'{'}</span>
          {'\n  '}
          <span className="text-purple-400">name</span>:{' '}
          <span className="text-blue-400">string</span>
          <span className="text-gray-400">;</span>
          {'\n  '}
          <span className="text-purple-400">role</span>:{' '}
          <span className="text-orange-300">"Full Stack Developer"</span>
          <span className="text-gray-400">;</span>
          {'\n  '}
          <span className="text-purple-400">skills</span>:{' '}
          <span className="text-blue-400">string</span>
          <span className="text-gray-400">[];</span>
          {'\n  '}
          <span className="text-purple-400">passion</span>:{' '}
          <span className="text-blue-400">string</span>
          <span className="text-gray-400">;</span>
          {'\n'}
          <span className="text-gray-400">{'}'}</span>
          {'\n\n'}
          <span className="text-blue-400">const</span>{' '}
          <span className="text-green-400">atif</span>:{' '}
          <span className="text-green-400">Developer</span>{' '}
          <span className="text-gray-400">= {'{'}</span>
          {'\n  '}
          <span className="text-purple-400">name</span>:{' '}
          <span className="text-orange-300">"Atif Khalil"</span>
          <span className="text-gray-400">,</span>
          {'\n  '}
          <span className="text-purple-400">role</span>:{' '}
          <span className="text-orange-300">"Full Stack Developer"</span>
          <span className="text-gray-400">,</span>
          {'\n  '}
          <span className="text-purple-400">skills</span>:{' '}
          <span className="text-gray-400">[</span>
          {'\n    '}
          <span className="text-orange-300">"TypeScript"</span>
          <span className="text-gray-400">,</span>
          {'\n    '}
          <span className="text-orange-300">"Next.js"</span>
          <span className="text-gray-400">,</span>
          {'\n    '}
          <span className="text-orange-300">"React"</span>
          <span className="text-gray-400">,</span>
          {'\n    '}
          <span className="text-orange-300">"Node.js"</span>
          <span className="text-gray-400">,</span>
          {'\n  '}
          <span className="text-gray-400">],</span>
          {'\n  '}
          <span className="text-purple-400">passion</span>:{' '}
          <span className="text-orange-300">"Building amazing web apps"</span>
          {'\n'}
          <span className="text-gray-400">{'};'}</span>
        </code>
      </pre>
    </motion.div>
  )
}