/**
 *
 * @param {number} leftPos
 *
 * @param {import("react").ReactNode} node
 *
 * @param {number} threshold
 */
const nodeExceedsParentsWidth = (leftPos, node, threshold = 0.5) => {
	return Math.abs(leftPos) >= node.parentElement.offsetWidth * threshold;
};

export default nodeExceedsParentsWidth;