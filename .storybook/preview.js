import { withTests } from "@storybook/addon-jest";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import results from "../.jest-test-results.json";
import { makeStore } from "../src/store";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import "../src/utils/set-dayjs-tz-to-user";

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
