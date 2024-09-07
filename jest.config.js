module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./config/testsSetup.ts"],
  //   moduleNameMapper: {
  //     "@exmpl/(.*)": "<rootDir>/src/$1"
  //   },
};
