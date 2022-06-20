import { action } from "@storybook/addon-actions";
import Sidebar from "./Sidebar";

/** @type {import("@storybook/react").Meta} */
const Meta = {
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

export const Default = args => <Sidebar {...args} />;
Default.storyName = "Sidebar";


export default Meta;