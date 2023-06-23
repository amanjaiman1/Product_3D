import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#9E9E9E",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo.png",
  fullDecal: "./logo.png",
});

export default state;
