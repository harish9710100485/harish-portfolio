
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectPage = () => {
  const [filter, setFilter] = useState('all');





  
  const projects = [
  {
      id: 1,
      title: 'Smart Healthcare Management System',
      description: 'A web application for managing Healthcare operations and patient records via IoT.',
      image: '',
      category: 'professional',
      technologies: ['HTML', 'CSS', 'JavaScript','Python','PostgreSQL'],
      githubUrl: 'https://github.com/harish9710100485/samrt-healthcare.github.io'
    },

    {
      id: 2,
      title: 'Skin Disease Prediction using Image Processing',
      description: 'A professional website for Image-based skin disease prediction system.',
      image: '',
      category: 'professional',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/Skin-disease-prediction-using-Image-processing'
    },
        {
      id: 3,
      title: 'Data-Forecasting-using-Prophet',
      description: 'Forecasts time series data using Facebook’s Prophet for business, finance, and trend predictions.',
      image: '',
      category: 'professional',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/Data-Forecasting-using-Prophet',
      
    },
    {
      id: 4,
      title: 'SARIMA-Model-for-Time-Series-Forecasting',
      description: 'Implements a SARIMA model for seasonal time series forecasting with periodic pattern handling.',
      image: '',
      category: 'professional',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/SARIMA-Model-for-Time-Series-Forecasting'
    },
        {
      id: 5,
      title: 'Linear_Regression',
      description: 'Simple Linear Regression model to forecast values based on relationships between variables.',
      image: '',
      category: 'professional',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/Linear_Regression'
    },
        {
      id: 6,
      title: 'Hands-on projects',
      description: 'Worked on major client projects like Bonfiglioli, Venture Lighting, and Minerva custom ERP projects',
      image: '',
      category: 'personal',
      technologies: ['HTML', 'CSS', 'JavaScript','PHP','PostgreSQL'],
      status: 'Ongoing Development 🚧'},
    {
      id: 7,
      title: 'Email-Purchase-Prediction',
      description: 'Predicts purchase intent from emails using NLP, TF-IDF vectorization, and Random Forest classifier.',
      image: '',
      category: 'ongoing',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/Email-Purchase-Prediction',
      status: 'Ongoing Development 🚧'
    },
        {
      id: 8,
      title: 'Email Conversion Prediction Model',
      description: 'Predicts customer purchase likelihood from email text using Logistic Regression and text preprocessing.',
      image: '',
      category: 'ongoing',
      technologies: ['Python'],
      liveUrl: 'https://github.com/harish9710100485/Email-Conversion-Prediction-Model',
      status: 'Ongoing Development 🚧'
    },
        {
      id: 9,
      title: 'Client Interaction Tracker',
      description: 'Python script that simulates client interactions and logs outcomes to a CSV.',
      image: '',
      category: 'ongoing',
      technologies: ['Python'],
      githubUrl: 'https://github.com/harish9710100485/Client-Interaction-Tracker',
      status: 'Ongoing Development 🚧'
    },




  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <div className="h-1 w-20 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work, personal projects, and contributions. 
                Each project represents different skills and technologies I've worked with.
              </p>
            </div>

            <div className="flex justify-center items-center mb-12">
              <div className="flex gap-2 items-center border rounded-lg p-2 bg-card">
                <Filter className="h-5 w-5 text-muted-foreground mr-2" />
                <Button
                  variant={filter === 'all' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'personal' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('personal')}
                >
                  Personal
                </Button>
                <Button
                  variant={filter === 'professional' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('professional')}
                >
                  Professional
                </Button>
                <Button
                  variant={filter === 'ongoing' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setFilter('ongoing')}
                >
                  Ongoing
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                    {/* Replace with actual image when available */}
                    Project Image
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    {project.status && (
                      <div className="mt-4 text-amber-500 font-medium">
                        {project.status}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="mr-2">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo Video
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
