import { action } from "@storybook/addon-actions";
import theme from "../../styles/theme";
import ColorsPopupComponent from "./ColorsPopup";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : ColorsPopupComponent,
	args      : { dark : false }
};

export const ColorsPopup = ({ dark, ...args }) => {
	const colors = Object.values(
		theme.colors[dark ? "dark" : "light"].tags
	).map(color => ({
		color,
		onClick : action(`Clicked ${color}`)
	}));

	return <ColorsPopupComponent
		{...args}
		colors={colors}
		dark={dark}
	       />;
};

export default Meta;
