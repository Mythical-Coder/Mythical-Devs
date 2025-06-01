export interface Goal {
  id: string;
  title: string;
  description: string;
  timeline: 'short' | 'medium' | 'long';
  steps: string[];
  progress: number; // 0-100
}

export const goalsData: Goal[] = [
  {
    id: 'vr-game',
    title: 'Launch VR Adventure Game',
    description: 'Develop and release a fully immersive VR adventure game set in a fantasy world.',
    timeline: 'short',
    steps: [
      'Complete game design document',
      'Develop prototype with core mechanics',
      'Create art assets and environments',
      'Implement full gameplay systems',
      'Optimize for various VR platforms',
      'Conduct user testing and refinement',
      'Launch marketing campaign',
      'Release on major VR platforms'
    ],
    progress: 65
  },
  {
    id: 'game-engine',
    title: 'Create Custom Game Engine',
    description: 'Build a specialized 2D game engine focused on procedural generation and emergent gameplay.',
    timeline: 'medium',
    steps: [
      'Research existing engine architectures',
      'Design core architecture and systems',
      'Implement rendering pipeline',
      'Develop physics and collision systems',
      'Create procedural generation tools',
      'Build editor and development tools',
      'Document API and features',
      'Release open-source version'
    ],
    progress: 30
  },
  {
    id: 'aaa-studio',
    title: 'Work with AAA Studio',
    description: 'Join a major game studio to contribute to a large-scale project and gain industry experience.',
    timeline: 'medium',
    steps: [
      'Refine portfolio with relevant projects',
      'Network with industry professionals',
      'Apply to target studios',
      'Prepare for technical interviews',
      'Complete test assignments',
      'Negotiate offers',
      'Relocate if necessary',
      'Integrate with development team'
    ],
    progress: 40
  },
  {
    id: 'teaching',
    title: 'Game Development Teaching',
    description: 'Create comprehensive game development courses to share knowledge with aspiring developers.',
    timeline: 'short',
    steps: [
      'Outline curriculum and learning objectives',
      'Create lesson plans and materials',
      'Record video tutorials',
      'Develop practical exercises and projects',
      'Set up online learning platform',
      'Launch initial course offering',
      'Gather feedback and iterate',
      'Expand course catalog'
    ],
    progress: 80
  },
  {
    id: 'own-studio',
    title: 'Expand Independent Studio',
    description: 'Grow my independent game studio into a sustainable business with multiple successful titles.',
    timeline: 'long',
    steps: [
      'Secure additional funding',
      'Hire specialized talent',
      'Establish development pipelines',
      'Create studio branding and identity',
      'Develop multiple game projects simultaneously',
      'Build publishing relationships',
      'Implement marketing strategies',
      'Create sustainable revenue streams'
    ],
    progress: 25
  },
  {
    id: 'innovative-mechanics',
    title: 'Pioneer New Game Mechanics',
    description: 'Research and develop innovative gameplay mechanics that push the boundaries of interactive entertainment.',
    timeline: 'long',
    steps: [
      'Research emerging technologies',
      'Experiment with prototype concepts',
      'Conduct player research studies',
      'Develop technical proof-of-concepts',
      'Create design frameworks',
      'Implement in commercial projects',
      'Document and share findings',
      'Present at industry conferences'
    ],
    progress: 15
  }
];