import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import CredentialsPageComp from "./CredentialsPage";

interface Args {
    dark?: boolean;
    onSubmit: HandlerFunction;
}

const meta: Meta<Args> = {
	args : {
		dark     : false,
		onSubmit : action("submitted")
	},
	parameters : {
		layout : "fullscreen"
	}
};

export const CredentialsPage: StoryFn<Args> = args => <CredentialsPageComp {...args} />;


export default meta;
