import React, {useRef, useEffect} from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import image from './green-stars.jpg';

const SpaceScene = ({overlay_content}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // create a scene (a container)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75 // field of view
        , window.innerWidth/window.innerHeight // aspect ratio
        , 0.1 // view frustrum
        , 1000 // far
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the rendered to the useRef to be saved
    mountRef.current.appendChild(renderer.domElement); 
    
    // reset the camera position
    let angle = 0;
    const orbitRadius = 20;
    camera.position.set(0, 5, 20); // left right, up down, in out
    
    // add in objects to the scene
    const geometry = new THREE.BoxGeometry(); // the vectors that define the shape
    const basicMaterial = new THREE.MeshBasicMaterial(
        { color: 0x00ff00, 
            wireframe: true }
    ); // the mesh

    // a mesh that reacts to lighting
    const material = new THREE.MeshStandardMaterial(
        {color: 0x00ff00,
        }
    )
    const phong_material = new THREE.MeshPhongMaterial(
        {color: 0xff0000}
    )
    const cube = new THREE.Mesh(geometry, phong_material);
    //scene.add(cube);

    // grid
    const gridColor = 0x0000ff;
    const gridHelper = new THREE.GridHelper(
        200, // a 400x400 grid (length on one side)
         50, 
        gridColor,
        gridColor
    )
    scene.add(gridHelper);

    const drawMountain = () => {
        const mountainCenter = [0, 0, -20];
        const mountainHeight = 20;
        const mountainWidthFront = 5;
        const mountainWidthSide = 5;

        const pointsSide = [];
        pointsSide.push(new THREE.Vector3(-mountainWidthSide, 0, mountainCenter[2]));
        pointsSide.push(new THREE.Vector3(0, mountainHeight, mountainCenter[2]));
        pointsSide.push(new THREE.Vector3(mountainWidthSide, 0, mountainCenter[2]));
        const geometrySide = new THREE.BufferGeometry().setFromPoints(pointsSide);

        const pointsFront = [];
        pointsFront.push(new THREE.Vector3(0, 0, mountainCenter[2] - mountainWidthFront));
        pointsFront.push(new THREE.Vector3(0, mountainHeight, mountainCenter[2]))
        pointsFront.push(new THREE.Vector3(0, 0, mountainCenter[2] + mountainWidthFront));
        const geometryFront = new THREE.BufferGeometry().setFromPoints(pointsFront);
        // Line material
        const material = new THREE.LineBasicMaterial({ color: 0x00ffff });

        // Line
        const lineSide = new THREE.Line(geometrySide, material);
        const lineFront = new THREE.Line(geometryFront, material);
        // Add line to scene
        scene.add(lineSide);
        scene.add(lineFront);
    };
    //drawMountain();
    const NUM_MOUNTAINS = 10;
    const Cone = (i,z) => {
        const segments = Math.floor(Math.random() * 3) + 4;
        const HEIGHT = Math.random() * 20 + 5;
        const WIDTH = Math.random() * 5 + 3;
        const geometry = new THREE.ConeGeometry(WIDTH, HEIGHT, segments); 
        const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, wireframe: true} );
        const cone = new THREE.Mesh(geometry, material ); 
        const spacing = 12;
        const offset = spacing * (Math.random() - 0.5)
        const x = spacing*i + offset;
        cone.position.set(x, HEIGHT/2, z);

        // Set rotation
        cone.rotation.set(0, Math.PI/2, 0);
        return cone;
    }
    
    let start = -5;
    const z_closest = -10;
    const z_farthest = -60;
    for(let z = z_closest; z > z_farthest; z-=5) {
        for(let i = start; i < start + NUM_MOUNTAINS + 1; i++) {
            scene.add(Cone(i, z));
        }
    }
    
    

    // lighting
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

    const lightHelper = new THREE.PointLightHelper(pointLight);
    //scene.add(lightHelper);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement); // listens to dom events on the mouse
    controls.enableZoom = false;

    // adding stars
    const stars = [];
    const addStar = (starColor, starSize, position) => {
        const geometry = new THREE.SphereGeometry(
            starSize, // radius
            24, // width segments - the more the more smooth
            24) // height segments
            ;
        //const starColor = 0xffffff; //#FDB813
        const material = new THREE.MeshStandardMaterial({
            color: starColor, // sphere color
            
        });
        const star = new THREE.Mesh(geometry, material);

        star.starColor = starColor;
        star.sparkleDuration = 120;//Math.floor(Math.random() * 60) + 30; // Duration between 30 to 90 frames
        star.sparkleTimer = 0;

        // get a random 3d coord
        if (!position) {
            const [x, y, z] = Array(3).fill().map(
                () => THREE.MathUtils.randFloatSpread(100)
                ) // the fill sets the elements of the length 3 array
            star.position.set(x, y, z);
        }
        else {
            star.position.set(position[0], position[1], position[2]);
        }

        //stars.push(star);
        scene.add(star);
        return star;
    }
    /*
    const NUM_STARS = 1000;
    for (let i = 0; i < NUM_STARS; i++) {
        let star = addStar(0xffffff, 0.16);
        stars.push(star);
    }
    addStar(0xFFCE58, 1, [9, 5, 1]);
    */
    // adding a background image
    let loader = new THREE.TextureLoader();
    //const spaceTexture = loader.load(
    //    image,
    //    () => {
    //        console.log("image loaded successfully");
    //    },
    //    undefined,
    //    (error) => {
    //        console.error("ERROR:", error);
    //    });
    //scene.background = spaceTexture;

    // anim loop
    const animate = () => {
        requestAnimationFrame(animate);
        //console.log(camera.position);

        // rotations and movement
        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;

        // orbit controls update
        controls.update();

        // make all stars sparkle
        const orange = 0xfc9601;
        const red = 0xe31010;
        const lightYellow = 0xffce58;
        const darkOrange = 0xd14009;
        const blue = 0x0000ff;
        const sparkleColors = [red, lightYellow, orange, darkOrange];
        /*
        stars.forEach(star => {
            if (star.sparkleTimer > 0) {
                // Star is currently sparkling
                star.sparkleTimer--;
                if (star.sparkleTimer === 0) {
                    star.material.color.setHex(star.starColor); // Reset to original color
                    //star.material.emissiveIntensity= 1
                }
            } else if (Math.random() > 0.98) { // Adjust probability as needed
                // Start a new sparkle
                console.log("Flickering!")
                star.sparkleTimer = star.sparkleDuration;
                const index =  Math.floor(Math.random() * sparkleColors.length);
                star.material.color.setHex(sparkleColors[index]);
                //star.material.emissiveIntensity = 100
            }
        });*/
    
        // camera rotation
        // Update angle
        //angle += 0.00025; // Adjust the speed of rotation

        // Calculate x, y, z coordinates
        //camera.position.x = orbitRadius * Math.sin(angle);
        //camera.position.y = 0; // Adjust if you want to move up/down
        //camera.position.z = orbitRadius * Math.cos(angle);

      // Make the camera look at the origin
      //camera.lookAt(new THREE.Vector3(0, 0, 0));
        // actually render
        //console.log(camera.position);
        renderer.render(scene, camera);
    };

    animate();

    return () => {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
        // Cancel the animation frame
        cancelAnimationFrame(animate);
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

export default SpaceScene;
