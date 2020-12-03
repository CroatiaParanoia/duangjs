import tsc from "typescript";
import typescript from "rollup-plugin-typescript2";

const isUseSourceMap = true;

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({
      exclude: "./node_modules/**",
      typescript: tsc,
      tsconfig: "./tsconfig.json",
    }),
  ],
  output: [
    {
      format: "cjs",
      file: "lib/index.cjs.js",
      sourcemap: isUseSourceMap,
    },
    {
      format: "es",
      file: "lib/index.esm.js",
      sourcemap: isUseSourceMap,
    },
    {
      name: "duangjs",
      format: "umd",
      file: "lib/index.umd.js",
    },
  ],
};
