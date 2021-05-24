import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import babel from "@rollup/plugin-babel";
//npm 中的大多数包都是以 CommonJS 模块的形式出现的。 在它们更改之前，我们需要将 CommonJS 模块转换为 ES2015 供 Rollup 处理
//主要是处理第三方库，本仓库主要使用es模块编写
import commonJs from "@rollup/plugin-commonjs";
const plugins = [
  babel({
    exclude: "node_modules/**", // 仅仅转译我们的源码
  }),
  typescript({
    //typescript2插件专属，把tsconfig作为打包配置
    useTsconfigDeclarationDir: true,
  }),
  commonJs(),
];

const packageDist = {
  input: "./lib/index.ts", // 入口文件
  output: [
    {
      file: pkg.main, // 输出文件名称
      format: "cjs", // 输出模块格式
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins,
};

const arrayDist = {
  input: "lib/array/index.ts", // 入口文件
  output: [
    {
      file: "lib/array/index.js", // 输出文件名称
      format: "esm", // 输出模块格式
    },
  ],
  plugins,
};

const numberDist = {
  input: "lib/number/index.ts", // 入口文件
  output: [
    {
      file: "lib/number/index.js", // 输出文件名称
      format: "esm", // 输出模块格式
    },
  ],
  plugins,
};

const daterDist = {
  input: "lib/date/index.ts", // 入口文件
  output: [
    {
      file: "lib/date/index.js", // 输出文件名称
      format: "esm", // 输出模块格式
    },
  ],
  plugins,
};
const stringDist = {
  input: "lib/string/index.ts", // 入口文件
  output: [
    {
      file: "lib/string/index.js", // 输出文件名称
      format: "esm", // 输出模块格式
    },
  ],
  plugins,
};

const objectDist = {
  input: "lib/object/index.ts", // 入口文件
  output: [
    {
      file: "lib/object/index.js", // 输出文件名称
      format: "esm", // 输出模块格式
    },
  ],
  plugins,
};

export default [
  packageDist,
  numberDist,
  arrayDist,
  daterDist,
  stringDist,
  objectDist,
];
