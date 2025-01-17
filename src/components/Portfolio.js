import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, Layout, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [activeProject, setActiveProject] = useState(null);

  const skills = [
    { 
      category: 'Backend',
      icon: <Code className="w-6 h-6" />,
      items: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'MySQL'],
      color: 'bg-purple-100 text-purple-800'
    },
    { 
      category: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      items: ['React.js', 'Angular', 'JavaScript', 'HTML', 'CSS'],
      color: 'bg-blue-100 text-blue-800'
    },
    { 
      category: 'Other',
      icon: <Briefcase className="w-6 h-6" />,
      items: ['Microservices', 'Redis', 'REST APIs', 'Git'],
      color: 'bg-green-100 text-green-800'
    }
  ];

  const experiences = [
    {
      company: 'Ozonetel',
      role: 'Software Engineer',
      period: 'Nov 2022 - Present',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500',
      highlights: [
        'Developed real-time chat pipeline using Redis Streams',
        'Built and optimized REST APIs using Spring Boot',
        'Enhanced cloud agent UI with React for customer support',
        'Implemented high-performance message processing systems'
      ]
    },
    {
      company: 'Wipro',
      role: 'Intern',
      period: 'Apr 2022 - Jun 2022',
      color: 'bg-gradient-to-r from-green-500 to-blue-500',
      highlights: [
        'Developed full-stack web application using Angular and Spring Boot',
        'Implemented secure user authentication system',
        'Created efficient APIs for seamless communication'
      ]
    }
  ];

  const projects = [
    {
      name: 'API Implementation',
      period: 'Oct 2023 - Present',
      description: 'Successfully migrated PHP APIs to Spring Boot',
      tech: 'Spring Boot, Java, MySQL, JUnit',
      color: 'from-blue-500 to-indigo-500',
      highlights: [
        'Reduced API latency through optimized queries',
        'Implemented robust validation and error handling',
        'Ensured minimal service disruption during migration'
      ]
    },
    {
      name: 'CloudAgent',
      period: 'Jan 2023 - Present',
      description: 'Real-time chat system with Redis Streams',
      tech: 'Java, Spring Boot, Redis, React, Redux',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'Built efficient message routing system',
        'Designed intuitive agent interface',
        'Implemented real-time updates and monitoring'
      ]
    },
    {
      name: 'Covid-19 Tracker',
      period: 'Jun 2022',
      description: 'Comprehensive COVID-19 tracking system',
      tech: 'Angular, Spring Boot, MySQL, REST API',
      color: 'from-green-500 to-teal-500',
      highlights: [
        'Integrated real-time data updates',
        'Implemented user authentication',
        'Created country-specific watchlist feature'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <header className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Arepalli Raghu Vardhan</h1>
            <p className="text-2xl mb-8 text-blue-100">Software Engineer</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="mailto:raghuarepalli5@gmail.com" 
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Mail size={16} /> raghuarepalli5@gmail.com
              </a>
              <a href="tel:+916300068196" 
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Phone size={16} /> +91 6300068196
              </a>
              <a href="https://www.linkedin.com/in/raghuarepalli-6349962" 
                 className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </header>
      </div>

      <nav className="sticky top-0 bg-white shadow z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {['experience', 'projects', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 border-b-2 font-medium transition-all hover:text-blue-600 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {activeTab === 'experience' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} 
                     className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className={`h-2 rounded-t-lg ${exp.color}`} />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-blue-600 text-lg mb-2">{exp.role}</p>
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 ml-2">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} 
                     className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
                     onMouseEnter={() => setActiveProject(index)}
                     onMouseLeave={() => setActiveProject(null)}>
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{project.name}</h3>
                      <span className="text-sm text-gray-600">{project.period}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`space-y-2 transition-all duration-300 ${
                      activeProject === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-500" />
                          <span className="ml-2">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} 
                     className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className={`${skillGroup.color} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;