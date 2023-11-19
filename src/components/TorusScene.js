import React, {useRef, useEffect} from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TorusScene = ({overlay_content}) => {
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
    renderer.setSize(window.innerWidth, 1.2*window.innerHeight);

    // add the rendered to the useRef to be saved
    mountRef.current.appendChild(renderer.domElement); 
    
    // reset the camera position
    let angle = 0;
    const orbitRadius = 20;
    camera.position.set(0, 0, 30); // left right, up down, in out
    
    // add in objects to the scene
    const geometry = new THREE.TorusGeometry(20, 10); // the vectors that define the shape
    const basicMaterial = new THREE.MeshBasicMaterial(
        { color: 0x0000ff, 
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
    const torus = new THREE.Mesh(geometry, basicMaterial);
    scene.add(torus);

    // grid
    const gridColor = 0x0000ff;
    const gridHelper = new THREE.GridHelper(
        200, // a 400x400 grid (length on one side)
         50, 
        gridColor,
        gridColor
    )
    //scene.add(gridHelper);
    
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

    // anim loop
    const animate = () => {
        requestAnimationFrame(animate);
        //console.log(camera.position);

        // orbit controls update
        controls.update();
        torus.rotateX(0.001);
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

export default TorusScene;
