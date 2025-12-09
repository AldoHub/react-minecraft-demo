import { NearestFilter, TextureLoader } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

const textureLoader = new TextureLoader();

const dirtTexture = textureLoader.load(dirtImg);
const grassTexture = textureLoader.load(grassImg);
const glassTexture = textureLoader.load(glassImg);
const woodTexture = textureLoader.load(woodImg);
const logTexture = textureLoader.load(logImg);
const groundTexture = textureLoader.load(grassImg);

dirtTexture.magFilter = grassTexture.magFilter = glassTexture.magFilter = woodTexture.magFilter = logTexture.magFilter = groundTexture.magFilter = NearestFilter;

export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,
    groundTexture
}