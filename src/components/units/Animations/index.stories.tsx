import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import BGrow from "./BouncyGrow";
import BMove from "./BouncyMove";
import BThrob from "./BouncyThrob";
import type { Meta as Met, StoryFn } from "@storybook/react";

interface Args {
	transitionKey?: unknown;
}

const Meta: Met<Args> = {
	args : {
		transitionKey : false
	}
};

const RedBlock = styled.div`
	background-color: red;
	width: 100px;
	height: 100px;
	cursor: pointer;
`;

export const Default = RedBlock;

export const BouncyGrow: StoryFn = (args: Args) => {
	const [ animate, setAnimate ] = useState(args.transitionKey);

	return (
		<>
			<p>Click me!</p>
			<BGrow
				{...args}
				transitionKey={animate as never}
			>
				<RedBlock
					onClick={() => setAnimate((prev: unknown) => !prev)}
				/>
			</BGrow>
		</>
	);
};
BouncyGrow.parameters = {
	docs : {
		description : {
			story : "Activate bouncyGrow animation on appear. You can also pass children and different transitionKey on each rerender to switch content while doing bouncyGrow animation."
		}
	}
};

export const BouncyMove = (args: Args & {onClick: MouseEventHandler}) => {
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
	onClick : {
		action : "onClick"
	}
};
BouncyMove.parameters = {
	docs : {
		description : {
			story : "Activate bouncyMove[Left | Right] animation on enter and exit."
		}
	}
};

export const BouncyThrob = (args: Args & {onClick: MouseEventHandler}) => {
	return (
		<BThrob {...args}>
			<RedBlock />
		</BThrob>
	);
};
BouncyThrob.parameters = {
	docs : {
		description : {
			story : "Activate bouncyThrob animation on hover and click."
		}
	},
	actions : {
		handles : [ "mouseenter", "click" ]
	}
};

export default Meta;
