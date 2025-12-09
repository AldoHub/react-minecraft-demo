import create from "zustand";
import { nanoid } from "nanoid";

//state management
export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [],
    addCube: (x,y,z) => {
        set((prevState) => ({
            cubes: [...prevState.cubes, {
                key: nanoid(),
                position: [x,y,z],
                texture: prevState.texture
            }]
        }))
    },
    removeCube: (x, y, z) => {
        console.log("removeCube", x, y, z);
    },
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
    
}));