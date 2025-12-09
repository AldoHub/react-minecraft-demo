import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";


export const TextureSelector = () => {

    const [visible, setVisible] = useState(false);
    //return the texture handlers from the store 
    const [activeTexture, setActiveTexture] = useStore((state) => {
       console.log("texture----", state.texture);
       return [state.texture, state.setTexture];
    })

    //get the keyboard actions
    const actions = useKeyboard();
    
    //set the active texture when the keyboard actions are triggered
    useEffect(() => {
        if(actions.texture1) {
            setActiveTexture('dirt');
        }
        else if(actions.texture2) {
            setActiveTexture('grass');
        }
        else if(actions.texture3) {
            setActiveTexture('glass');
        }
        else if(actions.texture4) {
            setActiveTexture('wood');
        }
        else if(actions.texture5) {
            setActiveTexture('log');
        }
    }, [setActiveTexture, actions.texture1, actions.texture2, actions.texture3, actions.texture4, actions.texture5]);

    useEffect(() => {
        const visibilityTime = setTimeout(() => {
            setVisible(false);
        }, 2000);

        setVisible(true);
        return () => clearTimeout(visibilityTime);
    }, [activeTexture]);


    return visible && (
        <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "10px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>Texture {activeTexture} </div>
    )
}