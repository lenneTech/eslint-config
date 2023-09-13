console.log("Linting Angular...");

module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        // This is required if you use inline templates in Components
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        /**
         * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
        "@angular-eslint/directive-selector": [
          "error",
          { type: "attribute", prefix: "app", style: "camelCase" },
        ], // Enforces a consistent naming convention for Angular directives
        "@angular-eslint/component-selector": [
          "error",
          { type: "element", prefix: "app", style: "kebab-case" },
        ], // Enforces a consistent naming convention for Angular components
        "no-async-promise-executor": "warn", // Warns when using an async function as a Promise executor
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "error", // Reports unused variables in TypeScript code
      },
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
      ],
      rules: {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
        "@angular-eslint/template/interactive-supports-focus": "warn", // Warns about interactive elements lacking keyboard focus handling in Angular templates
        "@angular-eslint/template/click-events-have-key-events": "warn", // Warns about clickable elements lacking keyboard support in Angular templates
      },
    },
  ],
  ignorePatterns: ["**/*.js"],
  rules: {
    // TS
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ], // Bans specific TypeScript comment syntax
    "@typescript-eslint/member-delimiter-style": [
      "error",
      { multiline: { delimiter: "semi" } },
    ], // Enforces member delimiter style in TypeScript interfaces and type literals
    "@typescript-eslint/type-annotation-spacing": ["error", {}], // Enforces consistent spacing around type annotations in TypeScript
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Enforces consistent usage of type definitions in TypeScript (interface vs type)
    "@typescript-eslint/prefer-ts-expect-error": "error", // Recommends using '@ts-expect-error' over '@ts-ignore' when ignoring TypeScript errors
    "@typescript-eslint/no-require-imports": "error", // Disallows using the `require` function to import modules in TypeScript
    "no-useless-constructor": "off", // Disallows unnecessary constructors
    indent: "off", // Disallows inconsistent indentation
    "@typescript-eslint/no-invalid-this": "error", // Reports invalid uses of 'this' in TypeScript code

    "@typescript-eslint/no-redeclare": "error", // Reports redeclaring variables in TypeScript code
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ], // Reports using variables before they are defined in TypeScript code (excluding functions and classes)
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"], // Enforces trailing commas in TypeScript arrays and objects, but only in multiline expressions
    "@typescript-eslint/object-curly-spacing": ["error", "always"], // Enforces consistent spacing inside braces for TypeScript objects
    "@typescript-eslint/semi": ["error"], // Enforces the use of semicolons in TypeScript code
    "@typescript-eslint/quotes": ["error", "single"], // Enforces the consistent use of single quotes in TypeScript code
    "@typescript-eslint/space-before-blocks": ["error", "always"], // Enforces consistent spacing before blocks in TypeScript code
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ], // Enforces consistent spacing before function parentheses in TypeScript code, with specific rules for anonymous, named, and async arrow functions
    "@typescript-eslint/space-infix-ops": "error", // Enforces spacing around infix operators in TypeScript code
    "@typescript-eslint/keyword-spacing": [
      "error",
      { before: true, after: true },
    ], // Enforces consistent spacing before and after keywords in TypeScript code
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ], // Enforces consistent spacing before and after commas in TypeScript code
    "@typescript-eslint/no-extra-parens": ["error", "functions"], // Reports unnecessary parentheses in TypeScript code, excluding function expressions
    "@typescript-eslint/no-dupe-class-members": "error", // Reports duplicate class members in TypeScript code
    "@typescript-eslint/no-loss-of-precision": "error", // Reports literal numbers that lose precision in TypeScript code
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ], // Requires an empty line between class members in TypeScript code, except after a single-line member

    // normal
    "no-console": ["error", { allow: ["info", "debug", "warn", "error"] }], // Disallows or restricts the use of certain console methods
    "prefer-template": "error",
    curly: ["error"],
    "max-statements-per-line": ["error", { max: 1 }],
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

    // off
    // TS
    "@typescript-eslint/consistent-indexed-object-style": "off", // Enforces consistent usage of index signatures or record types in TypeScript code
    "@typescript-eslint/naming-convention": "off", // Enforces naming conventions for variables, functions, classes, etc. in TypeScript code
    "@typescript-eslint/explicit-member-accessibility": "off", // Requires explicit accessibility modifiers on class members in TypeScript code
    "@typescript-eslint/parameter-properties": "off", // Requires parameter properties to be declared on the constructor in TypeScript code
    "@typescript-eslint/interface-name-prefix": "off", // Requires or disallows a prefix for interface names in TypeScript code
    "@typescript-eslint/no-empty-interface": "off", // Disallows empty interfaces in TypeScript code
    "@typescript-eslint/ban-ts-ignore": "off", // Disallows the use of the '@ts-ignore' comment in TypeScript code
    "@typescript-eslint/no-empty-function": "off", // Disallows empty function declarations in TypeScript code
    "@typescript-eslint/no-non-null-assertion": "off", // Disallows the use of the non-null assertion operator (!) in TypeScript code
    "@typescript-eslint/explicit-module-boundary-types": "off", // Requires explicit return and parameter types on exported functions and methods in TypeScript code
    "@typescript-eslint/ban-types": "off", // Disallows specific types in TypeScript code
    "@typescript-eslint/triple-slash-reference": "off", // Disallows the use of triple slash reference directives in TypeScript code

    // normal
    "no-invalid-this": "off", // Disallows using 'this' outside of classes or class-like objects (turned off because the TypeScript rule handles it)
    "no-redeclare": "off", // Disallows redeclaring variables (turned off because the TypeScript rule handles it)
    "no-use-before-define": "off", // Disallows using variables before they are defined (turned off because the TypeScript rule handles it)
    "brace-style": "off", // Enforces consistent brace style for blocks (turned off because the TypeScript rule handles it)
    "object-curly-spacing": "off", // Enforces consistent spacing inside braces for objects (turned off because the TypeScript rule handles it)
    semi: "off", // Disallows or enforces semicolons (turned off because the TypeScript rule handles it)
    quotes: "off", // Enforces the consistent use of either single or double quotes (turned off because the TypeScript rule handles it)
    "space-before-blocks": "off", // Enforces consistent spacing before blocks (turned off because the TypeScript rule handles it)
    "space-before-function-paren": "off", // Enforces consistent spacing before function parentheses (turned off because the TypeScript rule handles it)
    "space-infix-ops": "off", // Enforces spacing around infix operators (turned off because the TypeScript rule handles it)
    "keyword-spacing": "off", // Enforces consistent spacing before and after keywords (turned off because the TypeScript rule handles it)
    "comma-spacing": "off", // Enforces consistent spacing before and after commas (turned off because the TypeScript rule handles it)
    "no-extra-parens": "off", // Disallows unnecessary parentheses (turned off because the TypeScript rule handles it)
    "no-dupe-class-members": "off", // Disallows duplicate class members (turned off because the TypeScript rule handles it)
    "no-loss-of-precision": "off", // Disallows literal numbers that lose precision (turned off because the TypeScript rule handles it)
    "lines-between-class-members": "off", // Requires an empty line between class members (turned off because the TypeScript rule handles it)
  },
};
