import BadFlash from "./Bad";
import GoodFlash from "./Good";
import InfoFlash from "./Information";
import WarnFlash from "./Warn";
import BaseFlash from "./BaseFlash";
import type { Meta, StoryFn } from "@storybook/react";

interface Args {
	children: string;
	show: boolean;
	dark: boolean;
}

const meta: Meta<Args> = {
	component : BaseFlash,
	args      : {
		children : "This is a flash message",
		show     : true,
		dark     : false
	}
};

export const Default: StoryFn<Args> = args => <BaseFlash {...args} />;

export const Bad: StoryFn<Args> = args => <BadFlash {...args} />;
export const Good: StoryFn<Args> = args => <GoodFlash {...args} />;
export const Information: StoryFn<Args> = args => <InfoFlash {...args} />;
export const Warn: StoryFn<Args> = args => <WarnFlash {...args} />;

export default meta;
