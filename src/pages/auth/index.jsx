/**
 * @type {import("next").GetServerSideProps}
 */
export const getServerSideProps = ({ resolvedUrl }) => {
	return {
		redirect : {
			destination : `${resolvedUrl}/credentials?mode=login`,
			permanent   : true
		}
	};
};

export default function None() {
	return <></>;
}