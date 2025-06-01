export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  year: string;
  role: string;
}

export const projectsData: Project[] = [
  {
    id: 'pixel-adventures',
    title: 'Vaccinator',
    description: '3D FPS shooter with multiple levels and breathtaking boss fights',
    longDescription: 'This is an immersive experience I made during the pandemic. I made this 3D FPS shooter game in order to spread awareness about the virus amongst young children with a creative and interactive approach. Impressed by my game, the IT head teacher sent this game to other schools like Delhi Public School and KR Mangalam to further spread awareness through the game.',
    imageUrl: 'http://localhost:5173/Screenshot 2025-05-31 152835.png',
    technologies: ['Unity', 'C#', 'Blender'],
    demoUrl: 'https://mythicalpassage.itch.io/vaccinator',
    githubUrl: '#',
    features: [
      '5+ handcrafted levels',
      'Custom 3D models and Gun Models',
      'Original soundtrack and sound effects',
      'Progressive difficulty curve',
      `We all love a jetpack, don't we? `
    ],
    year: '2019',
    role: 'Lead Developer & Artist'
  },
  {
    id: 'cyber-racer',
    title: 'Sorcery League',
    description: 'Build your way through levels and fight evil sorcerers.',
    longDescription: 'Sorcery League is a game I made for Gdevelop Game Jam and Inter School Competition. Since the number of days were limited to 7, I had to work day in and day out in order to finish the game on time. Game jams are one of my favourite experiences. They force you to work within a certain time limit and being restricted to fewer resources teaches you how to work smart.',
    imageUrl: 'http://localhost:5173/dist/assets/ChatGPT Image Jun 1, 2025, 03_09_04 AM.png',
    technologies: ['Gdevelop', 'GameJam', 'Pixel Art'],
    demoUrl: 'https://mythicalpassage.itch.io/sorcery-league',
    features: [
      'Self-made sound effects',
      'Dynamic weather and Parallax',
      'Responsive 2D physics',
      'Random World Generation',
      'AI Path-following enemies'
    ],
    year: '2020',
    role: 'Head Developer'
  },
  {
    id: 'dungeon-masters',
    title: 'Escape Reality',
    description: 'You are trapped in a virtual world, find your way out',
    longDescription: 'Escape Reality is a fun escape room-based game where you are stuck in a virtual world and have to make your way out of this world. This is the game that won me first place in the National Design Championship.',
    imageUrl: 'http://localhost:5173/dist/assets/ChatGPT Image Jun 1, 2025, 03_45_26 AM.png',
    technologies: ['Roblox Studio', 'Lua', 'Animation Rigging'],
    demoUrl: 'https://www.roblox.com/games/11928078559/Final-Game',
    githubUrl: '#',
    features: [
      'AI Path-following and shooting',
      'Multiplayer',
      'Randomly generated puzzles',
      'Obby and Mazes',
      'Gamepasses'
    ],
    year: '2022',
    role: 'Game Designer & Programmer'
  },
  {
    id: 'virtual-worlds',
    title: 'Chronicles of Newton',
    description: 'You are Isaac Newton. You find a portal to another world which enlightens you with otherworldly knowledge',
    longDescription: 'Chronicles of Newton is a game I made for my International Design Championship. The theme was teaching science to children through a game. I chose a very specific topic, which was Newton and his laws of motion. Through this game you go on an adventure to another dimension and perform tasks while adhering to his laws.',
    imageUrl: 'http://localhost:5173/dist/assets/ChatGPT Image Jun 1, 2025, 04_38_14 AM.png',
    technologies: ['Roblox Studio', 'Lua', 'Animation Rigging'],
    demoUrl: 'https://create.roblox.com/dashboard/creations/experiences/4993291093/overview',
    features: [
      'AI Path-following and shooting',
      'Multiplayer',
      'Cool Gravitational powers',
      'Progressive increase in difficulty'
    ],
    year: '2023',
    role: 'Lead Developer & Project Manager'
  },
  {
    id: 'rhythm-warriors',
    title: 'Pocket Pay',
    description: 'A step towards revolutionizing the investing and budgeting skills of students',
    longDescription: 'PocketPay is a financial literacy and micro-investment platform designed to help school students develop smart saving and investing habits. More than a digital wallet, it empowers users to save pocket money and invest it in safe, government-backed instruments—instilling financial discipline from an early age.',
    imageUrl: 'http://localhost:5173/dist/assets/ChatGPT Image Jun 1, 2025, 06_34_34 AM.png',
    technologies: ['MIT App Inventor', 'Block Coding', 'FireBase'],
    demoUrl: 'https://www.youtube.com/watch?v=pe51axhpEOE&feature=youtu.be',
    features: [
      'Different Parent and Student Dashboard',
      'Backend Connectivity',
      'Forgot Password Feature',
      'Manage Family members',
      'Deposit to number and keep track of allowance given and used'
    ],
    year: '2023',
    role: 'Frontend and Backend Developer'
  },

  {
    id: 'Shuffle-Mania',
    title: 'ShuffleMania',
    description: 'The brand new way to learn the boring periodic table',
    longDescription: 'Chronicles of Newton is a game I made for my International Design Championship. The theme was teaching science to children through a game. I chose a very specific topic, which was Newton and his laws of motion. Through this game you go on an adventure to another dimension and perform tasks while adhering to his laws.',
    imageUrl: 'http://localhost:5173/dist/assets/ChatGPT Image Jun 1, 2025, 02_49_44 PM.png',
    technologies: ['Unity', 'C#', 'Blender'],
    demoUrl: 'https://play.unity.com/en/games/00bea00a-aad9-4ba4-898c-1340df4b0843/shufflemania',
    features: [
      'Difficulty Curve',
      'First Person',
      'Custom Difficulty Selection',
      
      
    ],
    year: '2018',
    role: 'Lead Developer & Project Manager'
  },
  {
    id: 'X-Connect',
    title: 'Xconnect',
    description: `An app I worked on to connect our school's alumni to their roots`,
    longDescription: 'Heritage Rohini and Heritage Gurugaon together came up with a team of the most capable students to help develop an app to form a working alumni  network. I worked n both the programming and designing team working on both the Frontend and Backend',
    imageUrl: 'http://localhost:5173//dist/assets/Xconnect.png',
    technologies: ['Flutter', 'Figma', 'Dart','Android Studio'],
    demoUrl: 'https://www.figma.com/design/eZXFDq8xqVAKV1envEa0Aj/Final--Copy-?node-id=19-193&p=f&t=phAwkXtKB5mlOtEd-0',
    features: [
      'Difficulty Curve',
      'First Person',
      'Custom Difficulty Selection',
      
      
    ],
    year: '2020',
    role: 'Frontend and Backend Developer'
  },
  {
    id: 'Anusandhaan',
    title: 'Anusandhaan',
    description: `An invitation game for all the parents and students to our Annual Science Stream event ANUSANDHAAN`,
    longDescription: 'This is an invitation game I made to invite the students and parents to our annual science event. This was our first year hosting this newly thought event involving parents. We had limited manpower but everyone loved the invitation game, the 3D models and the interactive activities held during the event. ',
    imageUrl: 'http://localhost:5173/dist/assets/Screenshot 2025-06-01 193346.png',
    technologies: ['Gdevelop','Annual Science Event', 'Pixel Art'],
    demoUrl: 'https://mythicalpassage.itch.io/anusandhaan',
    features: [
      'Difficulty Curve',
      'First Person',
      'Custom Difficulty Selection',
      
      
    ],
    year: '2024',
    role: 'Lead Developer & Project Manager'
  },
];
