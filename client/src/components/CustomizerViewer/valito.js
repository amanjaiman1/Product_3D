import { proxy } from "valtio";

const state = proxy({
  intro: true,
  position: [0.4, 0.9, 0],
  color: "#9E9E9E",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo.png",
  fullDecal: "./logo.png",
  textDecal: {
    content: "  ",
    position: [0, 0, 0],
    fontSize: 0.08, 
    textcolor: "",
    fontFamily: "Verdana", 
  },
});

export default state;
