import React from 'react';
import PixelatedSection from '../components/PixelatedSection';
import { motion } from 'framer-motion';
import { Gamepad2, BookOpen, Camera, Music, Compass, Code } from 'lucide-react';

interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  images: string[];
}

const hobbiesData: Hobby[] = [
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Beyond creating games, I\'m an avid gamer across multiple platforms. I enjoy everything from competitive esports titles to story-driven RPGs and indie gems. Playing diverse games helps me understand different design approaches and mechanics.',
    icon: <Gamepad2 size={24} />,
    color: 'neon-green',
    images: [
      'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6498297/pexels-photo-6498297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'reading',
    title: 'Sci-Fi Literature',
    description: 'I\'m an enthusiastic reader of science fiction novels and graphic novels. These stories inspire my creative thinking and have influenced many of my game concepts. I particularly enjoy cyberpunk and speculative fiction that explores emerging technologies and their impact on society.',
    icon: <BookOpen size={24} />,
    color: 'neon-blue',
    images: [
      'https://images.pexels.com/photos/2228581/pexels-photo-2228581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'photography',
    title: 'Digital Photography',
    description: 'Photography helps me develop my eye for composition and lighting, which translates directly to my work in game development. I focus on urban landscapes and technology-themed subjects, often with a cyberpunk aesthetic that influences my game visuals.',
    icon: <Camera size={24} />,
    color: 'neon-purple',
    images: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1123567/pexels-photo-1123567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'music',
    title: 'Electronic Music Production',
    description: 'I create electronic music and game soundtracks as a hobby, which has given me deeper insight into audio design for games. Understanding how music and sound effects impact player emotions has been invaluable for creating immersive gaming experiences.',
    icon: <Music size={24} />,
    color: 'neon-pink',
    images: [
      'https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'travel',
    title: 'Urban Exploration',
    description: 'Exploring cities and urban environments gives me inspiration for game level design and world-building. I photograph interesting architecture and urban patterns that often find their way into my game environments and level layouts.',
    icon: <Compass size={24} />,
    color: 'cyber-yellow',
    images: [
      'https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Game Jams',
    description: 'Participating in game jams and hackathons pushes my creative and technical limits. The time constraints force innovative thinking and efficient problem-solving – skills that translate directly to professional game development.',
    icon: <Code size={24} />,
    color: 'neon-green',
    images: [
      'https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];

const HobbiesPage: React.FC = () => {
  return (
    <div className="py-16">
      <PixelatedSection title="HOBBIES & INTERESTS">
        <div className="mb-12 text-gray-300">
          <p>Beyond game development, these are the activities that fuel my creativity and provide inspiration for my professional work. Each hobby contributes unique perspectives that enhance my approach to creating games.</p>
        </div>
        
        {hobbiesData.map((hobby, index) => (
          <motion.div 
            key={hobby.id}
            className={`mb-16 last:mb-0 bg-cyber-darker border border-${hobby.color}/30 rounded-lg overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-${hobby.color}`}>
                  {hobby.icon}
                </div>
                <h3 className={`font-cyber text-xl text-${hobby.color}`}>{hobby.title}</h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {hobby.description}
                  </p>
                  
                  <div className={`inline-block px-4 py-2 bg-${hobby.color}/20 rounded-lg border border-${hobby.color}/30`}>
                    <span className={`text-${hobby.color} text-sm font-cyber`}>SKILL BONUS: +15 CREATIVITY</span>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-3 gap-2">
                    {hobby.images.map((img, i) => (
                      <motion.div 
                        key={i}
                        className="aspect-square overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={img} 
                          alt={`${hobby.title} ${i+1}`} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </PixelatedSection>
    </div>
  );
};

export default HobbiesPage;