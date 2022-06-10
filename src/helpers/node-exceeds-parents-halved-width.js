/**
 *
 * @param {number} leftPos
 *
 * @param {import("react").ReactNode} node
 */
const nodeExceedsParentsHalvedWidth = (leftPos, node) => {
	return Math.abs(leftPos) >= node.parentElement.offsetWidth * 0.5;
};

export default nodeExceedsParentsHalvedWidth;