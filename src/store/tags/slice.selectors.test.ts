import mockRootState from "../../utils/tests/mock-rootstate";
import { tagsSliceSelectors } from "./slice";

const initialId = "1";
const initialState = mockRootState;
initialState.tags = {
	tags : {
		[initialId] : {
			color : expect.any(String),
			_id   : expect.any(String),
			name  : expect.any(String)
		}
	}
};

describe("Tags slice selectors", () => {
	it("selects a tag by id", () => {
		expect(tagsSliceSelectors.selectTagById(
			initialState,
			initialId
		)).toEqual(initialState.tags.tags[initialId]);
	});
});
