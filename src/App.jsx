import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import Exploration from "./buildingExploration"
import PhysicsGround from "./ground";


function App() {
  // {"position":{"x":4.6,"y":0.7,"z":-0.1}}
  const [cameraPosition,setCameraPosition] = useState({x:4.6,y:0.7,z:-0.1});
  const [test,settest] = useState(1);
  const {position} = useControls({
    position:{
    value:{x:4.6,y:0.7,z:-0.1},
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
        {/* <OrbitControls/> */}
        <Suspense fallback={<Html>Model is loading...</Html>}>
          <Physics debug>
            <Exploration cameraPositions={position} cameraRotation={rotation} />
            <PhysicsGround/>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
