import { RigidBody } from "@react-three/rapier"
import { useGLTF } from "@react-three/drei";
import RenderMeshes,{RenderMeshesRigidAvatar} from "./util component/ModelToMesh";
import { useEffect,useRef } from "react";


export default function CoffeeShop(){
  const model = useGLTF("./coffe_shop_with_an_avatar.glb");

  const avatarRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      console.log(avatarRef.current);
    }, 5000);
  },[])
 

  return (
    <group >
      <RigidBody>
        <RenderMeshesRigidAvatar gltf={model} ref={avatarRef} />
      </RigidBody>
    </group>
  );


}