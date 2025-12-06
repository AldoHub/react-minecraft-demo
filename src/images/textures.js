import { TextureLoader } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

const textureLoader = new TextureLoader();

const dirtTexture = textureLoader.load(dirtImg);
const grassTexture = textureLoader.load(grassImg);
const glassTexture = textureLoader.load(glassImg);
const woodTexture = textureLoader.load(woodImg);
const logTexture = textureLoader.load(logImg);
const groundTexture = textureLoader.load(grassImg);

export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,
    groundTexture
}