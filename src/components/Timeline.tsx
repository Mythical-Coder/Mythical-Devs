import React from 'react';
import TimelineItem from './TimelineItem';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container py-16">
      <motion.div 
        className="timeline-line"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      
      <div className="container mx-auto px-4">
        {/* Starting point - Player Spawned */}
        <div className="timeline-item">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bg-cyber-darker border-2 border-neon-green px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-cyber text-neon-green text-lg">PLAYER SPAWNED</span>
          </motion.div>
        </div>
        
        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            isLeft={index % 2 === 0}
            link={item.link}
            index={index}
          />
        ))}
        
        {/* End point - Current */}
        <div className="timeline-item">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bg-cyber-darker border-2 border-neon-blue px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-cyber text-neon-blue text-lg">CURRENT QUEST</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;