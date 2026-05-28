import { useTexture } from "@react-three/drei"

export function CelestialBody({ref,texture,size,speed,materialType,position}) {
    const textureMap = useTexture(texture);
    return (
        <mesh ref={ref} position={position} >
            <sphereGeometry args={[size,32,32]} />
            {materialType === "basic" ? (
                <meshBasicMaterial map={textureMap} />
            ) : (
                <meshStandardMaterial map={textureMap} />
            )}
        </mesh>
    )
}