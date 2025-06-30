
import { ExternalLink, Github, Shield, Coins, Code, Database } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SecureNet Monitor",
      description: "Advanced network security monitoring system with real-time threat detection and automated incident response capabilities.",
      icon: <Shield className="text-blue-400" size={24} />,
      image: "photo-1461749280684-dccba630e2f6",
      technologies: ["Python", "Flask", "Redis", "Machine Learning", "Docker"],
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "ML-powered anomaly detection",
        "Comprehensive reporting dashboard"
      ],
      github: "https://github.com",
      demo: "https://securenet-demo.com",
      status: "Production"
    },
    {
      title: "CryptoVault DApp",
      description: "Decentralized cryptocurrency wallet with multi-signature support and DeFi integration for secure asset management.",
      icon: <Coins className="text-purple-400" size={24} />,
      image: "photo-1488590528505-98d2b5aba04b",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      features: [
        "Multi-signature wallet",
        "DeFi protocol integration",
        "Cross-chain compatibility",
        "Advanced security features"
      ],
      github: "https://github.com",
      demo: "https://cryptovault-demo.com",
      status: "Beta"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Comprehensive CI/CD pipeline with security scanning, automated testing, and deployment orchestration.",
      icon: <Code className="text-green-400" size={24} />,
      image: "photo-1498050108023-c5249f4df085",
      technologies: ["Python", "Jenkins", "Docker", "Kubernetes", "AWS"],
      features: [
        "Automated security scanning",
        "Multi-environment deployment",
        "Performance monitoring",
        "Rollback capabilities"
      ],
      github: "https://github.com",
      demo: "https://devops-demo.com",
      status: "Production"
    },
    {
      title: "Threat Intelligence Platform",
      description: "AI-powered threat intelligence aggregation and analysis platform for proactive cybersecurity defense.",
      icon: <Database className="text-orange-400" size={24} />,
      image: "photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana", "PostgreSQL"],
      features: [
        "AI-powered threat analysis",
        "Real-time intelligence feeds",
        "Custom IOC management",
        "Threat hunting tools"
      ],
      github: "https://github.com",
      demo: "https://threat-intel-demo.com",
      status: "Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Beta":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Development":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions in cybersecurity, blockchain, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center gap-2">
                    <Github size={16} />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
