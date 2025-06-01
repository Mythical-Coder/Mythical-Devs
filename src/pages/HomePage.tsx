import React from 'react';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import PixelatedSection from '../components/PixelatedSection';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Display only 3 featured projects on home page
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <div>
      <Hero 
        name="Code that disappears. Worlds that don’t."
        title="Nityam Chaudhary"
        description=" I’m a Level 17 game developer passionate about creating immersive, meaningful experiences. I work with Unity (C#), GDevelop, and Roblox Studio (Lua), with a focus on level design and animation rigging. I’ve also built mobile apps using Flutter (Dart). Outside tech, I’m a self-taught drummer and guitarist, and I’ve shared those skills by teaching underprivileged children through an NGO. I’ve led digital literacy and nutrition awareness drives, supported my school’s MUN as part of the design and IT team, and served as a jury member for our game design event for three years. Winning the National Design Championship and placing internationally affirmed my belief in creativity as a tool for impact.
        "
        imageUrl="/WhatsApp Image 2023-05-07 at 13.30.56_9ee88925.jpg"
      />
      
      <div id="timeline" className="py-16 bg-cyber-darker">
        <div className="container mx-auto px-4 mb-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cyber text-3xl md:text-4xl text-neon-blue mb-4">MY JOURNEY</h2>
            <p className="text-grey-300 max-w-2xl mx-auto">
              Follow my character progression from the beginning of my adventure to the current quest. Hover over timeline points to see details and click to explore more.
            </p>
          </motion.div>
        </div>
        
        <Timeline />
      </div>
      
      <PixelatedSection title="FEATURED PROJECTS">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
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
        
        <div className="mt-8 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 pixel-btn"
          >
            VIEW ALL PROJECTS <ArrowRight size={16} />
          </Link>
        </div>
      </PixelatedSection>
      
      <PixelatedSection title="SKILLS & ATTRIBUTES" className="bg-cyber-grid bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-cyber-dark/90 backdrop-blur-sm"></div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-cyber-darker/80 p-4 rounded-lg border border-neon-green/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-cyber text-neon-green text-lg mb-3">PROGRAMMING</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">C#</span>
                    <span className="text-xs text-neon-green">95%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-green rounded-sm" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">C++</span>
                    <span className="text-xs text-neon-green">80%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-green rounded-sm" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Python</span>
                    <span className="text-xs text-neon-green">75%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-green rounded-sm" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">JavaScript</span>
                    <span className="text-xs text-neon-green">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-green rounded-sm" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-cyber-darker/80 p-4 rounded-lg border border-neon-blue/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-cyber text-neon-blue text-lg mb-3">ENGINES & TOOLS</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Unity</span>
                    <span className="text-xs text-neon-blue">90%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-blue rounded-sm" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Unreal Engine</span>
                    <span className="text-xs text-neon-blue">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-blue rounded-sm" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Godot</span>
                    <span className="text-xs text-neon-blue">70%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-blue rounded-sm" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Blender</span>
                    <span className="text-xs text-neon-blue">65%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-blue rounded-sm" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-cyber-darker/80 p-4 rounded-lg border border-neon-pink/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-cyber text-neon-pink text-lg mb-3">GAME DESIGN</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Level Design</span>
                    <span className="text-xs text-neon-pink">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-pink rounded-sm" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Mechanics Design</span>
                    <span className="text-xs text-neon-pink">95%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-pink rounded-sm" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Narrative Design</span>
                    <span className="text-xs text-neon-pink">80%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-pink rounded-sm" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">UI/UX Design</span>
                    <span className="text-xs text-neon-pink">75%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-sm">
                    <div className="h-full bg-neon-pink rounded-sm" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </PixelatedSection>
    </div>
  );
};

export default HomePage;