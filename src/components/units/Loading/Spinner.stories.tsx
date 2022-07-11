import type { Meta, StoryFn } from "@storybook/react";
import SpinnerComp from "./Spinner";

const meta: Meta = {
	component  : SpinnerComp,
	parameters : {
		backgrounds : { default : "dark", },
	}
};

export const Spinner : StoryFn = () => <SpinnerComp />;


export default meta;
