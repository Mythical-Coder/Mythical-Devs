import React from 'react';
import { motion } from 'framer-motion';

interface PixelatedSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const PixelatedSection: React.FC<PixelatedSectionProps> = ({ 
  title, 
  children,
  className = '' 
}) => {
  return (
    <motion.section 
      className={`my-12 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <h2 className="font-cyber text-2xl md:text-3xl text-neon-blue inline-block">
            {title}
          </h2>
          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-neon-blue"></div>
          <div className="absolute -bottom-2 left-16 w-32 h-1 bg-neon-purple opacity-70"></div>
        </div>
        
        <div className="bg-cyber-darker/70 backdrop-blur-sm p-6 rounded-lg pixel-border">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default PixelatedSection;