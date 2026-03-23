import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
            I'm always open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:hello@alexjohnson.dev"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-8 sm:mb-12 text-base sm:text-lg"
          >
            <Mail size={20} />
            Send me an email
          </a>
          <div className="flex justify-center gap-6 sm:gap-8">
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-md"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-md"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
