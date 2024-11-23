import { ResumeData } from '@/types/resume';
import Header from './Header';
import Skills from './Skills';
import Work from './Work';
import Projects from './Projects';
import Education from './Education';
import resumeData from '@/data/resume';

interface ResumeProps {
  data: ResumeData;
}

export default function Resume({ data }: ResumeProps) {
  const { basics, work, projects, education } = data;

  return (
    <div className="min-h-screen bg-gray-100 p-8">  
      <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md">  
        <Header basics={basics} />
        <main className="space-y-6">
          <Skills skills={resumeData.skills} />
          <Work experience={work} />
          <Projects projects={projects} />
          <Education education={education} />
        </main>
      </div>
    </div>
  );
}