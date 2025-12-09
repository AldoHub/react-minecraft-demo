import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';

function App() {
  return (
    <>
      <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <FPV />
       <Physics>
        <Player/>
        <Cubes/>
        <Ground/>
       </Physics>
      </Canvas>
      <div className="cursor" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'cyan'}}>+</div>
    </>
  );
}

export default App;
