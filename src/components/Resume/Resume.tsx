import { ResumeData } from '@/types/resume';
import Header from './Header';
import Skills from './Skills';
import Work from './Work';
import Projects from './Projects';
import Education from './Education';

interface ResumeProps {
  data: ResumeData;
}


export default function Resume({ data }: ResumeProps) {
  const { basics, skills, work, projects, education } = data;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8"> 
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-8 bg-white rounded-lg shadow-md">
        <Header basics={basics} />
        <main className="space-y-4 md:space-y-6">
          <Skills skills={skills} />
          <Work experience={work} />
          <Projects projects={projects} />
          <Education education={education} />
        </main>
      </div>
    </div>
  );
}