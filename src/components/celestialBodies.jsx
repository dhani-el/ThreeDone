import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function CelestialBody({ref,tiltt=45,texture,size,speed,materialType,position,tilt}) {
    const textureMap = useTexture(texture);
    return (
        <mesh ref={ref} rotation={[THREE.MathUtils.degToRad(tiltt),0, 0]} position={position} >
            <sphereGeometry args={[size,32,32]} />
            {materialType === "basic" ? (
                <meshBasicMaterial map={textureMap} />
            ) : (
                <meshStandardMaterial map={textureMap} />
            )}
        </mesh>
    )
}