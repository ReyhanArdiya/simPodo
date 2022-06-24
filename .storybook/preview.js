import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import { makeStore } from "../src/store";
import GlobalStyle from "../src/styles/global";
import { Provider } from "react-redux";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	layout: "centered",
	viewport: {
		viewports: {
			smallScreen: {
				name: "Small Screen",
				styles: {
					width: "320px",
					height: "640px"
				},
				type: "mobile"
			},
			bigScreen: {
				name: "Big Screen",
				styles: {
					width: "768px",
					height: "1080px"
				},
				type: "desktop"
			}
		},
		defaultViewport: "responsive"
	}
};

export const decorators = [
	Story => (
		<Provider store={makeStore()}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Story />
			</ThemeProvider>
		</Provider>
	),
	Story => (
		<Provider store={makeStore()}>
			<Story />
		</Provider>
	),
	withTests({
		results
	})
];
