import { useTexture } from "@react-three/drei"

export function CelestialBody({ref,texture,size,speed,materialType}) {
    const textureMap = useTexture(texture);
    return (
        <mesh ref={ref} >
            <sphereGeometry args={[size,32,32]} />
            {materialType === "basic" ? (
                <meshBasicMaterial map={textureMap} />
            ) : (
                <meshStandardMaterial map={textureMap} />
            )}
        </mesh>
    )
}