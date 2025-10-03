import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML/CSS", level: 92, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-cyan-600" },
        { name: "Bootstrap", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-orange-500" },
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 82, color: "from-gray-700 to-gray-900" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Python / Flask", level: 80, color: "from-blue-500 to-yellow-500" },
        { name: "MongoDB", level: 82, color: "from-green-600 to-green-800" },
        { name: "MySQL", level: 78, color: "from-blue-600 to-indigo-600" },
        { name: "REST APIs (Postman)", level: 90, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-red-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 70, color: "from-yellow-600 to-orange-600" },
        { name: "Firebase", level: 80, color: "from-yellow-500 to-red-500" },
        { name: "Figma", level: 72, color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 95, color: "from-blue-600 to-blue-800" }
      ]
    }
  ];

  const certifications = [

    { name: "Internship Certificate – Full Stack Development", issuer: "Athreya Technologies Pvt. Ltd.", year: "2023" },
    { name: "Research Paper Presentation & Publication – Hospital Readmission Risk Prediction using Ensemble Learning", issuer: "3rd International Conference on Futuristic Technologies (INCOFT 2025), Pune, India", year: "2025" },
    { name: "Research Paper Presentation & Publication – Cyber Threat Detection and Prevention using AI-ML Model Hybrid Approach", issuer: "1st International Conference on Artificial Inteligence and Computing (ICAIC 2025), Jaipur, India", year: "2025" }
  ];

  return (
  <section id="skills" className="min-h-screen py-20 bg-transparent dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <span className="mr-3 text-gray-500">•</span>
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Technical Proficiencies */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Frontend</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Responsive Design</li>
                  <li>• Component Architecture</li>
                  <li>• State Management</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">Backend</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• API Development</li>
                  <li>• Database Design</li>
                  <li>• Authentication</li>
                  <li>• Server Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Analytical Problem Solving</li>
                    <li>• Collaborative Teamwork</li>
                    <li>• Clear Communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Professional Traits</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Project Leadership</li>
                    <li>• Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="flex justify-center flex-wrap gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-transparent dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 w-full max-w-xs flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing digital experiences.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
