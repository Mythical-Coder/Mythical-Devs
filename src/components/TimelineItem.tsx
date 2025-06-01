import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  link?: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isLeft,
  link,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <motion.div
      className={`timeline-item group ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`timeline-content ${isLeft ? 'left' : 'right'} ${link ? 'cursor-pointer' : ''}`}
        initial={{ x: isLeft ? -50 : 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pixel-border p-4 bg-cyber-darker/80 backdrop-blur-sm">
          <div className="font-cyber text-cyber-yellow mb-1">{year}</div>
          <h3 className="text-lg font-bold text-neon-blue mb-2">{title}</h3>
          <motion.div
            initial={false}
            animate={isHovered ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: 'auto' },
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-300">{description}</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="timeline-dot"
        whileHover={{ scale: 1.5 }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
      />
    </motion.div>
  );
};

export default TimelineItem;
