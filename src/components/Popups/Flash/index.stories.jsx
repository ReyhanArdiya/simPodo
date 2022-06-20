import BadFlash from "./Bad";
import GoodFlash from "./Good";
import InformationFlash from "./Information";
import WarnFlash from "./Warn";
import BaseFlash from "./BaseFlash";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : BaseFlash,
	args      : {
		children : "This is a flash message",
		show     : true,
		dark     : false
	}
};

export const Default = args => <BaseFlash {...args} />;

export const Bad = args => <BadFlash {...args} />;
export const Good = args => <GoodFlash {...args} />;
export const Information = args => <InformationFlash {...args} />;
export const Warn = args => <WarnFlash {...args} />;


export default Meta;