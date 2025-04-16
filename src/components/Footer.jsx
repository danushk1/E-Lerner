import React from 'react';

// Assuming Shadcn UI components are installed
import { Button } from '@/components/ui/button'; // Shadcn UI Button component (for potential use)

function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid layout for the footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-bold text-orange-500">Elearnr</h1>
            <p className="mt-4 text-sm">
              Elearnr - Empowering knowledge through innovative online learning solutions. 
              Explore a world of education with expertly crafted courses, interactive tools, and a 
              seamless digital experience designed to inspire growth and mastery for learners everywhere.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Popup Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Web-design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Content
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Use Cases</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Web-designers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Marketers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Small Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Website Builder
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social Media Icons and Legal Links */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-teal-700 pt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon SVG */}
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* YouTube Icon SVG */}
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+94761252827?text=Hello%20Elearnr%20Team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* WhatsApp Icon SVG */}
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.14 1.536 5.894L0 24l6.305-1.536A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.497 17.618c-.72 2.027-2.246 3.54-4.32 4.03-1.197.284-2.45.24-3.677-.132-1.536-.465-2.99-1.37-4.14-2.52-1.15-1.15-2.055-2.604-2.52-4.14-.372-1.227-.416-2.48-.132-3.677.49-2.074 2.003-3.6 4.03-4.32.36-.128.74-.192 1.122-.192.382 0 .762.064 1.122.192.72.256 1.344.704 1.824 1.344.48.64.768 1.408.832 2.208.064.8-.064 1.6-.384 2.304-.32.704-.832 1.344-1.472 1.824-.64.48-1.408.768-2.208.832-.8.064-1.6-.064-2.304-.384-.704-.32-1.344-.832-1.824-1.472-.48-.64-.768-1.408-.832-2.208-.064-.8.064-1.6.384-2.304.32-.704.832-1.344 1.472-1.824.64-.48 1.408-.768 2.208-.832.8-.064 1.6.064 2.304.384.704.32 1.344.832 1.824 1.472.48.64.768 1.408.832 2.208.064.8-.064 1.6-.384 2.304z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn Icon SVG */}
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9.03h3.56v11.422zM5.34 7.53c-1.14 0-2.06-.92-2.06-2.06 0-1.138.92-2.06 2.06-2.06 1.138 0 2.06.922 2.06 2.06 0 1.14-.922 2.06-2.06 2.06zm15.12 12.922h-3.56v-5.604c0-1.338-.026-3.06-1.866-3.06-1.866 0-2.152 1.458-2.152 2.966v5.698h-3.56V9.03h3.416v1.56h.05c.476-.9 1.636-1.848 3.366-1.848 3.598 0 4.262 2.368 4.262 5.448v6.262z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors" aria-label="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* TikTok Icon SVG */}
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.896 7.614c-.72-.048-1.392-.216-2.016-.48v6.84c0 2.82-2.298 5.118-5.118 5.118-2.82 0-5.118-2.298-5.118-5.118 0-2.82 2.298-5.118 5.118-5.118.312 0 .618.03.918.084V7.5c-.3-.054-.606-.084-.918-.084-3.528 0-6.396 2.868-6.396 6.396s2.868 6.396 6.396 6.396 6.396-2.868 6.396-6.396v-3.54c.624.36 1.296.606 2.016.702v-2.25z" />
              </svg>
            </a>
          </div>

          {/* Legal Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:underline hover:text-orange-500 transition-colors">
              Legal
            </a>
            <p className="text-xs">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;