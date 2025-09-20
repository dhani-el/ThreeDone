import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import  "./app.css";

export default function Exploration(){
  const building = useLoader(GLTFLoader,"./coffee_stand.glb")
  return  <>
            <mesh>
              <torusKnotGeometry/>
              <meshNormalMaterial/>
            </mesh>

          <primitive object={building.scene} />  
          </>
}