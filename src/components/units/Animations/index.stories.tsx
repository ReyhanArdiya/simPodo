import { useState } from "react";
import styled from "styled-components";
import BGrow from "./BouncyGrow";
import BMove from "./BouncyMove";
import BThrob from "./BouncyThrob";

/** @type {import("@storybook/react").Meta} */
const Meta = {};

const RedBlock = styled.div`
	background-color: red;
	width: 100px;
	height: 100px;
	cursor: pointer;
`;

export const Default = RedBlock;

export const BouncyGrow = args => {
	const [ animate, setAnimate ] = useState(args.transitionKey);

	return (
		<>
			<p>Click me!</p>
			<BGrow
				{...args}
				transitionKey={animate}
			>
				<RedBlock onClick={() => setAnimate(prev => !prev)} />
			</BGrow>
		</>
	);
};
BouncyGrow.parameters = { docs : { description : { story : "Activate bouncyGrow animation on appear. You can also pass children and different transitionKey on each rerender to switch content while doing bouncyGrow animation." } } };

export const BouncyMove = args => {
	return (
		<>
			<p>Click me!</p>

			<BMove {...args}>
				<RedBlock />
			</BMove>
		</>
	);
};
BouncyMove.argTypes = {
	direction : {
		control : {
			type         : "select",
			options      : [ "left", "right" ],
			defaultValue : "left"
		}
	},
	onClick : { action : "onClick" }
};
BouncyMove.parameters = { docs : { description : { story : "Activate bouncyMove[Left | Right] animation on enter and exit." } } };

export const BouncyThrob = args => {
	return (
		<BThrob {...args}>
			<RedBlock />
		</BThrob>
	);
};
BouncyThrob.parameters = {
	docs    : { description : { story : "Activate bouncyThrob animation on hover and click." } },
	actions : { handles : [ "mouseenter", "click" ] }
};

export default Meta;
