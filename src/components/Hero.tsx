
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Ameenu Jaafar Umar
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 mb-6 leading-relaxed">
                CyberOps Associate | Blockchain Technician | Ethical Hacker (CEH)
              </p>
              
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Full Stack Developer specialized in Python, Agile methodologies, and PMP. 
                Passionate about cybersecurity, blockchain technology, and building secure, scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                  View My Work
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-200">
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 justify-center lg:justify-start">
                <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/1aee7978-cbaf-41df-9193-357f72ef2743.png"
                    alt="Ameenu Jaafar Umar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold rotate-12 shadow-lg">
                Open to Work
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
