import {  useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CelestialBody } from "../components/celestialBodies";
import earth from "../assets/earth.jpeg";
import mars from "../assets/2k_mars.jpg"

export default function FirstLesson(){
    const earthRef = useRef(null);
    const marsRef = useRef(null);

    useFrame((state,delta)=>{
        if(earthRef.current){
            earthRef.current.rotation.y += delta * 3;
            marsRef.current.rotation.y -= delta;
        }
    })
    return (
        <group>
            <CelestialBody position={[0,0,0]} ref={earthRef} texture={earth} size={1} speed={0.5} materialType={"standard"}/>
            <CelestialBody position={[0,0,3]} ref={marsRef} texture={mars} size={1} speed={0.5} materialType={"standard"}/>
        </group>
    )
}