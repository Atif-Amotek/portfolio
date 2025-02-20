export const Footer = () => {
    return (
      <footer className="bg-white py-8 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} Atif Khalil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }