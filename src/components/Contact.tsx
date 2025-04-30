import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content with form data
    const subject = `Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    // Open email client with pre-filled information
    window.location.href = `mailto:james.cramer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-amber mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-amber" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:james.cramer@gmail.com" className="text-muted-foreground hover:text-amber transition-colors">
                    james.cramer@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-amber" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+35844715487" className="text-muted-foreground hover:text-amber transition-colors">+358 ** **** *** (ask!)</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 mr-4 text-amber" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/james-cramer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-amber transition-colors">
                    linkedin.com/in/james-cramer
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Looking for?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber mr-2">→</span>
                  <span>Strategic partnerships in mobile gaming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-2">→</span>
                  <span>Investment opportunities in the gaming space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-2">→</span>
                  <span>Consulting on product strategy and market validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-2">→</span>
                  <span>Team building and studio development</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} rows={5} required />
              </div>
              
              <Button type="submit" className="btn-amber w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
