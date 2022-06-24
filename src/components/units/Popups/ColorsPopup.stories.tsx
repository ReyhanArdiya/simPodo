import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import theme from "../../../styles/theme";
import ColorsPopupComponent from "./ColorsPopup";

interface Args {
	dark: boolean;
}

const meta: Meta<Args> = {
	component : ColorsPopupComponent,
	args      : { dark : false }
};

export const ColorsPopup: StoryFn<Args> = ({ dark, ...args }) => {
	const colors = Object.values(
		theme.colors[dark ? "dark" : "light"].tags
	).map(color => ({
		color,
		onClick : action(`Clicked ${color}`)
	}));

	return <ColorsPopupComponent {...args} colors={colors} dark={dark} />;
};

export default meta;
