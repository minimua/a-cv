import { Work as WorkType } from '@/types/resume';

interface WorkProps {
  experience?: WorkType[];
}

export default function Work({ experience = [] }: WorkProps) {
  if (!experience?.length) return null;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b pb-2">工作经历</h2>
      <div className="space-y-6">
        {experience.map((work, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-col gap-2 mb-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{work.company}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-gray-600 text-sm md:text-base">
                <span>{work.position}</span>
                <span className="hidden md:inline">|</span>
                <span>{work.startDate} - {work.endDate || '至今'}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-3 text-sm md:text-base">{work.summary}</p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              {work.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-600 break-words">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}