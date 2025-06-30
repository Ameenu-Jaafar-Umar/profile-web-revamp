
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Cyber Incident Analyst",
      company: "Security Operations Center",
      location: "Kano State, Nigeria",
      period: "2023 - Present",
      type: "Open to Work",
      description: "Specialized in threat detection, incident response, and security analysis. Monitoring network traffic and investigating security breaches to protect organizational assets.",
      technologies: ["SIEM", "Threat Hunting", "Incident Response", "Forensics", "Python"],
      achievements: [
        "Reduced incident response time by 40%",
        "Implemented automated threat detection systems",
        "Led security awareness training programs"
      ]
    },
    {
      title: "Blockchain Developer",
      company: "Decentralized Solutions",
      location: "Remote",
      period: "2022 - 2023",
      type: "Contract",
      description: "Developed and deployed smart contracts and decentralized applications. Worked on blockchain infrastructure and cryptocurrency solutions.",
      technologies: ["Solidity", "Web3", "Ethereum", "Python", "React"],
      achievements: [
        "Deployed 15+ smart contracts",
        "Built DeFi applications handling $2M+ in transactions",
        "Optimized gas costs by 30%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Tech Innovation Hub",
      location: "Kano State, Nigeria",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Led full-stack development projects using Python and modern web technologies. Managed development teams using Agile methodologies.",
      technologies: ["Python", "Django", "React", "PostgreSQL", "AWS"],
      achievements: [
        "Delivered 10+ web applications",
        "Improved application performance by 50%",
        "Mentored junior developers"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Open to Work":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Contract":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Full-time":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A track record of delivering impactful solutions across cybersecurity, blockchain, and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
