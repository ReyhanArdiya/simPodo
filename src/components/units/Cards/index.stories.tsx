import type { Meta, StoryFn } from "@storybook/react";
import type { CSSProperties } from "react";
import BlueCard from "./BlueCard";
import Card from "./Card";

interface Args {
	dark?: boolean;
	style? : CSSProperties;
}

const meta: Meta<Args> = {
	argTypes : {
		dark : {
			defaultValue : false,
			type         : "boolean",
		}
	},
	args : {
		style : {
			height : "10em",
			width  : "10em",
		}
	}
};

const Template : StoryFn<Args> = args => <Card {...args} />;

export const Light = Template.bind({});
Light.parameters = { backgrounds : { default : "dark", }, };
Light.args = { dark : false, };

export const Dark = Template.bind({});
Dark.args = { dark : true, };

export const Blue : StoryFn<Args> = args => <BlueCard {...args} />;
Blue.args = { dark : false, };

export default meta;