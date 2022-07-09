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

export const Default: StoryFn = () => <RedBlock />;

export const BouncyGrow: StoryFn = (args: Args) => {
	const [ animate, setAnimate ] = useState(args.transitionKey);

	return (
		<>
			<p>Click me!</p>
			<BGrow
				{...args}
				transitionKey={animate}
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
			story : "Activate bouncyGrow animation on appear. You can also pass different children and transitionKey on each rerender to switch content while doing bouncyGrow animation."
		}
	}
};

export const BouncyMove = (args: Args & {onClick: MouseEventHandler}) => {
	return (
		<>
			<p>Click me!</p>

			<BMove {...args}>
				{startAnimation => <RedBlock onClick={startAnimation}/>}
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
			story : "`children` as a function receives `startAnimation` that wil activate `bouncyMove[Left | Right]` based on `direction`."
		}
	}
};

export const BouncyThrob = (args: Args & {onClick: MouseEventHandler}) => {
	return (
		<BThrob {...args}>
			{startAnimation => {
				return (
					<RedBlock
						onClick={startAnimation}
						onMouseEnter={startAnimation}
					/>
				);
			}}
		</BThrob>
	);
};
BouncyThrob.parameters = {
	docs : {
		description : {
			story : "`children` as a function receives `startAnimation` to animate."
		}
	},
	actions : {
		handles : [ "mouseenter", "click" ]
	}
};

export default Meta;
