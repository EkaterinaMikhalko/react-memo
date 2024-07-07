import { useContext } from "react";
import { LightModeContext } from "../contexts/lightMode";

export function useLightMode() {
  return useContext(LightModeContext);
}
