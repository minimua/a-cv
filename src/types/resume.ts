export interface ResumeData {
    basics: Basics;
    skills: string[];
    work: Work[];
    projects: Project[];
    education: Education[];
  }
  
  export interface Basics {
    name: string;
    label: string;
    image?: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    profiles: Profile[];
  }
  
  export interface Profile {
    network: string;
    url: string;
  }
  
  export interface Skill {
    name: string;
    keywords: string[];
  }
  
  export interface Work {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
  }
  
  export interface Project {
    name: string;           // 项目名称
    duration: string;       // 起止时间
    company: string;        // 公司名称
    description: string;    // 项目描述
    technologies: string[]; // 技术栈
    responsibilities: string[]; // 个人职责
  }
  
  export interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate?: string;
  }