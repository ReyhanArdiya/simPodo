import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir : "./" });

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
	moduleDirectories        : [ "node_modules", "<rootDir>/" ],
	setupFilesAfterEnv       : [ "./jest.setup.js", "./src/utils/set-dayjs-tz-to-user.ts" ],
	testEnvironment          : "jest-environment-jsdom",
	modulePathIgnorePatterns : [ "node_modules", "jest-test-results.json" ],
	testPathIgnorePatterns   : [ "./src/models" ],
	preset                   : "ts-jest"
};
export default createJestConfig(customJestConfig);
