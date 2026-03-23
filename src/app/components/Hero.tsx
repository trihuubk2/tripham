import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6">
            Hi, I'm <span className="text-blue-600">Alex Johnson</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8">
            Full Stack Developer & Designer
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I create beautiful and functional web experiences that bring ideas to life. 
            Passionate about clean code, intuitive design, and solving complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 sm:mt-20 inline-block animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} className="text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
