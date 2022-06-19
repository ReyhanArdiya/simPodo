import TodoCounter from "./TodoCounter";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : TodoCounter,
	args      : {
		finished : 0,
		total    : 0
	}
};

export const Default = args => <TodoCounter {...args} />;
Default.storyName = "TodoCounter";


export default Meta;