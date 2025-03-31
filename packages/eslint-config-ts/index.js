console.log("Linting TypeScript...");
import tsParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import importPlugin from "eslint-plugin-import";
import unusedImportPlugin from "eslint-plugin-unused-imports";
import yml from "eslint-plugin-yml";
import stylistic from "@stylistic/eslint-plugin";
import markdown from "eslint-plugin-markdown";
import jsonc from "eslint-plugin-jsonc";
import eslintcomments from "eslint-plugin-eslint-comments";
import noonlytests from "eslint-plugin-no-only-tests";

export default [
  { ignores: ["dist/", ".yalc/", "node_modules/", ".husky/", "extras/"] },
  {
    files: ["*.ts", "*.js", "**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": typescript,
      typescript,
      perfectionist,
      import: importPlugin,
      "unused-imports": unusedImportPlugin,
      "@stylistic": stylistic,
      "no-only-tests": noonlytests,
      markdown,
      yml,
      jsonc,
      "eslint-comments": eslintcomments,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      ...typescript.configs["eslint-recommended"].rules,
      ...typescript.configs["recommended"].rules,
      ...importPlugin.configs["typescript"].rules,
      ...importPlugin.configs["recommended"].rules,
      ...eslintcomments.configs["recommended"].rules,
      ...jsonc.configs["recommended-with-jsonc"].rules,
      ...yml.configs["standard"].rules,
      ...markdown.configs["recommended"].rules,

      "perfectionist/sort-classes": "off",
      "perfectionist/sort-imports": "error",

      "import/named": "off",

      // TS
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
          multilineDetection: "brackets",
        },
      ],
      "@stylistic/type-annotation-spacing": ["error", {}],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/no-require-imports": "off",
      // Override JS
      "no-useless-constructor": "off",
      "no-invalid-this": "off",
      "@typescript-eslint/no-invalid-this": "error",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: false, variables: true },
      ],
      "brace-style": "off",
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "comma-dangle": "off",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": "off",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "single"],
      "space-before-blocks": "off",
      "@stylistic/space-before-blocks": ["error", "always"],
      "space-before-function-paren": "off",
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "space-infix-ops": "off",
      "@stylistic/space-infix-ops": "error",
      "keyword-spacing": "off",
      "@stylistic/keyword-spacing": ["error", { before: true, after: true }],
      "comma-spacing": "off",
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "no-extra-parens": "off",
      "@stylistic/no-extra-parens": ["error", "functions"],
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-loss-of-precision": "off",
      "@typescript-eslint/no-loss-of-precision": "error",
      "lines-between-class-members": "off",
      "@stylistic/lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ],

      // off
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/parameter-properties": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      // handled by unused-imports/no-unused-imports
      "@typescript-eslint/no-unused-vars": "off",
      // handled by unused-imports/no-unused-vars

      /**
       * Basic
       */
      // import
      "import/order": "off", // Replaced by perfectionist/sort-imports
      "import/first": "off",
      "import/no-mutable-exports": "error",
      "import/no-unresolved": "off",
      "import/no-absolute-path": "off",
      "import/newline-after-import": 'off',

      // Common
      semi: ["error", "always"],
      curly: ["error", "all"],
      quotes: ["error", "single"],
      "quote-props": ["error", "consistent-as-needed"],

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "\\b(type|of|returns)\\b", // Arguments containing the words "type", "of", or "returns" will be ignored --> nest-server
        },
      ],

      "no-param-reassign": "off",
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": ["error", "always"],
      camelcase: "off",
      "comma-style": ["error", "last"],
      "no-constant-condition": "warn",
      "no-debugger": "error",
      "no-console": ["error", { allow: ["debug", "info", "warn", "error"] }],
      "no-cond-assign": ["error", "always"],
      "func-call-spacing": "off",
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-restricted-syntax": [
        "error",
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement",
      ],
      "no-return-await": "off",
      "no-restricted-globals": [
        "error",
        { name: "global", message: "Use `globalThis` instead." },
        { name: "self", message: "Use `globalThis` instead." },
      ],
      "no-restricted-properties": [
        "error",
        {
          property: "__proto__",
          message:
            "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
        },
        {
          property: "__defineGetter__",
          message: "Use `Object.defineProperty` instead.",
        },
        {
          property: "__defineSetter__",
          message: "Use `Object.defineProperty` instead.",
        },
        {
          property: "__lookupGetter__",
          message: "Use `Object.getOwnPropertyDescriptor` instead.",
        },
        {
          property: "__lookupSetter__",
          message: "Use `Object.getOwnPropertyDescriptor` instead.",
        },
      ],

      // es6
      "no-var": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "all",
          ignoreReadBeforeAssign: true,
        },
      ],
      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      "object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      "prefer-exponentiation-operator": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
      "generator-star-spacing": "off",
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            markers: ["/"],
            exceptions: ["/", "#"],
          },
          block: {
            markers: ["!"],
            exceptions: ["*"],
            balanced: true,
          },
        },
      ],

      // best-practice
      "array-callback-return": "error",
      "block-scoped-var": "error",
      "consistent-return": "off",
      complexity: "off",
      indent: "off", // Disallows inconsistent indentation
      eqeqeq: ["error", "smart"],
      "no-alert": "warn",
      "no-case-declarations": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-with": "error",
      "no-void": "error",
      "no-useless-escape": "off",
      "vars-on-top": "error",
      "require-await": "off",
      "no-return-assign": "off",
      "operator-linebreak": ["error", "before"],
      "max-statements-per-line": ["error", { max: 1 }],

      // node
      "n/no-callback-literal": "off",
      "eslint-comments/disable-enable-pair": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "import/namespace": "off",

      // yml
      "yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
      "yml/no-empty-document": "off",
    },
  },
];
