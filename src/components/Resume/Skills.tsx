import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">专业技能</h3>
      <ul className="space-y-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="mr-2">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;