import type { Meta } from "@storybook/react";
import GradientRectComponent from "./GradientRect";

const meta: Meta = {
	component  : GradientRectComponent,
	parameters : { backgrounds : { default : "dark", } }
};

export const GradientRect = () => <GradientRectComponent />;

export default meta;