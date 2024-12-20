import { Education as EducationType } from '@/types/resume';

interface EducationProps {
  education?: EducationType[];
}

export default function Education({ education = [] }: EducationProps) {
  if (!education?.length) return null;

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">教育背景</h3>
      <div className="space-y-4 text-sm">
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800">{edu.institution}</h4>
              <p className="text-gray-600">
                {edu.startDate} - {edu.endDate || '至今'}
              </p>
            </div>
            <p className="text-gray-700">
              {edu.studyType} · {edu.area}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}