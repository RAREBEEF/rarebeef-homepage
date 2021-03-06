/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PlateModelPropType } from "../types";

type GLTFResult = GLTF & {
  nodes: {
    실린더002: THREE.Mesh;
  };
  materials: {
    ["매테리얼.003"]: THREE.MeshStandardMaterial;
  };
};

const PlateModel: React.FC<PlateModelPropType> = ({ plateRef }) => {
  const { nodes, materials } = useGLTF("models/plate.glb") as GLTFResult;
  return (
    <group ref={plateRef} dispose={null} scale={0.9} position={[-0.2, -0.45, 0]}>
      <mesh
        geometry={nodes.실린더002.geometry}
        material={materials["매테리얼.003"]}
        position={[0.2, 0, 0]}
        scale={[3.26, 0.02, 3.26]}
        receiveShadow
      />
    </group>
  );
};

useGLTF.preload("models/plate.glb");

export default PlateModel;
