import { RigidBody } from "@react-three/rapier";
import { useEffect, useState, useRef } from "react";

export default function PracticeObject(){
  const direction = {forward:"forward",backward:"backward",left:"left",right:"right"};
  const [move,setMove] = useState({shouldMove:false,direction:direction.forward});
  const boxRef = useRef(null);

  function handleScroll(e){

    // objectIsMoving = true;

    if (e.deltaY > 0) {
      if (boxRef.current) {
        
        boxRef.current.applyImpulse({ x: -10, y: 0, z: 0 }, true);
        // boxRef.current.
        console.log("moving forward");
      }
    }else{
      boxRef.current.applyImpulse({ x: 10, y: 0, z: 0 }, true);
      console.log("moving back");

    }

    // setTimeout(() => {
    //   objectIsMoving = false;
    // }, 500);

  }

  useEffect(()=>{
    // let objectIsMoving = false;
    console.log(boxRef.current);


    window.addEventListener("wheel",handleScroll);

    return ()=> {window.removeEventListener("wheel",handleScroll);}
  },[])

  return (
            <RigidBody ref={boxRef} position={[0,0,0]} >
              <mesh >
                <boxGeometry args={[2,2,2]} />
                <meshBasicMaterial color={"purple"} />
              </mesh>
            </RigidBody>
  )
}