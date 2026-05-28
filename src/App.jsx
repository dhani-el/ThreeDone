import { Canvas } from "@react-three/fiber";
import FirstLesson from "./FirstRer3FLesson";
import { OrbitControls,Stars } from "@react-three/drei";

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={2} />
        <Stars  />
        <FirstLesson/>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default App
