import type { Meta } from "@storybook/react";
import type { MouseEventHandler } from "react";
import Cbx from "./Checkbox";
import Pn from "./Pen";
import Trsh from "./Trash";

interface Args {
	dark: boolean;
	onClick: MouseEventHandler;
	fill: string;
	edit: boolean;
}

const meta: Meta<Args> = {
	argTypes : {
		dark : {
			defaultValue : false,
			type         : "boolean",
		},
		onClick : { action : "clicked!" },
	}
};

export const Checkbox = (args: Args) => <Cbx {...args} />;
export const Pen = (args: Args) => <Pn {...args} />;
export const Trash = (args: Args) => <Trsh {...args} />;

export default meta;
