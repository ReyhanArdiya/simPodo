import { css } from "styled-components";

const colors = {
	dark : {
		UI : {
			1 : "#475572",
			2 : "#FFFFFF",
			3 : "#5972A6",
			4 : "#FF7F64",
			5 : "#B7D0F9",
			6 : "#648DE5",
			7 : "#C2C7E1",
			8 : "#C2C7E1",
			9 : "#4D5D80",
		},
		tags : {
			1 : "#EC5797",
			2 : "#EEA35B",
			3 : "#EDD957",
			4 : "#CDEE86",
			5 : "#73D1F0",
			6 : "#BD76F4",
		}
	},
	light : {
		UI : {
			1 : "#FFFFFF",
			2 : "#648DE5",
			3 : "#C2C7E1",
			4 : "#C2C7E1",
			5 : "#B7D0F9",
			6 : "#FF7F64",
			7 : "#2555BB",
		},
		tags : {
			1 : "#FF006D",
			2 : "#FF7D00",
			3 : "#FFDD00",
			4 : "#ADFF02",
			5 : "#01BEFE",
			6 : "#8F00FF",
		}
	},
};

const effects = {
	1 : "box-shadow: -1px 6px 20px rgba(194, 199, 225, 0.25), -10px 24px 35px rgba(183, 208, 249, 0.44);",
	2 : "box-shadow: 20px 10px 20px rgba(100, 141, 229, 0.25);",
	3 : "box-shadow: 0px 0px 20px rgba(194, 199, 225, 0.25), -5px 14px 35px rgba(183, 208, 249, 0.44);",
	4 : "box-shadow: 2px 0px 20px rgba(100, 141, 229, 0.25), 6px 0px 20px rgba(183, 208, 249, 0.44);",
};

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

const theme = {
	breakpoints,
	colors,
	effects
};

export default theme;