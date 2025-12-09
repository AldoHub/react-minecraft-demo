import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
    const cubes = useStore((state) => {
       //console.log("cubes----", state.cubes);
       return state.cubes;
    })
    
    return cubes.map((cube, index) => {
        return <Cube key={cube.key} position={cube.position} texture={cube.texture} />
    })

       
}