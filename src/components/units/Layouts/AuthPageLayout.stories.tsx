import type { Meta, StoryFn } from "@storybook/react";
import AuthPageLayoutComp, { AuthPageLayoutProps } from "./AuthPageLayout";

type Args = AuthPageLayoutProps;

const meta: Meta<Args> = {
	args : {
		children : <p>Meow</p>,
		dark     : false,
		title    : "simPodo"
	},
	parameters : {
		layout : "fullscreen"
	},
	component : AuthPageLayoutComp
};

export const AuthPageLayout : StoryFn<Args> = args => <AuthPageLayoutComp {...args} />;


export default meta;
