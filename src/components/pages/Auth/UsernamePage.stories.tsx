import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import UsernamePageComp, { UsernamePageProps } from "./UsernamePage";


interface Args {
    dark?: boolean;
	onSubmit: UsernamePageProps["onSubmit"];
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
	component : UsernamePageComp
};

export const UsernamePage: StoryFn<Args> = args => {
	let onSubmit: Args["onSubmit"] = async () => {
		await new Promise(res => {
			setTimeout(res, 1_500);
		});

		throw new Error("Something went wrong!");
	};

	if (!args.mockRequest) {
		onSubmit = async username => action("Submitted")(username);
	}

	return <UsernamePageComp {...args} onSubmit={onSubmit} />;
};


export default meta;
