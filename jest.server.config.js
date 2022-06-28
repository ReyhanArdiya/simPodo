import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir : "./", });

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
	moduleDirectories        : [ "node_modules", "<rootDir>/" ],
	testEnvironment          : "node",
	modulePathIgnorePatterns : [ "node_modules", "jest-test-results.json" ],
	testMatch                : [ "**/src/models/**/*.test.ts" ],
	preset                   : "ts-jest",
};
export default createJestConfig(customJestConfig);
