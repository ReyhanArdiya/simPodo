import { createGlobalStyle, ThemeProvider } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";

import Head from "next/head";

const GlobalStyle = createGlobalStyle`
	${cssReset}
`;

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<Head>
				<title>simPodo</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
