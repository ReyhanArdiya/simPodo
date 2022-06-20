import { action } from "@storybook/addon-actions";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	args : {
		dark    : false,
		onClick : action("Clicked"),
	},
	argTypes : {
		direction : {
			control : {
				type    : "radio",
				options : [ "left", "right", "down" ],
			},
			defaultValue : "left",
		}
	}
};

export const Arrows = ({ direction, ...args }) => {
	switch (direction) {
		case "left" :
			return <ArrowLeft {...args} />;
		case "right" :
			return <ArrowRight {...args} />;
		case "down" :
			return <ArrowDown {...args} />;
	}
};


export default Meta;