// RenderMeshes.js
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
      {meshes.map((mesh, i) => (
        <primitive key={i} object={mesh} scale= {0.1} />
      ))}
    </>
  )
}
