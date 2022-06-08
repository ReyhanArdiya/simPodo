import styled from "styled-components";
import BlueCard from "../Cards/BlueCard";
import React from "react";
import CountingContent from "./CountingContent";
import Image from "next/image";
import EmptyContent from "./EmptyContent";

const Container = styled(BlueCard)`
	width: 21.3em;
	height: 12.2em;
`;

const TodoCounter = ({ finished, total }) => {
	return (
		<Container>
			{finished >= 0 && total >= 0 ?
				<CountingContent
					finished={finished}
					total={total}
				/>	:
				<EmptyContent />
			}
			<Image
				alt="bg"
				layout="fill"
				quality={100}
				src="/images/bg-counter.png"
				style={{ zIndex : 0 }}
			/>
		</Container>
	);
};

export default React.memo(TodoCounter);
