import { Canvas } from "@react-three/fiber";
import FirstLesson from "./FirstRer3FLesson";
import { OrbitControls } from "@react-three/drei";

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <FirstLesson/>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default App
