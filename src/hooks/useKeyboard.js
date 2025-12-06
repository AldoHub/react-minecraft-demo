import React, { useCallback } from "react";
import { useState } from "react";

const useKeyboard = () => {
    //keyboard actions
    const [actions, setActions] = React.useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  });

  //map the keyboard keys to the actions
  function actionByKey(key) {
    const keyActionMap = {
        w: 'moveForward',
        a: 'moveLeft',
        s: 'moveBackward',
        d: 'moveRight',
        space: 'jump',
        /*
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log',
        */
       1: 'texture1',
       2: 'texture2',
       3: 'texture3',
       4: 'texture4',
       5: 'texture5',
      };

      return keyActionMap[key];
  }

  const handleKeyDown = useCallback(
    (event) => {
        //console.log('keydown-----', event.key);
        const action = actionByKey(event.key);
        console.log('setaction', action);
        if(action) {
            setActions((prevState) => {
                return ({ ...prevState, [action]: true });
            })
        }
  }, [])  
  
  const handleKeyUp = useCallback(
   (event) => {
        const action = actionByKey(event.key);
        console.log('unset action', action);
        if(action) {
            setActions((prevState) => {
                return ({ ...prevState, [action]: false });
            })
        }
  }, [])  
  
  
  //add listeners
  React.useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("keyup", handleKeyUp);
      };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
  
};

export default useKeyboard;