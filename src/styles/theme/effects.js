import { css } from "styled-components";
import baseTransitionMs from "../global/base-transition-ms";

const effects = {
	borderRadius : "border-radius: 10px;",
	boxShadows   : {
		1 : "box-shadow: -1px 6px 20px rgba(194, 199, 225, 0.25), -10px 24px 35px rgba(183, 208, 249, 0.44);",
		2 : "box-shadow: 20px 10px 20px rgba(100, 141, 229, 0.25);",
		3 : "box-shadow: 0px 0px 20px rgba(194, 199, 225, 0.25), -5px 14px 35px rgba(183, 208, 249, 0.44);",
		4 : "box-shadow: 2px 0px 20px rgba(100, 141, 229, 0.25), 6px 0px 20px rgba(183, 208, 249, 0.44);"
	},
	gradientRect : css`
		background: linear-gradient(
			180deg,
			hsla(0, 0%, 100%, 0.3) 0%,
			rgba(196, 196, 196, 0) 100%
		);
		border-radius: 1em 1em 0 0;
		width: 7.3em;
		height: 7.3em;
	`,
	hoverClick : css`
	transition: filter ${baseTransitionMs * 0.4}ms ease-in-out;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		cursor: pointer;
		filter: brightness(105%);
	}

	&:active {
		filter: brightness(95%);
	}
`,
};

export default effects;
