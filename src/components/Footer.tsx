import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">James Cramer</h3>
            <p className="text-gray-400 mb-4">
              Product leader & growth strategist specializing in mobile gaming
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/james-cramer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:james.cramer@gmail.com" className="text-gray-400 hover:text-amber transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/itsjamescramer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-amber transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-amber transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-amber transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-2">
              Email: james.cramer@gmail.com
            </p>
            <p className="text-gray-400 mb-4">Phone: +358 ** **** *** (Ask!)</p>
            <a href="#contact" className="inline-block px-4 py-2 bg-amber text-black font-medium rounded-md hover:bg-amber/90 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} James Cramer. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Mobile gaming professional & entrepreneur
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;