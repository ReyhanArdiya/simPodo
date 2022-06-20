import { createGlobalStyle } from "styled-components";
import animations from "./animations";
import cssReset from "./css-reset";

const GlobalStyle = createGlobalStyle`
	${cssReset}
	${animations}
`;

export default GlobalStyle;