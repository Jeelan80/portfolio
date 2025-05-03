import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A showcase of my work, skills, and professional journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jeelan80"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/JeelanBasha80"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jeelan-basha-508a19314/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jeelanqwer@gmail.com"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Email: jeelanqwer@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Location: Bangalore, India
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Available for freelance work and collaborations.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Jeelan Basha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;