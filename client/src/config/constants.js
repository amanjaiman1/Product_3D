import { swatch, fileIcon, ai, logoShirt, stylishShirt, download } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
  {
    name: "download",
    icon: download,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
