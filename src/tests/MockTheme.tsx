import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const MockTheme = ({ children }: {children: JSX.Element}) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export default MockTheme;

