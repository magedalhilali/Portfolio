import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Business Development & Digital Strategy",
    category: "Professional Career",
    overviewTitle: "Strategic Scope",
    iconKey: "briefcase",
    description: "A tenure defined by a progression from Associate to Officer, managing high-tier prequalifications and organizational digital transformation.",
    longDescription: "2021 – 2025 | RGCT\n\nAs a Business Development Officer at RGCT—a leader in UAE infrastructure and civil engineering—I manage the critical intersection of business acquisition and operational transparency. My focus is on the full lifecycle of client relations, successfully securing high-tier prequalifications with major entities including ADNOC Supplier Hub, NEOM, Modon, and Tawreed Ajman.\n\nParallel to business growth, I lead the company’s digital strategy. This includes the end-to-end development of our corporate digital presence (rgcc.ae) and the architecture of a professional CEO Dashboard powered by PowerBI. This system provides real-time clarity on revenue, bid success rates, and project-specific costs (Labor, Material, and Equipment), ensuring data-backed decision-making for executive leadership. Furthermore, I oversee the brand's visual identity, designing professional company profiles and managing strategic outreach across major social media platforms.\n\nCareer Progression:\n• Business Development Officer (2024 – Present)\n• Business Development Associate (2021 – 2023)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
    colSpan: "md:col-span-4 md:row-span-1", // Changed from 2 to 4 (fits 6-col grid)
  },
  {
    id: 2,
    title: "Academic Publications & Research",
    category: "Research & Analysis",
    overviewTitle: "Academic Focus",
    iconKey: "book",
    description: "A collection of peer-reviewed papers and book chapters exploring behavioral economics, sustainable development, and global market dynamics.",
    longDescription: "My academic work focuses on the intersection of modern technology and human behavior. By leveraging predictive analytics and behavioral economics, I aim to provide frameworks for understanding market fluctuations and driving sustainable decision-making.",
    image: "https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?q=80&w=3841&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    colSpan: "md:col-span-2 md:row-span-1", // Changed from 1 to 2 (fits 6-col grid)
    publications: [
      {
        title: "Leveraging AI Predictive Analytics to Understand and Influence Investor Behavior",
        publisher: "Springer Book Chapter",
        note: "Published in: The Paradigm Shift from a Linear Economy to a Smart Circular Economy",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-87550-2_87"
      },
      {
        title: "Sustainify: A Solution to Driving Sustainable Behavioral Change",
        publisher: "IEEE Xplore",
        note: "Published Conference Paper",
        link: "https://ieeexplore.ieee.org/document/11236937"
      },
      {
        title: "The Ripple Effect: Commodity Price Fluctuations & Global Consequences in the Wake of the Russia-Ukraine Conflict",
        publisher: "Book Chapter (Pending)",
        note: "Upcoming Publication",
        link: null
      }
    ]
  },
  // --- EDUCATION CARD (Now Wider) ---
  {
    id: 4,
    title: "Education & Languages",
    category: "Academic Background",
    overviewTitle: "Educational Journey",
    iconKey: "graduation-cap",
    colSpan: "md:col-span-3 md:row-span-1", // Changed to 3 (50% width)
    description: "Graduated Top of the Class of 2025 with a 3.97 GPA and 'Excellent with Honors' distinction. Bridging financial rigor with global communication..",
    longDescription: "My educational background combines rigorous financial training with a dedication to linguistic mastery, fostering a global perspective on business and culture.",
    image: "/Portfolio/Graduation1.jpeg", 
    galleryImages: [
      "/Portfolio/Graduation1.jpeg", 
      "/Portfolio/Graduation3.jpg"  
    ],
    education: {
      university: "University of Liwa University",
      degree: "BBA in Banking & Finance",
      year: "Graduated 2025",
      score: "GPA: 3.97 / 4.0", 
      highSchool: "Shiekh Shakhbout bin Sultan High School",
      highSchoolGrade: "Grade: 95.1%" 
    },
    languages: [
      { language: "Arabic", level: "Native", percentage: 100 },
      { language: "English", level: "Fluent", percentage: 100 },
      { language: "Japanese", level: "JLPT N4", percentage: 20 }
    ]
  },
  // --- GAME CARD (Now Equal to Education) ---
  {
    id: 3,
    title: "Whispers in the Light",
    category: "Solo Developed Game | Unreal Engine",
    overviewTitle: "Game Overview",
    iconKey: "gamepad",
    description: "A solo-developed survival-horror game in Unreal Engine, blending modern settings with medieval mystery.",
    longDescription: "One crash changed everything.\n\nAfter striking a deer on a desolate highway, you awaken to a nightmare. The car is wrecked. Your brother, Elias, is missing. The only clue is a trail of blood leading deep into the jungle.\n\nBut what lies within the trees shouldn't exist.\n\nWhispers in the Light is a story-intensive survival horror game where the lines between the past and present blur. Explore a mysterious medieval village hidden within modern times, uncover the dark secrets of its inhabitants, and survive long enough to find your brother.\n\nDevelopment Note:\nCreated in Unreal Engine as part of the Endless Studios Capstone 7 program. This project represents my first venture into solo game development, focusing on environmental storytelling, level design, and atmospheric tension.",
    image: "/Portfolio/trailer.png", 
    detailImage: "/Portfolio/trailer.png",
    youtubeId: "d9ynQtk7WwQ", 
    colSpan: "md:col-span-3", // Changed from 2 to 3 (50% width)
  },
];
