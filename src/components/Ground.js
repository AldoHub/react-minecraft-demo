import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
    const [ref, api] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    const addCube = useStore((state) => {
       //console.log("addCube", state.addCube);
       return state.addCube;
    })

    groundTexture.magFilter = NearestFilter
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref} 
        receiveShadow
        castShadow
        onClick={(e) => {
            e.stopPropagation();
            const coords = Object.values(e.point).map(v => Math.ceil(v));
            console.log("cube coords", coords);
            addCube(coords[0], coords[1], coords[2]);
        }
        }>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="#d5d5d5" map={groundTexture} />
        </mesh>
    )
    
}

//TODO --- 1:01:47