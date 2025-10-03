import { useEffect,useRef, useState } from "react";
import { useLoader,useFrame,useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import  "./app.css";
import { RigidBody } from "@react-three/rapier";
import gsap from "gsap";

export default function Exploration({cameraPositions,cameraRotation}){
  const building = useLoader(GLTFLoader,"./coffee_stand.glb");
  const movingMeshRef = useRef();
  const {camera} = useThree();
  const [scrollStep,setScrollStep] = useState(0);
  const averageTimeForOneAnimationToComplete = 1000;
  const maxSteps = 3;

  // use effect for testing with leva
  useEffect(()=>{
    camera.position.x = cameraPositions.x;
    camera.position.y = cameraPositions.y;
    camera.position.z = cameraPositions.z;
    // console.log(camera.rotation);
    camera.rotation.x = cameraRotation.x;
    camera.rotation.y = cameraRotation.y;
    camera.rotation.z = cameraRotation.z;
  },[camera,cameraPositions,cameraRotation]);

  // use effect with the scroll listener
  useEffect(()=>{
    let isScrolling = false;

    function handleScroll(e){

      if (isScrolling) {
        return
      }

      isScrolling = true;
      if (e.deltaY > 0) {
        setScrollStep((init)=> Math.min(init + 1,maxSteps));
        console.log("scrolled down");
      }else{
        setScrollStep((init)=> Math.max(0,init - 1));
        console.log("scrolled up");
      }

      if(scrollStep < maxSteps || scrollStep > 0)

      setTimeout(() => {
        isScrolling = false;
      }, averageTimeForOneAnimationToComplete);

    }

    window.addEventListener("wheel",handleScroll);

    return ()=>window.removeEventListener("wheel",handleScroll);

  },[]);

  useEffect(()=>{
    // use Effect to look into a model
    console.log(building);
  },[])

  useEffect(()=>{
    switch(scrollStep){
      case 0:gsap.to(camera.position,{ x: 4.6, y: 0.7, z: -0.1, duration: 1 });
      break;
      case 1:gsap.to(camera.position,{ x: 2.6, y: 0.7, z: -0.1, duration: 1 });
      break;
      case 2:gsap.to(camera.position,{ x: 1.6, y: 0.5, z: -0.1, duration: 1 });
      break;
      case 3:gsap.to(camera.position,{ x: 0.6, y: 0.7, z: -0.1, duration: 1 });
      break;
    }
    console.log(scrollStep);
  },[scrollStep])

  return  <>
            {/* <mesh>
              <torusKnotGeometry/>
              <meshNormalMaterial/>
            </mesh> */}
            {/* <RigidBody ref = {movingMeshRef} colliders= "trimesh" > */}
            <RigidBody ref = {movingMeshRef}  >
              <primitive position-y={-1} object={building.scene} />  
            </RigidBody>
            <ambientLight intensity={2}/>
          </>
}