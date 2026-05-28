import { Canvas } from "@react-three/fiber";
import FirstLesson from "./FirstRer3FLesson"

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <FirstLesson/>
      </Canvas>
    </div>
  )
}

export default App
