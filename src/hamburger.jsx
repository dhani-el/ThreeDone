
import { RigidBody } from "@react-three/rapier"
import { useGLTF } from "@react-three/drei";
import RenderMeshes from "./util component/ModelToMesh";


export default function Hamburger(){
  const model = useGLTF('/newlambo.glb');

 

  return (
    <group scale={[0.01, 0.01, 0.01]}>
      <RenderMeshes gltf={model} />
    </group>
  );


}