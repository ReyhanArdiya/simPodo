import { css, FlattenSimpleInterpolation } from "styled-components";


const breakpoints = {
	big(styles: FlattenSimpleInterpolation) {
		return css`
			@media screen and (min-width: 64em) {
				${styles}
			}
		`;
	},
	small(styles: FlattenSimpleInterpolation) {
		return css`
			@media screen and (max-width: 63.9375em) {
				${styles}
			}
		`;
	}
};

export default breakpoints;