const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir : "./", });
const customJestConfig = {
	moduleDirectories        : [ "node_modules", "<rootDir>/" ],
	setupFilesAfterEnv       : [ "./jest.setup.js" ],
	testEnvironment          : "jest-environment-jsdom",
	modulePathIgnorePatterns : [ "node_modules", "jest-test-results.json" ],
};
module.exports = createJestConfig(customJestConfig);