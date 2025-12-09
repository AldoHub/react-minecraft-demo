import create from "zustand";
import { nanoid } from "nanoid";

//state management
export const useStore = create((set) => ({
    texture: '',
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
         set((prevState) => ({
            cubes: prevState.cubes.filter((cube) => cube.position[0] !== x || cube.position[1] !== y || cube.position[2] !== z)
        }))
    },
    setTexture: (texture) => {
        set(() => ({
            texture: texture
        }))
    },
    saveWorld: () => {},
    resetWorld: () => {},
    
}));

// TODO : 1:16:00