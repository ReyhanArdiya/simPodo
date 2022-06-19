import React from "react";
import styled from "styled-components";
import BlueCard from "../Cards/BlueCard";
import CountingContent from "./CountingContent";
import EmptyContent from "./EmptyContent";

const Container = styled(BlueCard)`
	width: 21.3em;
	height: 12.2em;
	background: url("/images/bg-counter.png") no-repeat center center/cover;
`;

const TodoCounter = ({ finished, total }) => {
	return (
		<Container>
			{finished >= 0 && total > 0 ?
				<CountingContent
					finished={finished}
					total={total}
				/>	:
				<EmptyContent />
			}
		</Container>
	);
};

export default React.memo(TodoCounter);
