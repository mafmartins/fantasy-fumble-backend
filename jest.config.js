module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./config/tests_teardown.ts"],
  //   moduleNameMapper: {
  //     "@exmpl/(.*)": "<rootDir>/src/$1"
  //   },
};
