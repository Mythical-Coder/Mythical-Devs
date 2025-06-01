import React from 'react';
import PixelatedSection from '../components/PixelatedSection';
import { motion } from 'framer-motion';

interface JourneyEntry {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const journeyData: JourneyEntry[] = [
  {
    year: '2011',
    title: 'Gaming Genesis',
    description: 'My journey into the digital realm began with classic titles like Street Fighter and Road Rash. These games weren\'t just entertainment - they were my first glimpse into the world of interactive storytelling and game mechanics. The thrill of mastering combos in Street Fighter and the adrenaline rush of Road Rash\'s races sparked a passion that would shape my future career path.',
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2019',
    title: 'The Year of Mythology, Music, and Mastery',
    description: `Sixth grade sparked a wave of new interests. I began learning the piano, though drums always felt cooler. My early love for computers—first explored in 2nd grade through games like Street Fighter and Road Rash—took a new turn when I was introduced to MIT App Inventor.

I built my first calculator app by following YouTube tutorials but didn't fully understand what I was doing. Curious, I asked my teacher for help, then deleted my project and rebuilt it from scratch—this time on my own.

I also got into mythology, reading Greek, Roman, and Egyptian stories. I finished Rick Riordan's Heroes of Olympus series in just two weeks, reading 5–6 hours a day.

That same year, I got a PS4 for my birthday. Games like God of War blended mythology with action, while Fortnite pulled me into competitive Esports. Despite console limitations like low FPS and high ping, I gained recognition in my region and qualified for the Fortnite Championship Series up to Round 2.

Eventually, I shifted focus to helping beginners, creating a game guide app using MIT App Inventor. Since games constantly evolve, I linked it to YouTube channels for live, updated tips—turning my experience into a tool for others.`,
    imageUrl: 'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2020',
    title: 'Digital Creation Begins',
    description: 'Started my formal journey into game development. Learning the fundamentals of programming and game design principles, I created my first playable prototypes. This year was about understanding the building blocks of games - from physics systems to user interface design. Each small project was a lesson in both technical skills and creative problem-solving.',
    imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2021',
    title: 'Expanding Horizons',
    description: 'Ventured into more complex game development projects, experimenting with different genres and platforms. Started participating in game jams, where time constraints pushed me to think creatively and work efficiently. These experiences taught me valuable lessons about scope management and rapid prototyping.',
    imageUrl: 'https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2022',
    title: 'Community and Collaboration',
    description: 'Began actively engaging with the game development community. Participated in online forums, contributed to open-source projects, and collaborated with other developers. This year was crucial in understanding the importance of networking and knowledge sharing in the game development industry.',
    imageUrl: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2023',
    title: 'Technical Mastery',
    description: 'Focused on deepening my technical expertise. Mastered advanced game development concepts, including optimization techniques, advanced graphics programming, and cross-platform development. Started experimenting with emerging technologies like VR and AR, exploring new possibilities in game design.',
    imageUrl: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2024',
    title: 'Innovation and Impact',
    description: 'Pushed the boundaries of my capabilities by working on innovative game projects. Began exploring the intersection of games with other fields like education and healthcare. Started mentoring other aspiring game developers, giving back to the community that helped me grow.',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const JourneyItem: React.FC<{ 
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
  isEven: boolean;
  index: number;
}> = ({ year, title, description, imageUrl, isEven, index }) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center mb-16 gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/3">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {imageUrl ? (
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-70 blur-md rounded-lg"></div>
              <div className="relative h-full">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/50 to-transparent"></div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-square bg-cyber-dark flex items-center justify-center rounded-lg border-2 border-neon-blue overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid bg-cover bg-center opacity-30"></div>
              <span className="font-cyber text-4xl md:text-5xl text-neon-green">{year}</span>
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="w-full md:w-2/3">
        <h2 className="font-cyber text-2xl text-neon-blue mb-4">{title}</h2>
        <div className="bg-cyber-darker/70 p-6 rounded-lg border border-neon-blue/30">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const JourneyPage: React.FC = () => {
  return (
    <div className="py-16">
      <PixelatedSection title="MY DEVELOPMENT JOURNEY">
        <div className="mb-12 text-gray-300">
          <p>This is the story of my evolution as a game developer - a journey of continuous learning, creative exploration, and technical growth. Each milestone represents a new level achieved, a skill mastered, or a challenge overcome.</p>
        </div>
        
        {journeyData.map((item, index) => (
          <JourneyItem 
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            isEven={index % 2 !== 0}
            index={index}
          />
        ))}
      </PixelatedSection>
    </div>
  );
};

export default JourneyPage;