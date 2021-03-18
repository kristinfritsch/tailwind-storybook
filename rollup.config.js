import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

import pkg from "./package.json";

export default {
  input: __dirname + "/src/index.ts",
  output: [
    {
      dir: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
      name: "test.js",
    },
    {
      dir: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  preserveModules: true,
  treeshake: true,
  plugins: [
    peerDepsExternal(),
    resolve({ browser: true }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.*"],
      },
    }),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),
    postcss({
      modules: true,
      plugins: [autoprefixer()],
    }),
  ],
};
