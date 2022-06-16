import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const MockTheme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export default MockTheme;

