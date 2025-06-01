import React from 'react';
import PixelatedSection from '../components/PixelatedSection';
import { goalsData } from '../data/goalsData';
import { motion } from 'framer-motion';
import { Target, Clock, CheckCircle } from 'lucide-react';

const GoalCard: React.FC<{ goal: typeof goalsData[0], index: number }> = ({ goal, index }) => {
  // Determine timeline icon and color
  let timelineIcon;
  let timelineColor;
  
  switch (goal.timeline) {
    case 'short':
      timelineIcon = <Clock size={16} />;
      timelineColor = 'text-neon-green';
      break;
    case 'medium':
      timelineIcon = <Clock size={16} />;
      timelineColor = 'text-neon-blue';
      break;
    case 'long':
      timelineIcon = <Clock size={16} />;
      timelineColor = 'text-neon-purple';
      break;
    default:
      timelineIcon = <Clock size={16} />;
      timelineColor = 'text-neon-blue';
  }
  
  // Format timeline text
  const timelineText = goal.timeline.charAt(0).toUpperCase() + goal.timeline.slice(1) + ' Term';
  
  return (
    <motion.div 
      className="bg-cyber-darker border border-neon-blue/30 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-cyber text-lg text-neon-green">{goal.title}</h3>
          <div className={`flex items-center gap-1 ${timelineColor}`}>
            {timelineIcon}
            <span className="text-xs">{timelineText}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">{goal.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-xs text-neon-blue">{goal.progress}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-sm overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-blue to-neon-green transition-all duration-500 ease-out"
              style={{ width: `${goal.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-neon-blue mb-2">Quest Steps:</h4>
          <ul className="space-y-2">
            {goal.steps.map((step, i) => {
              const isCompleted = (i / goal.steps.length) * 100 <= goal.progress;
              
              return (
                <li 
                  key={i} 
                  className={`flex items-start gap-2 text-sm ${isCompleted ? 'text-gray-300' : 'text-gray-500'}`}
                >
                  {isCompleted ? (
                    <CheckCircle size={16} className="mt-0.5 text-neon-green shrink-0" />
                  ) : (
                    <div className="mt-1.5 w-2 h-2 rounded-full border border-gray-500 shrink-0"></div>
                  )}
                  <span>{step}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const GoalsPage: React.FC = () => {
  // Group goals by timeline
  const shortTermGoals = goalsData.filter(goal => goal.timeline === 'short');
  const mediumTermGoals = goalsData.filter(goal => goal.timeline === 'medium');
  const longTermGoals = goalsData.filter(goal => goal.timeline === 'long');
  
  return (
    <div className="py-16">
      <PixelatedSection title="FUTURE QUESTS">
        <div className="mb-12 text-gray-300">
          <p>These are the adventures I'm planning to embark on in my game development journey. From short-term objectives to long-term aspirations, each goal represents a new level in my career progression.</p>
        </div>
        
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Target size={24} className="text-neon-green" />
          <h2 className="font-cyber text-xl text-neon-green">SHORT TERM QUESTS</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {shortTermGoals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Target size={24} className="text-neon-blue" />
          <h2 className="font-cyber text-xl text-neon-blue">MEDIUM TERM QUESTS</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {mediumTermGoals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Target size={24} className="text-neon-purple" />
          <h2 className="font-cyber text-xl text-neon-purple">LONG TERM QUESTS</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {longTermGoals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>
      </PixelatedSection>
    </div>
  );
};

export default GoalsPage;