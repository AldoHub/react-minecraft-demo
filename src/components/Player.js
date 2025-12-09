import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";


const JUMP_FORCE = 3;
const SPEED = 4;


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
    
        //--- sphere/player movement
        const direction = new Vector3();
        const frontVector = new Vector3(0, 0, (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0));
        const sideVector = new Vector3((actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0), 0, 0 );
       
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

        api.velocity.set(direction.x, vel.current[1], direction.z);

        if(actions.jump && Math.abs(vel.current[1]) < 0.1) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
        }
    });

    return (
        <mesh ref={ref} castShadow receiveShadow>
        </mesh>
    )
} 

//TODO --- 22:41