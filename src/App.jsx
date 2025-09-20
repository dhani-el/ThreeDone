import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";

import Exploration from "./buildingExploration"
import { Physics } from "@react-three/rapier";

function App() {
  
  const [cameraPosition,setCameraPosition] = useState({x:0.5,y:0.7,z:0.5});
  const [test,settest] = useState(1);

  function handleKeyPress(key){
    console.log(cameraPosition);
    settest((init)=> init +=1)
    console.log(key);
    console.log(test);
    switch(key){
      case "w":  setCameraPosition((init)=>({...init,y:init.y + 0.2}));
      break;
      case "a":  setCameraPosition((init)=>({...init,x:init.x + 0.2}));
      break;
      case "s":  setCameraPosition((init)=>({...init,x:init.x - 0.2}));
      break;
      case "d":  setCameraPosition((init)=>({...init,y:init.y - 0.2}));
      break;
      case "q":  setCameraPosition((init)=>({...init,z:init.z + 0.2}));
      break;
      case "r":  setCameraPosition((init)=>({...init,z:init.z - 0.2}));
      break;
      default :  setCameraPosition((init)=>({...init,z:init.z - 0.2}));
    }
  }

  // useEffect(()=>{
  //   window.addEventListener("keypress",(e)=>{
  //     handleKeyPress(e.key);
  //   });

  // },[])

  useEffect(()=>{
    console.log(test);
    console.log(cameraPosition);
    
  },[test])


  return (
    <div id="app" >
      <p>This is my react three fiber playground</p>
      <Canvas camera={{position:[cameraPosition.x,cameraPosition.y,cameraPosition.z]}} >
        <OrbitControls/>
        <Suspense fallback={<Html>Model is loading...</Html>}>
          <Physics debug>
            <Exploration cameraPositions={cameraPosition} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
