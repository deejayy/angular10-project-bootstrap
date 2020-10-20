module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@env/(.*)": "<rootDir>/src/environments/$1",
  },
};
