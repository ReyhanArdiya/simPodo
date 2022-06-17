import BlueCard from "./BlueCard";
import Card from "./Card";

/**
 * @type {import('@storybook/react').Meta}
 */
const Meta = {
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

const Template = args => <Card {...args} />;

export const Light = Template.bind({});
Light.parameters = { backgrounds : { default : "dark", }, };
Light.args = { dark : false, };

export const Dark = Template.bind({});
Dark.args = { dark : true, };

export const Blue = args => <BlueCard {...args} />;
Blue.args = { dark : false, };

export default Meta;