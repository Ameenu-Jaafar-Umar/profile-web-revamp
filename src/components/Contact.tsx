
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "ameenu.jaafar@example.com",
      href: "mailto:ameenu.jaafar@example.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      value: "+234 XXX XXX XXXX",
      href: "tel:+234XXXXXXXXX"
    },
    {
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Location",
      value: "Kano State, Nigeria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ameenu-jaafar-umar",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github size={20} />,
      name: "GitHub",
      href: "https://github.com/ameenujaafar",
      color: "hover:text-gray-400"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      href: "https://twitter.com/ameenujaafar",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Open to new opportunities in cybersecurity, blockchain, and software development. 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <a 
                        href={info.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="text-white font-medium">Currently Available</h4>
                    <p className="text-gray-400 text-sm">Open to new opportunities and collaborations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-white">Send Me a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
