
import { Shield, Code, Database, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Shield className="text-blue-400" size={32} />,
      title: "Cybersecurity Expert",
      description: "Certified Ethical Hacker (CEH) with expertise in threat analysis and incident response."
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: "Blockchain Technician",
      description: "Specialized in blockchain technology and decentralized applications development."
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "Full Stack Developer",
      description: "Proficient in Python and modern web technologies for end-to-end solutions."
    },
    {
      icon: <Users className="text-orange-400" size={32} />,
      title: "Project Management",
      description: "PMP certified with Agile methodology expertise for efficient team leadership."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Based in Kano State, Nigeria, I'm a passionate technologist with over 500+ connections 
            and a proven track record in cybersecurity, blockchain, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              As a CyberOps Associate and Blockchain Technician, I bridge the gap between 
              security and innovation. My expertise spans from ethical hacking and incident 
              analysis to developing secure blockchain solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in Python and full-stack development, combined with 
              PMP certification and Agile methodologies, I deliver robust solutions that 
              meet both technical and business requirements.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently open to work in cybersecurity analysis and related fields, I'm 
              passionate about protecting digital assets while building the future of 
              decentralized technology.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
