import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";

export const Player = () => {
    //use actions
    const actions = useKeyboard();
    console.log('actions', Object.entries(actions).filter(([key, value]) => value));

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0],
    }));

    //---- store player position in state
    const pos = useRef([0, 0, 0]);
    useEffect(() => {
       //subscribe to position changes
        api.position.subscribe((value) => {
            pos.current = value;
        });

    }, [api.position]);
   

    //---- velocity
    const vel = useRef([0, 0, 0]);
    //camera follow player
    useEffect(() => {
       //subscribe to position changes
        api.velocity.subscribe((value) => {
            vel.current = value;
        });

    }, [api.velocity]);

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
    
        //sphere movement
        //api.velocity.set(vel.current[0], vel.current[1], vel.current[2]);
    });

    return (
        <mesh ref={ref} castShadow receiveShadow>
        </mesh>
    )
} 

//TODO --- 22:41