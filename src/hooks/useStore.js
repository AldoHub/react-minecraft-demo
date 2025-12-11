import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

//state management
export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: getLocalStorage('cubes') || [],
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
    saveWorld: () => {
        set((prev) => {
			setLocalStorage('cubes', prev.cubes)
		})
    },
    resetWorld: () => {
        set(() => ({
			cubes: []
		}))
    },
    
}));
