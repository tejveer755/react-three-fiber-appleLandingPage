import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { emissive } from 'three/webgpu';


function MacContainer() {
    const model = useGLTF("./mac.glb")
    const texture = useTexture("./red.jpg")
    let meshes = {};

    model.scene.traverse((e) => {
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
    meshes.matte.material.map = texture;
    meshes.matte.material.materialness = 0
    meshes.matte.material.emissiveIntensity = 0
    meshes.matte.material.roghness = 1

    let data = useScroll();
    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
    })
    return (
        <group position={[0, -10, 0]}>
            <primitive object={model.scene} />
        </group>
    )
}

export default MacContainer