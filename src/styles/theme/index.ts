import breakpoints from "./breakpoints";
import colors from "./colors";
import effects from "./effects";

interface Theme {
	breakpoints: typeof breakpoints;
	colors: typeof colors;
	effects: typeof effects;
}

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}

const theme: Theme = {
	breakpoints,
	colors,
	effects
};

export default theme;
