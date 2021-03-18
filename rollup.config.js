import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcssEnv from "postcss-preset-env";
import rename from "rollup-plugin-rename";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "core-js": "core-js",
};

const globalModules = Object.keys(globals);

export default {
  input: {
    index: "./src/index.ts",
  },
  output: [
    {
      dir: "dist",
      format: "cjs",
      exports: "auto",
    },
  ],
  preserveModules: true,
  plugins: [
    resolve({ extensions }),
    commonjs({
      include: "**/node_modules/**",
    }),
    peerDepsExternal(),
    babel({
      extensions,
      include: ["src/**/*"],
      exclude: ["node_modules/**", "**/*.css", "**/*.stories.tsx"],
    }),
    postcss({
      plugins: [postcssImport(), postcssEnv()],
      preserveModules: true,
    }),
    rename({
      map: (name) =>
        name
          .replace("src/", "")
          .replace("node_modules/", "external/")
          .replace("../../external", "../external")
          .replace("../../_virtual", "../_virtual"),
    }),
  ],
  external: (id) => globalModules.includes(id) || /core-js/.test(id),
};
