import TextSelectionLg from "./Lg/TextSelectionLg";
import TextSelectionSm from "./Sm/TextSelectionSm";
import TextSelectionComponent from "./TextSelection";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : TextSelectionComponent,
	argTypes  : {
		backgroundColor : {
			control      : { type : "color" },
			defaultValue : "teal"
		},
		size : {
			control : {
				type    : "radio",
				options : [ "sm", "lg" ]
			},
			defaultValue : "sm"
		},
	},
	args : {
		children : "Personal",
		active   : false,
		dark     : false,
	},
	parameters : { actions : { handles : [ "mouseenter" ] } }
};

export const TextSelection = ({ size, ...args }) => {
	if (size === "sm") {
		return <TextSelectionSm {...args} />;
	} else if (size === "lg") {
		return <TextSelectionLg {...args} />;
	}

};


export default Meta;