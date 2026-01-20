
import React from 'react';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
// Frontend Skills
const frontendSkills = [
  { name: 'HTML5', progress: 90 },
  { name: 'CSS3', progress: 80 },
  { name: 'JavaScript(ES6+)', progress: 80 },
  { name: 'Bootstrap', progress: 75 }
];

// Backend Skills
const backendSkills = [
  { name: 'PHP', progress: 70 },
  { name: 'Python', progress: 75 },
  { name: 'Flask', progress: 70 },
  { name: 'RESTful APIs', progress: 70 }
];

// Database Skills
const databaseSkills = [
  { name: 'PostgreSQL', progress: 70 },
  { name: 'MySQL', progress: 70 }
];

// Platforms & Frameworks
const platformSkills = [
  { name: 'WordPress', progress: 80 },
  { name: 'WooCommerce', progress: 75 },
  { name: 'Flutter', progress: 65 }
];

// Tools & Others
const toolSkills = [
  { name: 'Git/GitHub', progress: 75 },
  { name: 'ERP Workflows', progress: 65 },
  { name: 'WAMP/XAMPP', progress: 70 }
];


  const softSkills = [
    'Communication Skills',
    'Leadership',
    'Always willing to learn',
    'Environmentally adjustable'
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
                <li>Web Development: HTML, CSS, JavaScript, SQL</li>
                <li>Database & Backend: PostgreSQL,PHP, REST APIs</li>
                <li>Data visualization: Echart,Power BI</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-indigo-500/20 hover:border-indigo-500 transition-colors hover-scale animate-fadeInUp animate-delay-100">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardContent className="p-6 mt-2">
              <h3 className="text-xl font-bold mb-4 heading-gradient">Language Proficiency</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-500 hover:bg-orange-600">HTML, CSS</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">Javascript</Badge>
                <Badge className="bg-cyan-500 hover:bg-cyan-600">PostgreSQL</Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600">PHP</Badge>
              </div>
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
