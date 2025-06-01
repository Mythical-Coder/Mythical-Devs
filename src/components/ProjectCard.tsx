import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  index
}) => {
  return (
    <motion.div
      className="project-card rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-cyber text-neon-green text-xl">{title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-cyber-darker text-neon-blue text-xs px-2 py-1 rounded-sm border border-neon-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/project/${id}`} 
            className="pixel-btn text-xs"
          >
            VIEW DETAILS
          </Link>
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-neon-green hover:text-neon-blue transition-colors"
            >
              <span className="text-xs">DEMO</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;