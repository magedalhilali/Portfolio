export interface Publication {
  title: string;
  publisher: string;
  note?: string;
  link: string | null;
}

export interface Language {
  language: string;
  level: string;     // e.g., "Native", "N4"
  percentage: number; // For the visual bar (e.g., 100, 40)
}

export interface Education {
  university: string;
  degree: string;
  year: string;
  score: string;
  highSchool: string;
  highSchoolGrade: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image?: string;
  link?: string;
  colSpan?: string; 
  
  // --- MEDIA ---
  detailImage?: string; 
  youtubeId?: string;   
  video?: string;
  galleryImages?: string[]; // New: For the two 3:4 portrait images
  
  // --- ICONS & LAYOUT ---
  iconKey?: string; // "briefcase", "book", "gamepad", "graduation-cap"
  overviewTitle?: string;       
  
  // --- DATA SECTIONS ---
  publications?: Publication[]; 
  education?: Education;        // New: Education specific data
  languages?: Language[];       // New: Language list
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  year: string;
}