import { RigidBody, vec3 } from "@react-three/rapier";
import { useEffect, useState, useRef } from "react";
import { useThree } from "@react-three/fiber";

export default function PracticeObject(){
  const direction = {forward:"forward",backward:"backward",left:"left",right:"right"};
  const [move,setMove] = useState({shouldMove:false,direction:direction.forward});
  const boxRef = useRef(null);
  const {camera} = useThree();
  const [cameraPosition, setCameraPosition] = useState(null)




  useEffect(()=>{
    let objectIsMoving = false;
    // console.log(boxRef.current);

    function handleScroll(e){

      if (objectIsMoving) {
        return ;
      }
  
      objectIsMoving = true;
  
      if (e.deltaY > 0) {
        if (boxRef.current) {
          boxRef.current.applyImpulse({ x: -10, y: 0, z: 0 }, true);
          // boxRef.current.
          setCameraPosition(()=>vec3(boxRef.current.translation()));
          console.log(vec3(boxRef.current.translation()));
          console.log("moving forward");
        }
      }else{
        boxRef.current.applyImpulse({ x: 10, y: 0, z: 0 }, true);
        setCameraPosition(()=>vec3(boxRef.current.translation()));
        console.log(vec3(boxRef.current.translation()));
        console.log("moving back");
  
      }
  
      setTimeout(() => {
        objectIsMoving = false;
      }, 250);
  
    }

    window.addEventListener("wheel",handleScroll);

    return ()=> {window.removeEventListener("wheel",handleScroll);}
  },[])

  useEffect(()=>{
    if (cameraPosition) {
      camera.position.x = cameraPosition.x;
      // camera.position.y = cameraPosition.y;
      camera.position.z = cameraPosition.z;
    }
  },[cameraPosition])

  return (
            <RigidBody ref={boxRef} position={[0,0,0]} >
              <mesh >
                <boxGeometry args={[2,2,2]} />
                <meshBasicMaterial color={"purple"} />
              </mesh>
            </RigidBody>
  )
}