import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (
	{ resolvedUrl }
) => {
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
