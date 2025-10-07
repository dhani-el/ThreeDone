
import { RigidBody } from "@react-three/rapier"


export default function PhysicsGround(){
  return (
          // <RigidBody type="fixed" >
            <mesh position-y = {-1.25} >
              <meshBasicMaterial color={"yellowgreen"}/>
              <boxGeometry args={[20,0.5,20]} />
            </mesh>
          )
}