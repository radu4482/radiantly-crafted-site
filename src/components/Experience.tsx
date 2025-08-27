import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Code2, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Low-Code Developer',
      company: 'Current Role',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications using Weweb and Xano, focusing on scalable architecture and rapid delivery.',
      achievements: [
        'Delivered 15+ production applications with 99.9% uptime',
        'Reduced development time by 60% through optimized workflows',
        'Mentored junior developers in low-code best practices',
        'Implemented CI/CD pipelines for automated deployments'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'Previous Experience',
      period: '2020 - 2022',
      description: 'Developed web applications using modern JavaScript frameworks and backend technologies, building foundation for low-code expertise.',
      achievements: [
        'Built responsive web applications for various industries',
        'Optimized database performance and API response times',
        'Collaborated with cross-functional teams on product development',
        'Implemented modern DevOps practices and monitoring'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Early Career',
      period: '2018 - 2020',
      description: 'Started journey in software development, gaining experience across multiple programming languages and frameworks.',
      achievements: [
        'Contributed to open-source projects and community initiatives',
        'Learned fundamental software engineering principles',
        'Participated in agile development methodologies',
        'Built strong foundation in computer science concepts'
      ]
    }
  ];

  const skills = [
    { category: 'Low-Code Platforms', items: ['Weweb', 'Xano', 'Bubble', 'Zapier'] },
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools & Methods', items: ['Git', 'Docker', 'Agile', 'CI/CD'] }
  ];

  const projects = [
    {
      icon: Building2,
      title: 'Enterprise CRM System',
      description: 'Built comprehensive customer relationship management platform using Weweb and Xano for a growing SaaS company.',
      tech: ['Weweb', 'Xano', 'PostgreSQL'],
      impact: '300% increase in sales team efficiency'
    },
    {
      icon: Globe,
      title: 'E-commerce Platform',
      description: 'Developed scalable online marketplace with real-time inventory management and payment processing.',
      tech: ['React', 'Node.js', 'Stripe API'],
      impact: '€2M+ in processed transactions'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Application',
      description: 'Created responsive web application optimized for mobile users with offline capabilities.',
      tech: ['PWA', 'Service Workers', 'IndexedDB'],
      impact: '85% mobile user adoption rate'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of delivering innovative solutions and driving technical excellence
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Career Journey</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit mt-2 md:mt-0">{exp.period}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent rounded-lg group-hover:bg-accent-vibrant/10 transition-colors duration-300">
                        <project.icon className="h-5 w-5 text-accent-vibrant" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-accent-vibrant" />
                      <span className="text-sm font-medium text-foreground">{project.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;