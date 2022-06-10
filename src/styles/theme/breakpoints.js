import { css } from "styled-components";


const breakpoints = {
	big(styles) {
		return css`
			@media screen and (min-width: 64em) {
				${styles}
			}
		`;
	},
	small(styles) {
		return css`
			@media screen and (max-width: 63.9375em) {
				${styles}
			}
		`;
	}
};

export default breakpoints;