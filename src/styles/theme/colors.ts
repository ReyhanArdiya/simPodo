class Color {
	UI: { [key: number]: string };
	semantic: { [key: string]: string };
	tags: { [key: number]: string };

	constructor(
		UI: { [key: number]: string },
		semantic: { [key: string]: string },
		tags: { [key: number]: string }
	) {
		this.UI = UI;
		this.semantic = semantic;
		this.tags = tags;
	}
}

const dark = new Color(
	{
		1 : "#475572",
		2 : "#FFFFFF",
		3 : "#5972A6",
		4 : "#FF7F64",
		5 : "#B7D0F9",
		6 : "#648DE5",
		7 : "#c2c7e133",
		8 : "#C2C7E1",
		9 : "#4D5D80"
	},
	{
		bad         : "#EC5797",
		good        : "#CDEE86",
		information : "#73D1F0",
		warn        : "#EDD957"
	},
	{
		1 : "#EC5797",
		2 : "#EEA35B",
		3 : "#EDD957",
		4 : "#CDEE86",
		5 : "#73D1F0",
		6 : "#BD76F4"
	}
);

const light = new Color(
	{
		1 : "#FFFFFF",
		2 : "#648DE5",
		3 : "#C2C7E1",
		4 : "#c2c7e133",
		5 : "#B7D0F9",
		6 : "#FF7F64",
		7 : "#2555BB"
	},
	{
		bad         : "#FF006D",
		good        : "#80ed99",
		information : "#01BEFE",
		warn        : "#FFDD00"
	},
	{
		1 : "#FF006D",
		2 : "#FF7D00",
		3 : "#FFDD00",
		4 : "#95FF70",
		5 : "#01BEFE",
		6 : "#8F00FF"
	}
);

const colors = {
	dark,
	light
};

export default colors;
