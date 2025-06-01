import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PixelatedSection from '../components/PixelatedSection';
import { achievementsData } from '../data/achievementsData';
import { motion } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate, Star, ArrowRight, ArrowLeft } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedAchievement, setSelectedAchievement] = useState(
    id ? achievementsData.find(achievement => achievement.id === id) : null
  );
  const [filter, setFilter] = useState<string>('all');
  
  // Update selected achievement when URL param changes
  useEffect(() => {
    if (id) {
      setSelectedAchievement(achievementsData.find(achievement => achievement.id === id) || null);
      window.scrollTo(0, 0);
    } else {
      setSelectedAchievement(null);
    }
  }, [id]);
  
  // Filter achievements
  const filteredAchievements = filter === 'all'
    ? achievementsData
    : achievementsData.filter(achievement => achievement.category === filter);
  
  if (selectedAchievement) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Link to="/achievements\" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-green transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Achievements</span>
          </Link>
          
          <div className="bg-cyber-darker rounded-lg overflow-hidden pixel-border">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {selectedAchievement.imageUrl && (
                  <div className="w-full md:w-1/3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-70 blur-sm rounded-lg"></div>
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img 
                          src={selectedAchievement.imageUrl} 
                          alt={selectedAchievement.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`w-full ${selectedAchievement.imageUrl ? 'md:w-2/3' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {selectedAchievement.category === 'award' && <Award size={24} className="text-cyber-yellow" />}
                    {selectedAchievement.category === 'certification' && <Certificate size={24} className="text-neon-blue" />}
                    {selectedAchievement.category === 'recognition' && <Star size={24} className="text-neon-pink" />}
                    {selectedAchievement.category === 'milestone' && <ArrowRight size={24} className="text-neon-green" />}
                    
                    <h1 className="font-cyber text-2xl md:text-3xl text-neon-green">{selectedAchievement.title}</h1>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">Date Achieved:</span>
                    <p className="font-cyber text-neon-purple">{selectedAchievement.date}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedAchievement.description}
                    </p>
                  </div>
                  
                  {selectedAchievement.link && (
                    <a 
                      href={selectedAchievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pixel-btn inline-flex items-center gap-2"
                    >
                      VIEW CERTIFICATE <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Get achievement counts by category
  const awardCount = achievementsData.filter(a => a.category === 'award').length;
  const certCount = achievementsData.filter(a => a.category === 'certification').length;
  const recogCount = achievementsData.filter(a => a.category === 'recognition').length;
  const milestoneCount = achievementsData.filter(a => a.category === 'milestone').length;
  
  return (
    <div className="py-16">
      <PixelatedSection title="ACHIEVEMENTS UNLOCKED">
        <div className="mb-8 text-gray-300">
          <p>A collection of milestones, awards, and recognitions earned throughout my game development journey. Each achievement represents a level up in my career.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-sm text-sm font-cyber transition-colors ${
              filter === 'all' 
                ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-neon-blue/30'
            }`}
            onClick={() => setFilter('all')}
          >
            ALL ({achievementsData.length})
          </button>
          
          <button 
            className={`px-4 py-2 rounded-sm text-sm font-cyber transition-colors flex items-center gap-2 ${
              filter === 'award' 
                ? 'bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/50' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-cyber-yellow/30'
            }`}
            onClick={() => setFilter('award')}
          >
            <Award size={16} />
            AWARDS ({awardCount})
          </button>
          
          <button 
            className={`px-4 py-2 rounded-sm text-sm font-cyber transition-colors flex items-center gap-2 ${
              filter === 'certification' 
                ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-neon-blue/30'
            }`}
            onClick={() => setFilter('certification')}
          >
            <Certificate size={16} />
            CERTIFICATIONS ({certCount})
          </button>
          
          <button 
            className={`px-4 py-2 rounded-sm text-sm font-cyber transition-colors flex items-center gap-2 ${
              filter === 'recognition' 
                ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/50' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-neon-pink/30'
            }`}
            onClick={() => setFilter('recognition')}
          >
            <Star size={16} />
            RECOGNITIONS ({recogCount})
          </button>
          
          <button 
            className={`px-4 py-2 rounded-sm text-sm font-cyber transition-colors flex items-center gap-2 ${
              filter === 'milestone' 
                ? 'bg-neon-green/20 text-neon-green border border-neon-green/50' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-neon-green/30'
            }`}
            onClick={() => setFilter('milestone')}
          >
            <ArrowRight size={16} />
            MILESTONES ({milestoneCount})
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden hover:border-neon-blue transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to={`/achievement/${achievement.id}`}>
                {achievement.imageUrl && (
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={achievement.imageUrl} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {achievement.category === 'award' && <Award size={18} className="text-cyber-yellow" />}
                    {achievement.category === 'certification' && <Certificate size={18} className="text-neon-blue" />}
                    {achievement.category === 'recognition' && <Star size={18} className="text-neon-pink" />}
                    {achievement.category === 'milestone' && <ArrowRight size={18} className="text-neon-green" />}
                    
                    <span className="text-xs font-cyber text-gray-400">
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="font-cyber text-lg text-neon-green mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{achievement.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neon-purple">{achievement.date}</span>
                    <span className="text-neon-blue text-xs flex items-center gap-1">
                      View Details <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </PixelatedSection>
    </div>
  );
};

export default AchievementsPage;