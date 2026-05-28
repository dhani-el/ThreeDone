import {  useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FirstLesson(){
    const boxMeshRef = useRef(null);

    useFrame((state,delta)=>{
        if(boxMeshRef.current){
            boxMeshRef.current.rotation.y += delta;
        }
    })
    return (
            <mesh ref={boxMeshRef} >
                <boxGeometry />
                <meshBasicMaterial  color={"mediumpurple"} />
            </mesh>
    )
}