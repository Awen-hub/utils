module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["./"],
  //处理ts中引入js包导致测试失败问题
  transform: {
    "(ts|tsx|js|jsx)?$": "ts-jest",
  },
  collectCoverage: true, // 统计覆盖率
  collectCoverageFrom: [
    "lib/**/*.ts",
    "!lib/**/module.ts", //不纳入覆盖率的文件
    "!lib/**/index.ts",
  ],
};
