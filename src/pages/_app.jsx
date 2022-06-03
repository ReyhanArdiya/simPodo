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
				<meta charset="UTF-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="application" content="simPodo"/>
				<meta name="author" content="Reyhan Ardiya"/>
				<meta name="description" content="Jolt down your TODO in this simPle toDo app!"/>
				<meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, Todo, TodoApp, simple"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>simPodo</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
