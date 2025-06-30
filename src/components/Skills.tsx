
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking (CEH)", level: 90 },
        { name: "Incident Analysis", level: 85 },
        { name: "Threat Detection", level: 88 },
        { name: "Security Assessment", level: 82 }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "Python", level: 95 },
        { name: "Full Stack Development", level: 88 },
        { name: "Blockchain Technology", level: 85 },
        { name: "Database Management", level: 80 }
      ]
    },
    {
      title: "Project Management",
      skills: [
        { name: "PMP Methodologies", level: 90 },
        { name: "Agile/Scrum", level: 92 },
        { name: "Team Leadership", level: 85 },
        { name: "Risk Management", level: 88 }
      ]
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Project Management Professional (PMP)",
    "CyberOps Associate",
    "Blockchain Technician"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set spanning cybersecurity, development, and project management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-400 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
