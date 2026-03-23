import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              I'm a passionate developer with over 5 years of experience in building web applications. 
              I specialize in React, TypeScript, and modern web technologies.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              My journey in web development started with a curiosity for how things work on the internet. 
              Since then, I've worked with startups and established companies, helping them bring their 
              digital visions to life.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while brainstorming the next big idea.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc3NDE5OTgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional workspace"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
