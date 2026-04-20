module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/src/setupEnv.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^../utils/constants$": "<rootDir>/src/utils/constants.mock.js",
    "^../../utils/constants$": "<rootDir>/src/utils/constants.mock.js",
    "^./constants$": "<rootDir>/src/utils/constants.mock.js"
  },
};
