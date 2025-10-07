// RenderMeshes.js
import { Html,Text,Billboard } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'


export default function RenderMeshes({ gltf, clone = true }) {
  // Memoize to avoid re-rendering unnecessarily
  const meshes = useMemo(() => {
    const all = []
    gltf.scene.updateMatrixWorld(true) // make sure all matrices are up to date

    gltf.scene.traverse(obj => {
      if (obj.isMesh) {
        const mesh = clone ? obj.clone() : obj
        mesh.applyMatrix4(obj.matrixWorld);
        mesh.matrixAutoUpdate = false;
        mesh.geometry = mesh.geometry.clone()
        mesh.material = mesh.material.clone()
        all.push(mesh)
      }
    })
    return all
  }, [gltf, clone])

  return (
    <>
      {meshes.map((mesh, i) => {
        const labelOffset = [0.2,0.2,0.2]
        const box = new THREE.Box3().setFromObject(mesh);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);
        const labelPos = center.clone().add(new THREE.Vector3(...labelOffset).setY(size.y * 0.6))
       return  <group>
          <primitive key={i} object={mesh}  />
          {/* <Text   font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf"
            fontSize={2}
            position={[0, 0, 0]} 
  color="black" anchorX="center" anchorY="middle"   characters="abcdefghijklmnopqrstuvwxyz0123456789!">
          
          </Text> */}
          {/* <Billboard>
            <Text font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf" fontSize={5} color="black">{mesh.name || `Mesh_${i}`}</Text>
          </Billboard> */}

          {/* <Html occlude position={labelPos} distanceFactor={8}>
            <div style={{ color: 'white', fontSize: '14px' }}>{mesh.name || `Mesh_${i}`}</div>
          </Html> */}
        </group>
        }
      )
      }
    </>
  )
}
