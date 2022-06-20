import Cbx from "./Checkbox";
import Pn from "./Pen";
import Trsh from "./Trash";

const Meta = {
	argTypes : {
		dark : {
			defaultValue : false,
			type         : "boolean",
		},
		onClick : { action : "clicked!" },
	}
};

export const Checkbox = args => <Cbx {...args} />;
export const Pen = args => <Pn {...args} />;
export const Trash = args => <Trsh {...args} />;

export default Meta;