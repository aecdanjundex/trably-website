import next from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...next,
  {
    // Generated shadcn/ui primitives and build/config files are vendored —
    // keep them out of our lint scope.
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      "src/components/ui/**",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
    ],
  },
];

export default eslintConfig;
