export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'award' | 'certification' | 'recognition' | 'milestone';
  date: string;
  imageUrl?: string;
  link?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: 'best-indie-game',
    title: 'Best Indie Game Award',
    description: 'Received the "Best Indie Game" award at the International Game Festival for "Pixel Adventures".',
    category: 'award',
    date: 'November 2021',
    // Replace with your award photo
    imageUrl: 'path/to/your/award-photo.jpg'
  },
  {
    id: 'unity-certification',
    title: 'Unity Certified Developer',
    description: 'Achieved professional certification as a Unity Developer, demonstrating expertise in all aspects of Unity development.',
    category: 'certification',
    date: 'March 2022',
    link: '#'
  },
  {
    id: 'game-jam-winner',
    title: 'Game Jam Champion',
    description: 'Won first place at the 48-hour Global Game Jam with an innovative puzzle game concept.',
    category: 'award',
    date: 'January 2023',
    // Replace with your game jam photo
    imageUrl: 'path/to/your/game-jam-photo.jpg'
  },
  {
    id: 'speaker-recognition',
    title: 'Featured Speaker',
    description: 'Invited as a featured speaker at the Game Developers Conference to share insights on indie game development.',
    category: 'recognition',
    date: 'May 2023',
    // Replace with your speaking event photo
    imageUrl: 'path/to/your/speaking-photo.jpg'
  },
  {
    id: 'one-million-downloads',
    title: 'One Million Downloads',
    description: 'Celebrated one million downloads of "Cyber Racer" across all platforms.',
    category: 'milestone',
    date: 'October 2023'
  },
  {
    id: 'unreal-certification',
    title: 'Unreal Engine Specialist',
    description: 'Completed advanced certification in Unreal Engine specializing in graphics programming and optimization.',
    category: 'certification',
    date: 'February 2024',
    link: '#'
  },
  {
    id: 'industry-recognition',
    title: 'Industry Recognition Award',
    description: 'Received special recognition from the Game Developers Association for contributions to the indie game community.',
    category: 'recognition',
    date: 'April 2024',
    // Replace with your award ceremony photo
    imageUrl: 'path/to/your/recognition-photo.jpg'
  },
  {
    id: 'studio-formation',
    title: 'Successful Studio Launch',
    description: 'Successfully launched an independent game studio that secured significant initial funding.',
    category: 'milestone',
    date: 'June 2024'
  }
];