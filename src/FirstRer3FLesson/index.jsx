import {  useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CelestialBody } from "../components/celestialBodies";
import earth from "../assets/earth.jpeg";
import mars from "../assets/2k_mars.jpg"
import mecuryTexture from "../assets/2k_mercury.jpg"
import venusTexture from "../assets/2k_venus_surface.jpg"
import jupiterTexture from "../assets/2k_jupiter.jpg"
import saturn from "../assets/2k_saturn.jpg"
import uranus from "../assets/2k_uranus.jpg"
import neptune from "../assets/2k_neptune.jpg"

export default function FirstLesson(){
    const minRotationSpeed = 4
    const mecuryRef = useRef(null);
    const venusRef = useRef(null);
    const marsRef = useRef(null);
    const jupiterRef = useRef(null);
    const earthRef = useRef(null);
    const saturnRef = useRef(null);
    const uranusRef = useRef(null);
    const neptuneRef = useRef(null);

    useFrame((state,delta)=>{
        if(earthRef.current){
            mecuryRef.current.rotation.y += delta * (minRotationSpeed/59);
            venusRef.current.rotation.y -= delta *( minRotationSpeed / 243);
            earthRef.current.rotation.y += delta * minRotationSpeed;
            marsRef.current.rotation.y += delta * (minRotationSpeed  / 1.03);
            jupiterRef.current.rotation.y += delta * (minRotationSpeed * 2.4);
            saturnRef.current.rotation.y += delta * (minRotationSpeed * 2.3);
            uranusRef.current.rotation.y += delta * (minRotationSpeed * 1.4);
            neptuneRef.current.rotation.y += delta * (minRotationSpeed * 1.5);
        }
    })
    return (
        <group>
            <CelestialBody tiltt={0.01} position={[0,0,0]} ref={mecuryRef} texture={mecuryTexture} size={0.38} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={177.36} position={[0,0,2.8]} ref={venusRef} texture={venusTexture} size={0.95} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={23.44} position={[0,0,5.2]} ref={earthRef} texture={earth} size={1} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={25.19} position={[0,0,7.7]} ref={marsRef} texture={mars} size={0.53} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={3.13} position={[0,0,21.2]} ref={jupiterRef} texture={jupiterTexture} size={10} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={26.73} position={[0,0,44.3]} ref={saturnRef} texture={saturn} size={8.86} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={97.77} position={[0,0,61.3]} ref={uranusRef} texture={uranus} size={4} speed={0.5} materialType={"standard"}/>
            <CelestialBody tiltt={28.32} position={[0,0,70.9]} ref={neptuneRef} texture={neptune} size={4} speed={0.5} materialType={"standard"}/>
        </group>
    )
}