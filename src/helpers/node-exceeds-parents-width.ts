const nodeExceedsParentsWidth = (
	leftPos: number,
	node: HTMLElement,
	threshold = 0.5
) => {
	return Math.abs(leftPos) >= node.parentElement!.offsetWidth * threshold;
};

export default nodeExceedsParentsWidth;
