import type { Meta, StoryFn } from "@storybook/react";
import FormCardComponent from "./FormCard";

interface Args {
	component: typeof FormCardComponent;
	dark?: boolean;
}

const meta: Meta<Args> = {
	component : FormCardComponent,
	args      : { dark : true },
};

export const FormCard : StoryFn<Args> = args => <FormCardComponent {...args} />;

export default meta;
