import React, { useLayoutEffect, useRef } from 'react';
import Matter from 'matter-js';
import './Physics.css';

// Import your SVGs
import svg1 from './assets/google-cloud.svg';
import svg2 from './assets/kubernetes.svg';

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

        // Create a renderer
        var render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                wireframes: false
            }
        });

        var ball = Bodies.circle(400, 200, 50, {
            density: 0.04,
            frictionAir: 0.01,
            restitution: 0.8,
            friction: 0.01,
            render: {
                sprite: {
                    texture: svg1 // Use the imported SVG
                }
            }
        });

        var anotherBody = Bodies.rectangle(100, 100, 50, 50, {
            render: {
                sprite: {
                    texture: svg2 // Use the other imported SVG
                }
            }
        });

        var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
        var leftWall = Bodies.rectangle(-5, 300, 10, 600, { isStatic: true });
        var rightWall = Bodies.rectangle(805, 300, 10, 600, { isStatic: true });

        World.add(engine.world, [ball, anotherBody, ground, leftWall, rightWall]);

        // Add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
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