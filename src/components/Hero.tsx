import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;  // Replace this with your photo URL in the HomePage component
}

const Hero: React.FC<HeroProps> = ({ name, title, description, imageUrl }) => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-cyber-grid bg-cover bg-center">
      <div className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-cyber font-bold mb-4 text-neon-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="glitch" data-text={name}>{name}</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-cyber mb-6 text-neon-blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a 
                href="#timeline" 
                className="pixel-btn flex items-center gap-2"
              >
                VIEW JOURNEY <ArrowDown size={16} />
              </a>
              
              <div className="flex gap-4 items-center">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-70 blur-sm rounded-lg"></div>
              <div className="relative aspect-square w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs font-cyber text-neon-green">CHARACTER STATS</div>
                  <div className="flex justify-between text-xs text-red mt-1">
                    <span>STR: 18</span>
                    <span>DEX: 16</span>
                    <span>INT: 20</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown size={24} className="text-neon-blue" />
      </motion.div>
    </div>
  );
};

export default Hero;