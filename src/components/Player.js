import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export const Player = () => {
    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 0, 0],
    }));

    //store player position in state
    const pos = useRef([0, 0, 0]);

    //camera follow player
    useEffect(() => {
       //subscribe to position changes
        api.position.subscribe((value) => {
            pos.current = value;
        });

    }, [api.position]);

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
    });

    return (
        <mesh ref={ref} castShadow receiveShadow>
        </mesh>
    )
} 

//TODO --- 22:41