import "./mock-matchMedia";
import { makeStore } from "../store";

const mockRootState = makeStore().getState();

export default mockRootState;
