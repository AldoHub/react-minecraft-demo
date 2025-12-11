import React from "react";
import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({position, texture}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));
    
    //console.log('texture', texture);
    const activeTexture = textures[texture + 'Texture'];
    //console.log('activeTexture', activeTexture);

    const addCube = useStore((state) => {
           //console.log("addCube", state.addCube);
           return state.addCube; 
    })

    const removeCube = useStore((state) => {
           //console.log("addCube", state.removeCube);
           return state.removeCube;
    })


    return (
        <mesh ref={ref} castShadow receiveShadow 
        onPointerMove={(e) => {
            e.stopPropagation();
            setIsHovered(true);
        }}
        onPointerOut={(e) => {
            e.stopPropagation();
            setIsHovered(false);
        }}
        
        onClick={(e) => {
            e.stopPropagation();
            const clickedFace = Math.floor(e.faceIndex / 2);
            //console.log("clickedFace", clickedFace);
            const { x, y, z } = ref.current.position
           
            //handle removal or addition of cubes/blocks
            if (e.altKey) {
                console.log("removing cube");
                removeCube(x, y, z)
                return
            }
            else if (clickedFace === 0) {
                addCube(x + 1, y, z)
                return
            }
            else if (clickedFace === 1) {
                addCube(x - 1, y, z)
                return
            }
            else if (clickedFace === 2) {
                addCube(x, y + 1, z)
                return
            }
            else if (clickedFace === 3) {
                addCube(x, y - 1, z)
                return
            }
            else if (clickedFace === 4) {
                addCube(x, y, z + 1)
                return
            }
            else if (clickedFace === 5) {
                addCube(x, y, z - 1)
                return
            }
        }}>
             
           <boxBufferGeometry attach="geometry" />
           <meshStandardMaterial transparent={true} opacity={texture === 'glass' ? 0.7: 1} color={isHovered ? "grey": "white"} attach="material" map={activeTexture} />
        </mesh>
    )
}