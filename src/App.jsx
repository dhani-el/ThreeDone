import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { OrbitControls,Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import Exploration from "./buildingExploration"
import PhysicsGround from "./ground";
import Hamburger from "./hamburger";
import PracticeObject from "./practicePhysicsObject";
import CoffeeShop from "./newBuilding";

function App() {
  // {"position":{"x":4.6,"y":0.7,"z":-0.1}}
  const [cameraPosition,setCameraPosition] = useState({x:4.6,y:2.7,z:0.1});
  const [test,settest] = useState(1);
  const [isRigid,setisRigid] = useState(false);
  const {position} = useControls({
    position:{
    value:{x:5.6,y:3.7,z:1.5},
    step:0.1
  }});
  const {rotation} = useControls({
    rotation:{
    value:{x:-1.7,y:1.4,z:1.7},
    step:0.1
  }});




  return (
    <div id="app" >
      <p>This is my react three fiber playground</p>
      <Canvas camera={{position:[position.x,position.y,position.z]}} >
        <OrbitControls enableZoom={true} />
        <Environment files={"./modern_evening_street_1k.hdr"} />
        <ambientLight intensity={8}/>
        <Suspense fallback={<Html>Model is loading...</Html>}>
          <Physics debug >
            {/* <PracticeObject position={[4,0,0]} move={true} /> */}
            {/* <Exploration cameraPositions={position} cameraRotation={rotation} /> */}
            <CoffeeShop/>
            {/* <Hamburger/> */}
            <PhysicsGround/>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
