import type { Meta, StoryFn } from "@storybook/react";
import TodoCounter from "./TodoCounter";

interface Args {
	finished: number;
	total: number;
}

const meta: Meta<Args> = {
	component : TodoCounter,
	args      : {
		finished : 0,
		total    : 0
	}
};

export const Default : StoryFn<Args> = args => <TodoCounter {...args} />;
Default.storyName = "TodoCounter";


export default meta;
