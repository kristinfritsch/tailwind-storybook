import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default {
  input: __dirname + "/src/index.ts",
  output: [
    {
      dir: __dirname + "/dist/",
      format: "esm", // esm
      chunkFileNames: "[name].js",
      exports: "named",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    resolve({ browser: true }),
    commonjs(),
    typescript(),
    postcss({
      modules: true,
      plugins: [autoprefixer()],
    }),
  ],
};
