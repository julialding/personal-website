import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TimelineItem {
  date: string;
  role: string;
  company: string;
  location: string;
  description: string[];
}

const Experience = () => {
  const experiences: TimelineItem[] = [
    {
      date: "May 2025 - Present",
      role: "Associate Software Development Intern",
      company: "Google",
      location: "Seattle, WA",
      description: [
        "Working on integrating Panels with the Takeout process"
      ]
    },
    {
      date: "Aug 2024 - Dec 2024",
      role: "AI Studio Fellow",
      company: "Verizon",
      location: "Remote",
      description: [
        "Developed machine learning models using NLP and supervised learning to create a categorization system for the Enterprise Architecture team, strengthening its generative rationalization strategy"
      ]
    },
    {
      date: "May 2024 - Aug 2024",
      role: "STEP Software Engineering Intern",
      company: "Google",
      location: "Sunnyvale, CA",
      description: [
        "Reduced cost of manual issue management on Issue Tracker, used by 500k+ internal users",
        "Drove project end-to-end with 2k+ lines of code and 15-page design doc for core backend algorithm & frontend chip to generate/display hotlist recommendations for an issue",
        "Led and demoed project work, triaged issues, fixed longstanding bugs, completed UI feature request"
      ]
    },
    {
      date: "Jun 2023 - Jul 2023",
      role: "Counselor & Research Coordinator",
      company: "Mathworks at Texas State University",
      location: "San Marcos, TX",
      description: [
        "Led daily 4h study groups and problem sessions over contest math & Number Theory proofs",
        "Organized research symposium and provided feedback on returning student research projects"
      ]
    }
  ];

  return (
    <div id='experience' className='w-full px-2 sm:px-6 py-8 sm:py-16'>
      <div className='max-w-[1240px] w-full m-auto'>
        <p className='uppercase text-xl tracking-widest text-sky-700'>
          02
        </p>
        <h2 className='py-4'>Experience<span className='text-sky-700'>.</span></h2>
        
        <div className="relative w-full">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-sky-700"></div>
          
          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((item, index) => (
              <div key={index} className="relative pl-10 sm:pl-16">
                {/* Content Box */}
                <div className="bg-neutral-200 rounded-lg shadow-lg shadow-gray-300 p-3 sm:p-4 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full">
                  {/* Arrow */}
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-200 transform rotate-45 border-l border-b border-gray-300"></div>
                  <div className="block sm:hidden absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neutral-200 transform rotate-45 border-l border-b border-gray-300"></div>
                  {/* Content */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="text-sky-700 font-bold text-base sm:text-lg">{item.company}</span>
                        <span className="text-gray-600 italic text-base sm:text-lg">, {item.role}</span>
                      </div>
                      <span className="text-sm sm:text-base text-sky-700 mt-1 sm:mt-0">{item.date}</span>
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {item.location}
                    </div>
                    <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-0.5">
                      {item.description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;