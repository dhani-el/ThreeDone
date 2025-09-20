import { Canvas } from "@react-three/fiber";

import Exploration from "./buildingExploration"

function App() {

  return (
    <div>
      <p>This is my react three fiber playground</p>
      <Canvas>
        <Exploration/>
      </Canvas>
    </div>
  )
}

export default App
