import type { DefaultTheme } from "styled-components";
import breakpoints from "./breakpoints";
import colors from "./colors";
import effects from "./effects";

declare module "styled-components" {
	export interface DefaultTheme {
		breakpoints: typeof breakpoints;
		colors: typeof colors;
		effects: typeof effects;
	}
}

const theme: DefaultTheme = {
	breakpoints,
	colors,
	effects
};


export default theme;
