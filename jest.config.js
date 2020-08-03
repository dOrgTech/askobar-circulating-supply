module.exports = {
  "transform": {
    ".ts": "ts-jest"
  },
  "testEnvironment": "node",
  "testRegex": "(test|spec)\\.(ts|js)$",
  "testPathIgnorePatterns": [
    "<rootDir>/dist/"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};