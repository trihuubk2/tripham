import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc0MjM2NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Mobile App Design',
    description: 'Modern and intuitive mobile application with seamless user experience and beautiful animations.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0MjA1OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Creative Portfolio',
    description: 'A stunning portfolio website showcasing creative work with interactive elements and smooth animations.',
    image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3NzQyNzkyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
