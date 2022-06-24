import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const MockTheme = ({ children }: {children: ReactNode}) => {
	return (
		// @ts-expect-error : children should be optional, but sc types 4.0.3 doesn't specify this.
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
};

export default MockTheme;

