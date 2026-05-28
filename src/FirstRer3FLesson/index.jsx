import {  useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CelestialBody } from "../components/celestialBodies";
import earth from "../assets/earth.jpeg";

export default function FirstLesson(){
    const boxMeshRef = useRef(null);

    useFrame((state,delta)=>{
        if(boxMeshRef.current){
            boxMeshRef.current.rotation.y += delta * 2;
        }
    })
    return (
        <CelestialBody ref={boxMeshRef} texture={earth} size={1} speed={0.5} materialType={"standard"}/>
    )
}