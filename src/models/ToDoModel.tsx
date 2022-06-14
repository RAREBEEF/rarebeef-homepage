/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import angleToRadians from "../tools/angleToRadians";

type GLTFResult = GLTF & {
  nodes: {
    object_A_0: THREE.Mesh;
    object001_alu_0: THREE.Mesh;
    object002_fash_0: THREE.Mesh;
    object003_gryl_0: THREE.Mesh;
    object004_lense_0: THREE.Mesh;
    object005_dchr_0: THREE.Mesh;
    object006_bezel_0: THREE.Mesh;
    object007_but_0: THREE.Mesh;
    object008_ant_0: THREE.Mesh;
    object009_chr_0: THREE.Mesh;
    object010_scr_0: THREE.Mesh;
    object011_glsl_0: THREE.Mesh;
    object012_glass_0: THREE.Mesh;
    object013_misc1_0: THREE.Mesh;
    object014_logo_0: THREE.Mesh;
  };
  materials: {
    ["material.001"]: THREE.MeshStandardMaterial;
    ["material_1.001"]: THREE.MeshStandardMaterial;
    ["fash.001"]: THREE.MeshStandardMaterial;
    ["gryl.001"]: THREE.MeshStandardMaterial;
    ["lense.001"]: THREE.MeshStandardMaterial;
    ["dchr.001"]: THREE.MeshStandardMaterial;
    ["bezel.003"]: THREE.MeshStandardMaterial;
    ["material_7.001"]: THREE.MeshStandardMaterial;
    ["material_8.001"]: THREE.MeshStandardMaterial;
    ["material_9.001"]: THREE.MeshStandardMaterial;
    ["material_10.001"]: THREE.MeshStandardMaterial;
    ["glsl.001"]: THREE.MeshStandardMaterial;
    ["glass.001"]: THREE.MeshStandardMaterial;
    ["misc1.001"]: THREE.MeshStandardMaterial;
    ["logo.001"]: THREE.MeshStandardMaterial;
  };
};

export default function ToDoModel({
  ...props
}: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("models/toDo.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null} {...props}>
      <group rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.04, 0.81, 0.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object_A_0.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group
            position={[-0.05, 0, 0.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object001_alu_0.geometry}
              material={materials["material_1.001"]}
            />
          </group>
          <group
            position={[11.65, 69.22, -1.8]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object002_fash_0.geometry}
              material={materials["fash.001"]}
            />
          </group>
          <group
            position={[4.22, 59.37, 0.51]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object003_gryl_0.geometry}
              material={materials["gryl.001"]}
            />
          </group>
          <group
            position={[17.27, 61.04, 0.28]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object004_lense_0.geometry}
              material={materials["lense.001"]}
            />
          </group>
          <group
            position={[18.84, 58.09, -3.35]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object005_dchr_0.geometry}
              material={materials["dchr.001"]}
            />
          </group>
          <group
            position={[-0.05, 0, 3.49]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object006_bezel_0.geometry}
              material={materials["bezel.003"]}
            />
          </group>
          <group
            position={[0, 36.09, 0.1]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object007_but_0.geometry}
              material={materials["material_7.001"]}
            />
          </group>
          <group
            position={[-0.05, 0, 0.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object008_ant_0.geometry}
              material={materials["material_8.001"]}
            />
          </group>
          <group
            position={[18.84, 58.08, -3.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object009_chr_0.geometry}
              material={materials["material_9.001"]}
            />
          </group>
          <group
            position={[-0.05, 0, 3.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object010_scr_0.geometry}
              material={materials["material_10.001"]}
            />
          </group>
          <group
            position={[18.84, 58.08, -3.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object011_glsl_0.geometry}
              material={materials["glsl.001"]}
            />
          </group>
          <group
            position={[-0.05, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object012_glass_0.geometry}
              material={materials["glass.001"]}
            />
          </group>
          <group
            position={[18.83, 59.04, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object013_misc1_0.geometry}
              material={materials["misc1.001"]}
            />
          </group>
          <group
            position={[0.5, 6.14, -3.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.object014_logo_0.geometry}
              material={materials["logo.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/toDo.glb");
