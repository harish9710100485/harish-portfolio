
import React from 'react';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
const technicalSkills = [
  { name: 'HTML5', progress: 90 },
  { name: 'JavaScript(ES6+)', progress: 80 },
  { name: 'CSS3', progress: 80 },
  { name: 'Bootstrap', progress: 75 },
  { name: 'PHP', progress: 70 },
  { name: 'PostgreSQL', progress: 70 },
  { name: 'WordPress', progress: 80 },
  { name: 'Python', progress: 75 }
];



  const softSkills = [
    'Team Player',
    'Leadership',
    'Always willing to learn',
    'Adaptable'
  ];

  return (
    <section id="skills" className="section animate-fadeInUp">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp animate-delay-100">My Skills</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills with improved style */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-2xl shadow-lg hover-scale">
            <h3 className="text-2xl font-bold mb-8 text-center heading-gradient">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-indigo-500 transition-colors">{skill.name}</span>
                    <span className="bg-indigo-500 text-white px-2 py-0.5 rounded-full text-xs">{skill.progress}%</span>
                  </div>
                  <Progress 
                    value={skill.progress} 
                    className="h-2 bg-indigo-100 dark:bg-indigo-950" 
                    indicatorClassName="bg-indigo-500 dark:bg-indigo-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills with new card style */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl shadow-lg hover-scale">
            <h3 className="text-2xl font-bold mb-8 text-center heading-gradient">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-white dark:bg-muted p-5 rounded-lg text-center shadow-md hover:shadow-xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center heading-gradient">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-muted p-3 rounded-lg shadow-sm animate-fadeInUp animate-delay-200">
                  <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  <p>Tamil (Native)</p>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-muted p-3 rounded-lg shadow-sm animate-fadeInUp animate-delay-300">
                  <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
                  <p>English (Fluent)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise cards with new style */}
          <Card className="overflow-hidden border-indigo-500/20 hover:border-indigo-500 transition-colors hover-scale animate-fadeInUp">
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <CardContent className="p-6 mt-2">
              <h3 className="text-xl font-bold mb-4 heading-gradient">Technical Expertise</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Languages & Web Tech:PHP, JavaScript (ES6+), HTML5, CSS3, Bootstrap.</li>
                <li>Database: PostgreSQL,MySQL.</li>
                <li>Tools & Architecture: RESTful APIs, Git/GitHub, ERP Workflows,WAMP/XAMPP (Local Hosting).</li>
                <li>Platforms & Frameworks: WordPress, WooCommerce, Flask (Python), Flutter.</li>
                <li>Core Competencies: Full-Stack Development , Business Process Automation.</li>
              </ul>
            </CardContent>
          </Card>
          
        <Card className="overflow-hidden border-indigo-500/20 hover:border-indigo-500 transition-colors hover-scale animate-fadeInUp animate-delay-100">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <CardContent className="p-6 mt-2">
            <h3 className="text-xl font-bold mb-4 heading-gradient">MINERVA SOFT | WEB APPLICATION DEVELOPER INTERN</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Jan 2025 – Mar 2025 | Chennai, TN</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Engineered a multi-model sales forecasting pipeline leveraging Linear Regression, Facebook Prophet, ARIMA, SARIMA, and XGBoost, orchestrated in Python to generate high-accuracy predictive insights.</li>
              <li>Designed and optimized data preprocessing workflows using NumPy, Pandas, and Scikit-learn, reducing model training latency by 30%.</li>
              <li>Integrated forecasting outputs with visual analytics dashboards, enabling data-driven business decisions and improving forecast precision by ~25%.</li>
            </ul>
            <p className="mt-3 font-medium text-gray-800 dark:text-gray-200">
              <strong>Tech Stack:</strong> Python (Flask, Pandas, NumPy, Scikit-learn, Prophet, XGBoost, ARIMA/SARIMA) | Virtual Environment for dependency management
            </p>
          </CardContent>
        </Card>

          
          <Card className="overflow-hidden border-indigo-500/20 hover:border-indigo-500 transition-colors hover-scale animate-fadeInUp animate-delay-200">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-indigo-500"></div>
            <CardContent className="p-6 mt-2">
              <h3 className="text-xl font-bold mb-4 heading-gradient">Software Proficiency</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Android Studio (Flutter & Native App)</li>
                <li>Canva (UI Design)</li>
                <li>Adobe Photoshop & Adobe Illustrator</li>
                <li>Git | GitHub</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-indigo-500/20 hover:border-indigo-500 transition-colors hover-scale animate-fadeInUp animate-delay-300">
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <CardContent className="p-6 mt-2">
              <h3 className="text-xl font-bold mb-4 heading-gradient">Hobbies</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gym</li>
                <li>Reading Books</li>
                <li>Playing Video Games</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
