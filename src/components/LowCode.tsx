import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Zap, DollarSign, Layers, Clock, Shield } from 'lucide-react';

const LowCode = () => {
  const platforms = [
    {
      name: 'Weweb',
      role: 'Frontend Platform',
      description: 'Visual development platform for creating responsive, professional web applications with pixel-perfect design control.',
      benefits: [
        'Rapid prototyping and development',
        'Responsive design system',
        'Custom component creation',
        'Advanced integrations'
      ],
      color: 'bg-blue-500'
    },
    {
      name: 'Xano',
      role: 'Backend Platform',
      description: 'Scalable backend-as-a-service with powerful API development, database management, and serverless functions.',
      benefits: [
        'Scalable database architecture',
        'Custom API endpoints',
        'Real-time functionality',
        'Enterprise-grade security'
      ],
      color: 'bg-purple-500'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Faster Time-to-Market',
      description: 'Deliver applications 3-5x faster than traditional development while maintaining high quality standards.'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Reduce development costs significantly with streamlined processes and fewer resources required.'
    },
    {
      icon: Layers,
      title: 'Scalability',
      description: 'Built on cloud-native architecture that scales automatically with your business growth.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Industry-standard security features and compliance built into the platform foundation.'
    },
    {
      icon: Zap,
      title: 'Rapid Iteration',
      description: 'Quick prototyping and testing allows for faster feedback loops and continuous improvement.'
    },
    {
      icon: Rocket,
      title: 'Future-Proof',
      description: 'Stay current with latest technologies and features through platform updates and integrations.'
    }
  ];

  return (
    <section id="low-code" className="py-24 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Low-Code Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leveraging the power of Weweb and Xano to deliver enterprise-grade applications 
              with unprecedented speed and efficiency
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{platform.name}</h3>
                      <Badge variant="secondary" className="mt-1">{platform.role}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {platform.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Low-Code */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              The Low-Code Advantage
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="inline-flex p-3 bg-accent rounded-lg mb-4 group-hover:bg-accent-vibrant/10 transition-colors duration-300">
                        <advantage.icon className="h-6 w-6 text-accent-vibrant" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-hero-gradient text-primary-foreground shadow-card-hover">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Ideas into Reality?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how low-code solutions can accelerate your project delivery 
                while maintaining the highest standards of quality and scalability.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-300"
                >
                  Start the Conversation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LowCode;