import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import CredentialsPageComp, { CredentialsPageProps } from "./CredentialsPage";

interface Args {
    dark?: boolean;
	onSubmit: CredentialsPageProps["onSubmit"];
	mockRequest: boolean;
}

const meta: Meta<Args> = {
	args : {
		dark        : false,
		mockRequest : true
	},
	parameters : {
		layout : "fullscreen"
	},
	component : CredentialsPageComp
};

export const CredentialsPage: StoryFn<Args> = args => {
	let onSubmit: Args["onSubmit"] = async () => {
		await new Promise(res => {
			setTimeout(res, 1_500);
		});

		throw new Error("Something went wrong!");
	};

	if (!args.mockRequest) {
		onSubmit = async (email, password) => action("Submitted")(email, password);
	}

	return <CredentialsPageComp {...args} onSubmit={onSubmit} />;
};


export default meta;
