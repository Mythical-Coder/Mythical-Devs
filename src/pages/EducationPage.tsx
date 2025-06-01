import React from 'react';
import PixelatedSection from '../components/PixelatedSection';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Award, BookOpen } from 'lucide-react';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description: string;
  achievements: string[];
  logo: string;
}

const educationData: Education[] = [
  {
    id: 'university',
    institution: 'University of Game Design',
    degree: 'Bachelor of Science',
    field: 'Computer Science (Game Development)',
    startYear: '2016',
    endYear: '2020',
    description: 'Completed a comprehensive program focused on game development fundamentals, computer graphics, programming, and game design principles. Specialized in interactive systems and procedural content generation.',
    achievements: [
      'Graduated with Honors (3.9 GPA)',
      'Senior project featured at University Showcase',
      'Teaching Assistant for Introduction to Game Programming',
      'Member of Game Development Club'
    ],
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'highschool',
    institution: 'Tech Academy High School',
    degree: 'High School Diploma',
    field: 'Computer Science Focus',
    startYear: '2012',
    endYear: '2016',
    description: 'Participated in advanced placement computer science courses and developed my first games using JavaScript and Python. Founded the school\'s first coding club and organized game jams for students.',
    achievements: [
      'Valedictorian',
      'First Place in Regional Coding Competition',
      'Created school\'s first student-led app',
      'Perfect score on AP Computer Science exam'
    ],
    logo: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  link?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 'unity-cert',
    name: 'Unity Certified Developer',
    issuer: 'Unity Technologies',
    date: 'March 2022',
    description: 'Professional certification demonstrating expertise in Unity game engine development including 3D physics, shaders, optimization, and deployment.',
    skills: [
      'Unity Engine', 'C# Programming', '3D Graphics', 'Game Physics', 'Performance Optimization'
    ],
    link: '#'
  },
  {
    id: 'unreal-cert',
    name: 'Unreal Engine Specialist',
    issuer: 'Epic Games',
    date: 'February 2024',
    description: 'Advanced certification in Unreal Engine development with focus on graphics programming, Blueprints, and multiplayer systems.',
    skills: [
      'Unreal Engine', 'Blueprint System', 'C++', 'Networking', 'Graphics Programming'
    ],
    link: '#'
  },
  {
    id: 'game-design-cert',
    name: 'Professional Game Designer',
    issuer: 'Game Design Academy',
    date: 'July 2023',
    description: 'Certification in game design principles, level design, and player psychology, with emphasis on creating engaging player experiences.',
    skills: [
      'Game Design Theory', 'Level Design', 'Player Psychology', 'Balancing', 'Narrative Design'
    ]
  },
  {
    id: 'art-cert',
    name: 'Digital Art for Games',
    issuer: 'Creative Arts Institute',
    date: 'May 2022',
    description: 'Specialized training in digital art creation for video games, including texturing, character design, and environment art.',
    skills: [
      'Digital Painting', 'Texturing', 'Character Design', 'Environment Art', 'Color Theory'
    ]
  }
];

const EducationPage: React.FC = () => {
  return (
    <div className="py-16">
      <PixelatedSection title="EDUCATION & TRAINING">
        <div className="mb-12 text-gray-300">
          <p>The foundation of my game development skills, including formal education and specialized training that has equipped me with the knowledge to create compelling interactive experiences.</p>
        </div>
        
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GraduationCap size={24} className="text-neon-green" />
          <h2 className="font-cyber text-xl text-neon-green">FORMAL EDUCATION</h2>
        </motion.div>
        
        {educationData.map((edu, index) => (
          <motion.div 
            key={edu.id}
            className="mb-12 bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4">
                  <h3 className="font-cyber text-xl text-neon-blue mb-1">{edu.institution}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span className="text-neon-green font-semibold">{edu.degree}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-neon-purple">{edu.field}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-neon-pink">{edu.startYear} - {edu.endYear}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-neon-green mb-2">Key Achievements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Award size={16} className="mt-0.5 text-cyber-yellow shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          className="flex items-center gap-3 mb-8 mt-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FileText size={24} className="text-neon-blue" />
          <h2 className="font-cyber text-xl text-neon-blue">CERTIFICATIONS & COURSES</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen size={20} className="text-neon-pink shrink-0 mt-1" />
                  <div>
                    <h3 className="font-cyber text-lg text-neon-green">{cert.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm">
                      <span className="text-neon-purple">{cert.issuer}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-neon-blue">{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                
                <div>
                  <h4 className="text-xs font-semibold text-neon-blue mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-cyber-dark text-neon-green text-xs px-2 py-1 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neon-blue text-xs hover:text-neon-green transition-colors flex items-center gap-1"
                    >
                      View Certificate <Award size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PixelatedSection>
    </div>
  );
};

export default EducationPage;