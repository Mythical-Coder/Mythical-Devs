import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PixelatedSection from '../components/PixelatedSection';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedProject, setSelectedProject] = useState(
    id ? projectsData.find(project => project.id === id) : null
  );

  // Update selected project when URL param changes
  useEffect(() => {
    if (id) {
      setSelectedProject(projectsData.find(project => project.id === id) || null);
      window.scrollTo(0, 0);
    } else {
      setSelectedProject(null);
    }
  }, [id]);

  if (selectedProject) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Link to="/projects\" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
          
          <div className="bg-cyber-darker rounded-lg overflow-hidden pixel-border">
            <div className="h-64 md:h-96 relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="font-cyber text-3xl md:text-4xl text-neon-green">{selectedProject.title}</h1>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-cyber-darker/80 text-neon-blue text-xs px-2 py-1 rounded-sm border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-cyber-dark/50 px-4 py-2 rounded-sm">
                  <span className="text-xs text-gray-400">Year</span>
                  <p className="font-cyber text-neon-purple">{selectedProject.year}</p>
                </div>
                <div className="bg-cyber-dark/50 px-4 py-2 rounded-sm">
                  <span className="text-xs text-gray-400">Role</span>
                  <p className="font-cyber text-neon-pink">{selectedProject.role}</p>
                </div>
                <div className="flex gap-4 ml-auto">
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pixel-btn text-xs flex items-center gap-1"
                    >
                      LIVE DEMO <ExternalLink size={14} />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="font-cyber text-xl text-neon-blue mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>
              
              <div>
                <h2 className="font-cyber text-xl text-neon-blue mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1 min-w-2 h-2 w-2 bg-neon-green rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <PixelatedSection title="MY PROJECTS">
        <div className="mb-8 text-gray-300">
          <p>Explore the digital worlds I've created throughout my game development journey. Each project represents unique challenges and creative solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              index={index}
            />
          ))}
        </div>
      </PixelatedSection>
    </div>
  );
};

export default ProjectsPage;