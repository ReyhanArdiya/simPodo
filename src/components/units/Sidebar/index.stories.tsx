import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import Sidebar from "./Sidebar";

interface Args {
	dark?: boolean;
	username: string;
	actions: {
		text: string;
		onClick: HandlerFunction;
		alert?: boolean;
	}[];
	button: {
		text: string;
		onClick: HandlerFunction;
	};
}

const meta: Meta<Args> = {
	component : Sidebar,
	args      : {
		dark     : false,
		username : "Reyhan",
		actions  : [
			{
				text    : "Edit Username",
				onClick : action("Edit Username"),
			},
			{
				text    : "Edit Password",
				onClick : action("Edit Password"),
			},
			{
				text    : "Delete Account",
				onClick : action("Delete Account"),
				alert   : true
			},
		],
		button : {
			text    : "Logout",
			onClick : action("Logout")
		},
	}
};

export const Default: StoryFn<Args> = args => <Sidebar {...args} />;
Default.storyName = "Sidebar";

export default meta;