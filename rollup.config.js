import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-import-css";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: false,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            css(),
            terser(),
            peerDepsExternal(),
            postcss(),
        ],
        external: [
            "react",
            "react-dom",
            "react-router-dom",
            "@jon-cundiff/jcss/dist/jcss.min.css",
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [
            {
                file: "dist/index.d.ts",
                format: "esm",
            },
        ],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
