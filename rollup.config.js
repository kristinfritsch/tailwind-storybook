import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: __dirname + "/dist/",
      format: "cjs", // commonJS
      chunkFileNames: "[name].js",
      exports: "named",
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve(),
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
    }),
  ],
};
