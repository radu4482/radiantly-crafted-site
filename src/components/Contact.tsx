import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          title: formData.name, // Map name to title
          email: formData.email,
          description: formData.message // Map message to description
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      toast({
        title: 'Send failed',
        description: error?.message || 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'radu.besleaga@email.com',
      action: () => window.open('mailto:radu.besleaga@email.com')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open('https://www.linkedin.com/in/radu-george-besleaga-7031a917b/', '_blank')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Remotely',
      action: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available upon request',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 animate-fade-in-up ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? I'd love to hear about your ideas and discuss 
              how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card 
              ref={formRef}
              className={`shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-left ${formVisible ? 'visible' : ''}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px]"
                      placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-hero-gradient hover:opacity-90 text-primary-foreground font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div 
              ref={infoRef}
              className={`space-y-6 animate-fade-in-right ${infoVisible ? 'visible' : ''}`}
            >
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <item.icon className="h-5 w-5 text-accent-vibrant" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        {item.action ? (
                          <button
                            onClick={item.action}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </button>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-hero-gradient text-primary-foreground shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Why reach out?</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                      <span>Tailored solutions for your needs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                      <span>Fast response time (24-48 hours)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                      <span>Transparent project planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;