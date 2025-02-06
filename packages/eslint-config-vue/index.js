console.debug("Linting Vue...");
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    ignores: [
      "dist/",
      ".yalc/",
      "node_modules/",
      ".husky/",
      "extras/",
      ".nuxt/",
      "*/*/.nuxt/",
      '*.md',
      '.gitignore',
      '.eslintrc',
      'package.json',
      'package-lock.json',
      'pnpm-lock.yaml',
      'vitest.config.js',
      'tailwind.config.js',
      '.lintstagedrc',
      'yarn.lock',
      '.gitlab-ci.yml',
      'lerna.json',
      'assets/**',
      '.output',
      'playwright-report',
      '.vscode',
      'test-results',
    ],
  },
  {
    files: ["*.ts", "*.js", "*.vue", "**/*.ts", "**/*.js", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": typescript,
      perfectionist,
      "@stylistic": stylistic,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      ...vue.configs["vue3-recommended"].rules,
      ...typescript.configs["recommended"].rules,


      "perfectionist/sort-classes": "off",
      "perfectionist/sort-vue-attributes": "off",

      "vue/max-attributes-per-line": "off",
      "vue/no-v-html": "off",
      "vue/require-prop-types": "off",
      "vue/require-default-prop": "off",
      "vue/multi-word-component-names": "off",
      "vue/prefer-import-from-vue": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/no-dupe-keys": "off",

      // reactivity transform
      "vue/no-setup-props-destructure": "off",
      "vue/component-tags-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/block-tag-newline": [
        "error",
        {
          singleline: "always",
          multiline: "always",
        },
      ],
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/component-options-name-casing": ["error", "PascalCase"],
      "vue/custom-event-name-casing": ["error", "camelCase"],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"],
        },
      ],
      "vue/html-comment-content-spacing": [
        "error",
        "always",
        {
          exceptions: ["-"],
        },
      ],
      "vue/no-restricted-v-bind": ["error", "/^v-/"],
      "vue/no-useless-v-bind": "error",
      "vue/no-unused-refs": "error",
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/prefer-separate-static-class": "error",

      // extensions
      "vue/array-bracket-spacing": ["error", "never"],
      "vue/arrow-spacing": ["error", { before: true, after: true }],
      "vue/block-spacing": ["error", "always"],
      "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
      "vue/comma-dangle": ["error", "always-multiline"],
      "vue/comma-spacing": ["error", { before: false, after: true }],
      "vue/comma-style": ["error", "last"],
      "vue/dot-location": ["error", "property"],
      "vue/dot-notation": ["error", { allowKeywords: true }],
      "vue/eqeqeq": ["error", "smart"],
      // 'vue/func-call-spacing': ['off', 'never'],
      "vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "vue/keyword-spacing": ["error", { before: true, after: true }],
      "vue/no-constant-condition": "warn",
      "vue/no-empty-pattern": "error",
      "vue/no-extra-parens": ["error", "functions"],
      "vue/no-irregular-whitespace": "error",
      "vue/no-loss-of-precision": "error",
      "vue/no-restricted-syntax": [
        "error",
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement",
      ],
      "vue/no-sparse-arrays": "error",
      "vue/object-curly-newline": [
        "error",
        { multiline: true, consistent: true },
      ],
      "vue/object-curly-spacing": ["error", "always"],
      "vue/object-property-newline": [
        "error",
        { allowMultiplePropertiesPerLine: true },
      ],
      "vue/object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      "vue/operator-linebreak": ["error", "before"],
      "vue/prefer-template": "error",
      "vue/quote-props": ["error", "consistent-as-needed"],
      "vue/space-in-parens": ["error", "never"],
      "vue/space-infix-ops": "error",
      "vue/space-unary-ops": ["error", { words: true, nonwords: false }],
      "vue/template-curly-spacing": "error",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],

      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            ["UNIQUE", "SLOT"],
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "EVENTS",
            "CONTENT",
          ],
          alphabetical: false,
        },
      ],

      /*
      TypeScript
      */

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
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", disallowTypeAnnotations: false },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/no-require-imports": "warn",
      // Override JS
      "no-useless-constructor": "off",
      indent: "off",
      "@stylistic/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [
            "TemplateLiteral *",
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXFragment",
            "JSXOpeningFragment",
            "JSXClosingFragment",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
            "TSTypeParameterInstantiation",
            "FunctionExpression > .params[decorators.length > 0]",
            "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
            "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
          ],
          offsetTernaryExpressions: true,
        },
      ],
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
      "comma-dangle": "off",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": "off",
      "@stylistic/object-curly-spacing": ["error", "always"],
      semi: "off",
      "@stylistic/semi": ["error"],
      quotes: "off",
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
      "no-console": ["error", { allow: ["info", "debug", "warn", "error"] }],
      curly: ["error", "all"],
      "max-statements-per-line": ["error", { max: 1 }],

      "@typescript-eslint/no-unused-vars": "warn",

      // off
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/parameter-properties": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
