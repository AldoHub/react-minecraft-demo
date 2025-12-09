import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({position, texture}) => {
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
           return state.addCube;
    })


    return (
        <mesh ref={ref} castShadow receiveShadow onClick={(e) => {
            e.stopPropagation();
            const clickedFace = Math.floor(e.faceIndex / 2);
            console.log("clickedFace", clickedFace);
            const { x, y, z } = ref.current.position
            
            //handle removal or addition of cubes/blocks
            if (e.altKey) {
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
           <meshStandardMaterial attach="material" map={activeTexture} />
        </mesh>
    )
}