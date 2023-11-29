import React, {useRef, useEffect} from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const STRETCH_FACTOR = 1.5;


const Scene = ({overlay_content, scene_type}) => {
  const mountRef = useRef(null);
  
  const updateRenderer = (renderer) => {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 
        window.innerHeight*STRETCH_FACTOR);
  };
  const updateCamera = (camera) => {
    camera.aspect = window.innerWidth / (window.innerHeight * STRETCH_FACTOR);
    camera.updateProjectionMatrix();
    
  };
  const addLighting = (scene) => {
    const ambientLight = new THREE.AmbientLight(
        0xffffff,
        5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(
        0xffffff, // color
        100 // intensity
        );
    pointLight.position.set(1, 1, 1);
    scene.add(pointLight);
  }
  const drawMountain = (scene, i , z) => {
    const X_SPACING = 15; // 12
    const offset = X_SPACING * (Math.random() - 0.5)
    const x = X_SPACING*i + offset;
    const DISTANCE_Z = 20;
    const center = new THREE.Vector3(x , 0, z - DISTANCE_Z);

    
    const mountainHeight = Math.random() * 20 + 20;
    const mountainWidthFront = Math.random() * 5 + 5;
    const mountainWidthSide = Math.random() * 5 + 5;
    
    // Line material
    const LIGHT_BLUE = 0x00ffff;
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const pointsSide = [];
    pointsSide.push( new THREE.Vector3(center.x -mountainWidthSide, center.y , center.z));
    pointsSide.push( new THREE.Vector3(center.x , center.y + mountainHeight, center.z));
    pointsSide.push( new THREE.Vector3(center.x + mountainWidthSide, center.y, center.z));
    const geometrySide = new THREE.BufferGeometry().setFromPoints(pointsSide);

    const pointsFront = [];
    pointsFront.push(new THREE.Vector3(center.x, center.y, center.z  - mountainWidthFront));
    pointsFront.push(new THREE.Vector3(center.x, center.y + mountainHeight, center.z ))
    pointsFront.push(new THREE.Vector3(center.x, center.y, center.z + mountainWidthFront));
    const geometryFront = new THREE.BufferGeometry().setFromPoints(pointsFront);
    
    const pointsBase = [];
    pointsBase.push( new THREE.Vector3(center.x -mountainWidthSide, center.y , center.z));
    pointsBase.push(new THREE.Vector3(center.x, center.y, center.z - mountainWidthFront));
    pointsBase.push( new THREE.Vector3(center.x + mountainWidthSide, center.y, center.z));
    pointsBase.push(new THREE.Vector3(center.x, center.y, center.z + mountainWidthFront));
    pointsBase.push( new THREE.Vector3(center.x -mountainWidthSide, center.y , center.z));
    const geometryBase = new THREE.BufferGeometry().setFromPoints(pointsBase);

    
    const NUM_MID_SEGMENTS = 6;
    for (let i = 0; i < NUM_MID_SEGMENTS; i++) {
        const pointsMid = [];
        pointsMid.push(new THREE.Vector3(
            center.x - (NUM_MID_SEGMENTS-i)*mountainWidthSide/NUM_MID_SEGMENTS, 
            center.y + i*mountainHeight/NUM_MID_SEGMENTS, 
            center.z));

        pointsMid.push(new THREE.Vector3(
            center.x, 
            center.y + i*mountainHeight/NUM_MID_SEGMENTS, 
            center.z - (NUM_MID_SEGMENTS-i)*mountainWidthFront/NUM_MID_SEGMENTS));

        pointsMid.push( new THREE.Vector3(
            center.x + (NUM_MID_SEGMENTS-i)*mountainWidthSide/NUM_MID_SEGMENTS, 
            center.y + i*mountainHeight/NUM_MID_SEGMENTS, 
            center.z));

        pointsMid.push(new THREE.Vector3(
            center.x, 
            center.y + i*mountainHeight/NUM_MID_SEGMENTS, 
            center.z + (NUM_MID_SEGMENTS-i)*mountainWidthFront/NUM_MID_SEGMENTS));
        
        pointsMid.push( new THREE.Vector3(
            center.x -(NUM_MID_SEGMENTS-i)*mountainWidthSide/NUM_MID_SEGMENTS, 
            center.y + i*mountainHeight/NUM_MID_SEGMENTS, 
            center.z));

        const geometryMid = new THREE.BufferGeometry().setFromPoints(pointsMid);
        const lineMid = new THREE.Line(geometryMid, material);
        scene.add(lineMid);

    }

    // the grid lines vertically
    const NUM_VERTICAL_LINES = 3;
    for (let s = 0; s < 4; s++) {
        const points = [];
        for (let i = 0; i < NUM_VERTICAL_LINES; i++) {
            if (s === 0) {
                points.push(new THREE.Vector3(
                    center.x - i*mountainWidthSide/NUM_VERTICAL_LINES, 
                    center.y, 
                    center.z - i*mountainWidthFront/NUM_VERTICAL_LINES
                    )
                );
            }
            else if (s === 1) {
                points.push(new THREE.Vector3(
                    center.x + i*mountainWidthSide/NUM_VERTICAL_LINES, 
                    center.y, 
                    center.z - i*mountainWidthFront/NUM_VERTICAL_LINES
                    )
                );
            }
            else if (s === 2) {
                points.push(new THREE.Vector3(
                    center.x + i*mountainWidthSide/NUM_VERTICAL_LINES, 
                    center.y, 
                    center.z + i*mountainWidthFront/NUM_VERTICAL_LINES
                    )
                );
            }
            else if (s === 3) {
                points.push(new THREE.Vector3(
                    center.x - i*mountainWidthSide/NUM_VERTICAL_LINES, 
                    center.y, 
                    center.z + i*mountainWidthFront/NUM_VERTICAL_LINES
                    )
                );
            }
            
            points.push(new THREE.Vector3(
                center.x,
                center.y + mountainHeight,
                center.z
            ))
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, material);
            scene.add(line);
        }
        
    }

    const lineSide = new THREE.Line(geometrySide, material);
    const lineFront = new THREE.Line(geometryFront, material);
    const lineBase = new THREE.Line(geometryBase, material);

    // Add line to scene
    scene.add(lineSide);
    scene.add(lineFront);
    scene.add(lineBase);

};

  const drawSpaceScene = (scene) => {
    // grid
    const gridColor = 0x0000ff; 
    const gridHelper = new THREE.GridHelper(
        400, // a 400x400 grid (length on one side)
         100, // amount of lines
        gridColor,
        gridColor
    )
    scene.add(gridHelper);

    const NUM_MOUNTAINS = 10; // for x
    const z_center = -50;
    const z_width = 70;
    const Z_SPACING = 10; // 5
    const X_SPACING = 20;
    const COLOR_CONE = 0x0000ff;

    const Cone = (x,z) => {
        const z_offset = z - z_center;
        let HEIGHT = 120/(Math.abs(.07*x)+Math.abs(.1*z_offset)+1);
         
        //const heightBoost = -30/x;
        const segments = Math.floor(Math.random() * 3) + 7;
        
        const WIDTH = 12;//Math.min(10, Math.abs(.1*x)+Math.abs(.1*z_offset) + 5); //Math.random() * 5 + 10;
        const geometry = new THREE.ConeGeometry(WIDTH, HEIGHT, segments); 
        const material = new THREE.MeshBasicMaterial( 
            {color: COLOR_CONE, wireframe: true} );
        const cone = new THREE.Mesh(geometry, material ); 
        cone.position.set(x, HEIGHT/2, z);

        // Set rotation
        cone.rotation.set(0, Math.PI * Math.random(), 0);
        return cone;
    }
    
    for(let i = -NUM_MOUNTAINS; i < NUM_MOUNTAINS + 1; i++) {
        let new_z_width = z_width;
        if (i !== 0) {
            new_z_width = z_width - 10*Math.abs(i)^2;
        }
        
        for(let z = z_center + new_z_width; z > (z_center - new_z_width); z-= Z_SPACING) {
            const X_OFFSET = X_SPACING*(Math.random() - 0.5);
            const x = X_SPACING*i +  X_OFFSET;
            scene.add(Cone(x, z, z_center));
            //drawMountain(scene, i, z);
        }
    }
    
    addLighting(scene);
  };
  const drawTorusScene = (scene) => {
    const RADIUS_HOLE = 5;
    const RADIUS_TUBE = 1;
    const geometry = new THREE.TorusGeometry(
        RADIUS_HOLE, // radius of donut hole (the hole in the torus)
        RADIUS_TUBE // radius of tube
    ); // the vectors that define the shape

    const basicMaterial = new THREE.MeshBasicMaterial(
        { color: 0x0000ff, 
            wireframe: true }
    ); // the mesh

    const torus = new THREE.Mesh(geometry, basicMaterial);
    scene.add(torus);
    
    const NUM_TORUS = 10;
    const SPACING = RADIUS_HOLE + RADIUS_TUBE + RADIUS_TUBE/2; // distance between the centers of each torus
    

    for (let i = 0; i < NUM_TORUS; i++) {
        const torus_left = new THREE.Mesh(geometry, basicMaterial);
        const torus_right = new THREE.Mesh(geometry, basicMaterial);

        // Position each torus
        torus_left.position.x = -i * SPACING;
        torus_right.position.x = i * SPACING;

        // rotate every odd torus 
        if (i % 2 === 1) {
            torus_left.rotation.x = Math.PI / 2; 
            torus_right.rotation.x = Math.PI / 2; 
        }
        
        scene.add(torus_left);
        scene.add(torus_right);
    }
    addLighting(scene);
  };

  useEffect(() => {
    // create a scene (a container)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75 // field of view
        , window.innerWidth/(window.innerHeight * STRETCH_FACTOR) // aspect ratio
        , 0.1 // view frustrum
        , 1000 // far
    );
    
    const renderer = new THREE.WebGLRenderer();
    updateRenderer(renderer);

    // add the rendered to the useRef to be saved
    mountRef.current.appendChild(renderer.domElement); 

    if (scene_type === "TITLE") {
        camera.position.set(0, 2, 100); // left right, up down, in out
        drawSpaceScene(scene); // adds lighting, mountains, and grid
    }
    else if (scene_type === "SKILLS") {
        camera.position.set(-4.5, 28, 9.7); // left right, up down, in out
        drawTorusScene(scene);
    }

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement); // listens to dom events on the mouse
    controls.enableZoom = false;
    
    // rendering conditionally variable
    let needsRender = true; // render the scene once at start

    // listen to orbit control events
    controls.addEventListener('change', () => {
        needsRender = true;
    });
    
    controls.addEventListener('start', () => {
        needsRender = true;
    });
    
    controls.addEventListener('end', () => {
        needsRender = true;
    });
    
    // resizing the window 
    const handleResize = () => {
        // Update camera
        updateCamera(camera);

        // Update renderer
        updateRenderer(renderer);
        needsRender = true; // Ensure the scene is re-rendered on resize
    };
    window.addEventListener('resize', handleResize);

    // anim loop
    const animate = () => {
        requestAnimationFrame(animate); // 60 fps
        //console.log(camera.position);

        // orbit controls update
        controls.update();

        // actually render
        if (needsRender) {
            renderer.render(scene, camera);
            needsRender = false;
        }
    };

    animate();

    return () => {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();

        // Cancel the animation frame
        cancelAnimationFrame(animate);
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className="scene-container">
        <div ref={mountRef} className="canvas"/>
        <div className="overlay-content">
            {overlay_content}
        </div>
    </div>
  )
}

export default Scene;
