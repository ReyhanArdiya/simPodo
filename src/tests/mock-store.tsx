import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";

export interface MockStoreProps {
    children: ReactNode;
}

const MockStore = ({ children }: MockStoreProps) => (
	<Provider store={makeStore()}>
		{children}
	</Provider>
);


export default MockStore;
