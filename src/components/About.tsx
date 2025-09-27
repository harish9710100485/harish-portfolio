
import React from 'react';
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Personal Details</h3>
            <p><strong>Full Name:</strong> Harish P</p>
            <p><strong>Contact:</strong> +91 97101 00485</p>
            <p><strong>Email:</strong> <a href="mailto:pharish2309@gmail.com" className="text-indigo-500 hover:underline">pharish2309@gmail.com</a></p>
            <p className="mt-4">
              Web Application Developer with hands-on experience working on projects like Capex Raising System, 
              Ticket Raising & Closing System, ERP Workflow System, and Forecast Analysis System in Python. 
              Skilled in HTML, CSS, JavaScript, PHP, and Python, with a strong passion for building efficient, scalable, 
              and user-friendly web solutions. Always eager to learn, innovate, and contribute to impactful projects that drive organizational success.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">Education</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>B.Tech in Information Technology</strong> - Tagore Engineering College, Chennai (2020 – 2024) | <strong>CGPA: 7.95</strong></li>
                <li><strong>Higher Secondary Certificate (HSC)</strong> - Saraswathi  Matric Higher Secondary School, Urappakkam (2019 – 2020) | <strong>69.5%</strong></li>
                <li><strong>Secondary School Leaving Certificate (SSLC)</strong> - Ananthavalli Matriculation Higher Secondary School, Urappakkam(2017 – 2018) | <strong>86%</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Internships</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Web Application Developer</strong> - Minervasoft, Chennai (Jan 1 – Apr 30, 2025) (Sales forecasting project using Python)</li>
                <li><strong>ERP Workflow Projects</strong> - Minervasoft, Chennai (2025) Custom ERP modules, ticketing, capex, and forecasting</li>

                
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block w-full max-w-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <a 
                href="https://drive.google.com/file/d/1toQJSFjPLAXKeOVPDdct3vZUEFWUU10p/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition duration-300"
              >
                Download CV
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
