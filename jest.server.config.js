const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir : "./" });

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
	moduleDirectories        : [ "node_modules", "<rootDir>/" ],
	setupFilesAfterEnv       : [ "./src/utils/set-dayjs-tz-to-user.ts" ],
	testEnvironment          : "node",
	modulePathIgnorePatterns : [ "node_modules", "jest-test-results.json" ],
	testMatch                : [ "**/src/models/**/*.test.ts" ],
	preset                   : "ts-jest"
};
module.exports = createJestConfig(customJestConfig);
