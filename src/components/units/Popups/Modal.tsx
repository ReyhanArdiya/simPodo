import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #636674B2;
    z-index: 100;
    align-items: center;
    display: flex;
    justify-content: center;
`;

interface ModalProps {
	children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
	const [ mounted, setMounted ] = useState(false);

	useEffect(() => {
		setMounted(true);

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "initial";
			setMounted(false);
		};
	}, []);

	return mounted ?
		createPortal(
			<Container>
				{children}
			</Container>,
			document.getElementById("__next") as HTMLDivElement
		) :
		null;
};

export default Modal;