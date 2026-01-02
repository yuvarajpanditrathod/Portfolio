import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import resumePDF from '../assets/Yuvaraj-Resume.pdf';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Athreya Technologies Pvt. Ltd",
      location: "Hubballi, Karnataka",
      duration: "Feb 2023 - Jun 2023",
      type: "Full-time",
      description: "Developed and maintained a full-stack E-Document Verification System. Designed backend services, improved performance, and mentored junior developers to strengthen delivery and reliability.",
      responsibilities: [
        "Built and deployed the E-Document Verification System using JSP and PHP.",
        "Collaborated with a cross-functional team to deliver a scalable, automated document-processing solution.",
        "Implemented security and input validation to meet compliance and protect user data.",
        "Tuned database queries and system architecture to improve response times and lower resource usage."
      ],
      technologies: ["JSP", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "WAMP Server", "Apache", "Git", "REST APIs"],
      achievements: [
        "Delivered the project ahead of schedule with thorough test coverage.",
        "Automated workflows that significantly reduced manual steps and increased throughput.",
        "Implemented role-based access for multiple user roles to secure workflows.",
        "Mentored junior developers, improving code quality and accelerating delivery."
      ]
    
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "KLE Technological University",
      location: "Hubli, Karnataka",
      duration: "Present",
      CGPA: "7.75"
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      school: "JSS K H Kabbur Institute of Engineering",
      location: "Dharwad, Karnataka",
      duration: "2020 - 2023",
      CGPA: "9.03"
    },
    {
      degree: "High School Education",
      school: "Om English Medium High School",
      location: "Dharwad, Karnataka",
      duration: "2009 - 2019",
      CGPA: "76.64%"
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my development career.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Full-time' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {edu.degree}
                  </h4>
                  <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {edu.school}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {edu.degree === "High School Education" ? "Percentage: " : "CGPA: "}{edu.CGPA}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to know more about my experience?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to discuss my background or potential opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
