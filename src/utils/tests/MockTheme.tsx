import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const MockTheme = ({ children }: {children: ReactNode}) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export default MockTheme;

