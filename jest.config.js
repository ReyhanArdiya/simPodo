const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir : "./", });

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
	moduleDirectories        : [ "node_modules", "<rootDir>/" ],
	setupFilesAfterEnv       : [ "./jest.setup.js", "./src/tests/polyfill-textencoder.ts" ],
	testEnvironment          : "jest-environment-jsdom",
	modulePathIgnorePatterns : [ "node_modules", "jest-test-results.json" ],
	preset                   : "ts-jest",
};
module.exports = createJestConfig(customJestConfig);