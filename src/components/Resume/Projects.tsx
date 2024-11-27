import React from 'react';
import { Project } from '@/types/resume';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b pb-2">项目经验</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                    >
                      <span className="break-all">{project.link}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-gray-600 text-sm">
                <span>{project.company}</span>
                <span className="hidden md:inline">|</span>
                <span>{project.duration}</span>
              </div>
            </div>
            
            <div className="text-sm md:text-base text-gray-700 mb-4 break-words">
              {project.description}
            </div>
            
            <div className="mb-4">
              <div className="font-medium text-gray-900 mb-2 text-sm md:text-base">技术栈：</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <div className="font-medium text-gray-900 mb-2 text-sm md:text-base">个人职责：</div>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                {project.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="break-words">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;