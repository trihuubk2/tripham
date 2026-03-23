import { Code2, Palette, Database, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Prototyping']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['React Native', 'iOS', 'Android', 'Cross-platform', 'PWA']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">Skills & Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 text-sm sm:text-base">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
