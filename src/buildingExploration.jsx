import { useEffect,useRef } from "react";
import { useLoader,useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import  "./app.css";
import { RigidBody } from "@react-three/rapier";

export default function Exploration({cameraPositions}){
  const building = useLoader(GLTFLoader,"./coffee_stand.glb");
  const movingMeshRef = useRef();
  // useFrame((state, delta) =>
  // {

  //     state.camera.position.x = cameraPositions.x;
  //     state.camera.position.z = cameraPositions.z;
  //     state.camera.position.y = cameraPositions.y;
  
  //     // ...
  // })
  useEffect(function(){
    console.log("image has loaded");
  },[])

  return  <>
            {/* <mesh>
              <torusKnotGeometry/>
              <meshNormalMaterial/>
            </mesh> */}
            {/* <RigidBody ref = {movingMeshRef} > */}
              <primitive position-y={-1} object={building.scene} />  
            {/* </RigidBody> */}
            <ambientLight intensity={2}/>
          </>
}