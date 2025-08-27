import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Deep expertise in modern development practices, with a focus on scalable architecture and clean code principles.'
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Leveraging low-code platforms to deliver high-quality solutions in record time without sacrificing functionality.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Always exploring cutting-edge technologies and methodologies to solve complex business challenges efficiently.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable business value through strategic technology implementations and optimizations.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming ideas into reality through innovative technology solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong background in software development and a passion for innovation, I've dedicated my career to 
                mastering the art of rapid application development. My journey has led me to specialize in low-code solutions 
                that bridge the gap between speed and quality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout my professional experience, I've consistently delivered projects that exceed expectations by 
                leveraging modern technologies and methodologies. I believe in the power of efficient development processes 
                that don't compromise on scalability or maintainability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical expertise with strategic thinking, ensuring that every solution I build 
                serves both immediate needs and long-term business objectives. I'm committed to staying at the forefront 
                of technology trends and best practices.
              </p>
            </div>

            <div className="lg:order-first">
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Professional Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Solution Architecture</p>
                        <p className="text-sm text-muted-foreground">Designing scalable systems and technical strategies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Low-Code Development</p>
                        <p className="text-sm text-muted-foreground">Specializing in Weweb and Xano platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Full-Stack Development</p>
                        <p className="text-sm text-muted-foreground">End-to-end application development and deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Project Leadership</p>
                        <p className="text-sm text-muted-foreground">Leading technical teams and driving innovation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-accent-vibrant/10 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-accent-vibrant" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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

export default About;