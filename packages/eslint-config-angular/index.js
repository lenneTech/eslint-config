console.log("Linting Angular...");
import tsParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";

export default [
  { ignores: ["dist/", ".yalc/", "node_modules/", ".husky/", "extras/"] },
  {
    files: ["*.ts", "*.js", "**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": typescript,
      "@stylistic": stylistic,
      typescript,
    },
    rules: {
      // TS
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ], // Bans specific TypeScript comment syntax
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
      ], // Enforces member delimiter style in TypeScript interfaces and type literals
      "@stylistic/type-annotation-spacing": ["error", {}], // Enforces consistent spacing around type annotations in TypeScript
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Enforces consistent usage of type definitions in TypeScript (interface vs type)
      "@typescript-eslint/prefer-ts-expect-error": "error", // Recommends using '@ts-expect-error' over '@ts-ignore' when ignoring TypeScript errors
      "@typescript-eslint/no-require-imports": "warn", // Disallows using the `require` function to import modules in TypeScript
      "no-useless-constructor": "off", // Disallows unnecessary constructors
      indent: "off", // Disallows inconsistent indentation
      "@typescript-eslint/no-invalid-this": "error", // Reports invalid uses of 'this' in TypeScript code

      "@typescript-eslint/no-redeclare": "error", // Reports redeclaring variables in TypeScript code
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: false, variables: true },
      ], // Reports using variables before they are defined in TypeScript code (excluding functions and classes)
      "@stylistic/comma-dangle": ["error", "only-multiline"], // Enforces trailing commas in TypeScript arrays and objects, but only in multiline expressions
      "@stylistic/object-curly-spacing": ["error", "always"], // Enforces consistent spacing inside braces for TypeScript objects
      "@stylistic/semi": ["error"], // Enforces the use of semicolons in TypeScript code
      "@stylistic/quotes": ["error", "single"], // Enforces the consistent use of single quotes in TypeScript code
      "@stylistic/space-before-blocks": ["error", "always"], // Enforces consistent spacing before blocks in TypeScript code
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ], // Enforces consistent spacing before function parentheses in TypeScript code, with specific rules for anonymous, named, and async arrow functions
      "@stylistic/space-infix-ops": "error", // Enforces spacing around infix operators in TypeScript code
      "@stylistic/keyword-spacing": ["error", { before: true, after: true }], // Enforces consistent spacing before and after keywords in TypeScript code
      "@stylistic/comma-spacing": ["error", { before: false, after: true }], // Enforces consistent spacing before and after commas in TypeScript code
      "@stylistic/no-extra-parens": ["error", "functions"], // Reports unnecessary parentheses in TypeScript code, excluding function expressions
      "@typescript-eslint/no-dupe-class-members": "error", // Reports duplicate class members in TypeScript code
      "@typescript-eslint/no-loss-of-precision": "error", // Reports literal numbers that lose precision in TypeScript code
      "@stylistic/lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ], // Requires an empty line between class members in TypeScript code, except after a single-line member
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }],

      // normal
      "no-console": ["error", { allow: ["info", "debug", "warn", "error"] }], // Disallows or restricts the use of certain console methods
      "prefer-template": "error",
      curly: ["error", "all"],
      "max-statements-per-line": ["error", { max: 1 }],

      "@typescript-eslint/no-unused-vars": "warn",

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
  },
];
