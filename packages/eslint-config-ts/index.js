console.log("Linting TypeScript...");

module.exports = {
  extends: [
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
  ],
  plugins: ["no-only-tests", "unused-imports"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
  },
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
    "@typescript-eslint/member-delimiter-style": [
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
    "@typescript-eslint/type-annotation-spacing": ["error", {}],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-require-imports": "error",
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
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: false },
    ],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "single"],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      { before: true, after: true },
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
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

    /**
     * Basic
     */

    // import
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "import/newline-after-import": [
      "error",
      { count: 1, considerComments: true },
    ],

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

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    // yml
    "yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
    "yml/no-empty-document": "off",
  },
};
