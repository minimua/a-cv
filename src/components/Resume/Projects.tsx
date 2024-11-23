import React from 'react';
import { Project } from '@/types/resume';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">项目经验</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <div className="flex items-center gap-3 text-gray-600">
                <span>{project.company}</span>
                <span>|</span>
                <span>{project.duration}</span>
              </div>
            </div>
            
            <div className="text-gray-700 mb-4">{project.description}</div>
            
            <div className="mb-4">
              <div className="font-medium text-gray-900 mb-2">技术栈：</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <div className="font-medium text-gray-900 mb-2">个人职责：</div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;