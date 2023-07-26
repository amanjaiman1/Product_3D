import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
export function serializeToP3D(data) {
  const jsonString = JSON.stringify(data);
  return jsonString;
}
export function deserializeFromP3D(p3dString) {
  const data = JSON.parse(p3dString);
  return data;
}
