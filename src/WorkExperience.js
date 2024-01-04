// import React from 'react';
import './WorkExperience.css'; // Make sure to create a corresponding CSS file
import TechLogoSVG1 from './assets/google-cloud.svg';
import TechLogoSVG2 from './assets/kubernetes.svg';
import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

const experiences = [
  // Array of experience objects (replace with your actual data)
  {
    id: 1,
    technologies: [
      { name: 'TechName1', logo: TechLogoSVG1 }, // TechLogoSVG1 is the SVG or the import path to it
      { name: 'TechName2', logo: TechLogoSVG2 },],
    title: "Technical Consultant",
    company: "Ceox Services",
    duration: "Sept 2023 - Present",
    description: `As a Technical Consultant, I played a key role in developing and deploying Power Platform applications for the public sector, utilizing Microsoft technologies like Power Automate, Dataverse, and Azure. I excelled in translating client needs into technical specifications, leading organizational change by integrating GitHub for app development, and managing the DevOps board to drive projects from inception to deployment. My collaborative approach bridged gaps between technical and non-technical stakeholders, ensuring alignment with business objectives. Committed to continuous learning, I stayed at the forefront of DevOps and Azure advancements, earning recognition for my dedication to technology excellence and client satisfaction. 
    `,
    // More fields as needed
  },
  {
    id: 2,
    technologies: [
      { name: 'TechName1', logo: TechLogoSVG1 }, // TechLogoSVG1 is the SVG or the import path to it
      { name: 'TechName2', logo: TechLogoSVG2 },],
    title: "Software Engineer",
    company: "Pexip AS",
    duration: "July 2022 - Sept 2022",
    description: `As a Software Engineer at Pexip, I engineered custom Grafana metrics and logging solutions for performance optimization, utilized the Microsoft Graph REST API for service integration, and managed both cloud-based and on-premise services to meet SLAs. I was instrumental in leveraging Azure for infrastructure management and Terraform for resource configuration, while orchestrating containerized applications with Kubernetes to ensure scalable deployments. 
    `,
    // More fields as needed
  },
  {
    id: 3,
    technologies: [
      { name: 'TechName1', logo: TechLogoSVG1 }, // TechLogoSVG1 is the SVG or the import path to it
      { name: 'TechName2', logo: TechLogoSVG2 },],
    title: "Group Leader",
    company: "University of Nottingham",
    duration: "Sept 2021 - July 2022",
    description: `As the Group Leader for a university software engineering project, I led a team of five, driving the project to successful completion. My role included providing code support, managing version control with Git, and strengthening the team's research skills. I utilized Jira for project management, effectively assigning tasks and monitoring progress.
    `,
    // More fields as needed
  }
  // More experiences...
];

const ExperienceCard = ({ experience }) => {
  const sceneRef = useRef(); // Reference to the scene container

  const setupMatter = () => {
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 500,
        height: 300,
        wireframes: false,
        hasBounds: true,
      },
    });

    // Create bodies for each SVG
    const svgs = experience.technologies.map((tech, index) => {
      // Start SVGs from the top of the parent div
      return Matter.Bodies.circle(100 + index * 80, -30, 100, {
        restitution: 0.9, // Set restitution to make them bouncy
        render: {
          sprite: {
            texture: tech.logo,
            xScale: 0.6,
            yScale: 0.6,
          },
        },
      });
    });
    render.options.background = 'green';

    Matter.World.add(engine.world, svgs);
    const ground = Matter.Bodies.rectangle(250, 310, 500, 60, { isStatic: true });
    Matter.World.add(engine.world, ground);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Return cleanup function
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      if (render.textures) {
        render.textures = {};
      }
    };
  };

  useEffect(() => {
    // Set up the scene once on component mount
    const cleanupFunction = setupMatter();
  
    const cardElement = sceneRef.current.parentNode;
    const canvasElement = sceneRef.current.querySelector('canvas');
  
    const handleMouseEnter = () => {
      cardElement.classList.add("blur-content");
      // Show the canvas when the mouse enters
      if (canvasElement) {
        canvasElement.style.display = 'block';
      }
    };
  
    const handleMouseLeave = () => {
      cardElement.classList.remove("blur-content");
      // Hide the canvas when the mouse leaves
      if (canvasElement) {
        canvasElement.style.display = 'none';
      }
    };
  
    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);
  
    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
      cleanupFunction(); // Clean up the scene when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="experience-card">
      <h3>{experience.title} @ {experience.company}</h3>
      <p className="experience-duration">{experience.duration}</p>
      <p>{experience.description}</p>
      <div className="tech-logos" ref={sceneRef}></div> {/* This is where the Matter.js scene will attach */}
    </div>
  );
};

// export default ExperienceCard;
const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default WorkExperience;