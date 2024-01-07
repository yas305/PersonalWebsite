import React, { useLayoutEffect, useRef } from 'react';
import Matter from 'matter-js';
import './Physics.css';
import svg1 from './assets/google-cloud.svg';
import svg2 from './assets/kubernetes.svg';
import svg4 from './assets/dotnet-svgrepo-com.svg';
import svg5 from './assets/google-cloud.svg';
import svg6 from './assets/github-svgrepo-com.svg';
import svg7 from './assets/go-svgrepo-com.svg';
import svg8 from './assets/google-cloud-functions-svgrepo-com.svg';
import svg9 from './assets/heroku-svgrepo-com.svg';
import svg10 from './assets/html-5-svgrepo-com.svg';
import svg11 from './assets/kotlin-svgrepo-com.svg';
import svg12 from './assets/mongodb-svgrepo-com.svg';
import svg13 from './assets/node-js-svgrepo-com.svg';
import svg14 from './assets/postgresql-svgrepo-com.svg';
import svg15 from './assets/python-svgrepo-com.svg';
import svg16 from './assets/kubernetes.svg';
import svg17 from './assets/css-3-svgrepo-com.svg';
import svg18 from './assets/django-icon-svgrepo-com.svg';
import svg19 from './assets/firestore-svgrepo-com.svg';
import svg20 from './assets/terraform-icon-svgrepo-com.svg';
import svg21 from './assets/grafana-svgrepo-com.svg';




function Physics() {
    const sceneRef = useRef(null);
    useLayoutEffect(() => {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Runner = Matter.Runner;

        var engine = Engine.create();

        var canvas = sceneRef.current.querySelector('canvas');
        if (!canvas) {
          canvas = document.createElement('canvas');
          canvas.width = 800;
          canvas.height = 600;
          sceneRef.current.appendChild(canvas);
        }
        
        // Create a renderer
        var render = Render.create({
          canvas: canvas, // Use the existing canvas
          engine: engine,
          options: {
            width: 800,
            height: 600,
            wireframes: false,
            hasBounds: true
          }
        });


        
var svgs = [svg1, svg2,svg4,svg5,svg6,svg7,svg8,svg9,svg10,svg11,svg12,svg13,svg14,svg15,svg16, svg17,svg18,svg19,svg20,svg21];
var bodies = [];

        for (var i = 0; i < svgs.length; i++) {
            // Create a body with the SVG
            var body = Bodies.circle(150, 100, 50, {
              density: 0.04,
              frictionAir: 0.01,
              restitution: 0.8,
              friction: 0.01,
              render: {
                sprite: {
                  texture: svgs[i] // Use the SVG
                }
              }
            });
          
            // Add the body to the bodies array
            bodies.push(body);
          }
console.log(bodies.length);
        var ground = Bodies.rectangle(400, 610, 810, 20, { isStatic: true });
        var leftWall = Bodies.rectangle(-5, 300, 10, 600, { isStatic: true });
        var rightWall = Bodies.rectangle(805, 300, 10, 600, { isStatic: true });
        var topWall = Bodies.rectangle(400, -5, 810, 10, { isStatic: true });
        var bottomWall = Bodies.rectangle(400, 605, 810, 10, { isStatic: true });



        World.add(engine.world, [...bodies, ground, leftWall, rightWall, topWall, bottomWall]);        // Add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.5,
                    render: {
                        visible: true
                    }
                }
            });

        World.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        var runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        // Return a cleanup function
        return () => {
            // Stop the runner
            Runner.stop(runner);
            // Stop the renderer
            Render.stop(render);
            // Remove all bodies from the world
            if (engine) {
                World.clear(engine.world);
                // Clear the engine
                Engine.clear(engine);
                // Set the engine to null to ensure it is garbage collected
                engine = null;
            }
        };
    }, []); // Added empty dependency array

    return <div ref={ sceneRef } className = "physics-container" />;
}

export default Physics;