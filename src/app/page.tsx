import Resume from '@/components/Resume/Resume';
import { resumeData } from '@/data/resume';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Resume data={resumeData} />
      </div>
    </main>
  );
}