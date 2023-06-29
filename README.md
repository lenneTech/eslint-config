# @lenne.tech/eslint-config

This repository contains multiple ESLint configurations bundled together. It provides configurations for Angular, Vue, and TypeScript projects.

## Installation

To install the ESLint configuration for a specific framework, you can use npm. For example, to install the Angular configuration, run the following command:

```bash
npm install @lenne.tech/eslint-config-angular
```



## Configuration

Once the package is installed, you need to update your project's ESLint configuration file (usually `.eslintrc`) to extend the desired configuration. Here's an example for Angular:

```json
{
  "extends": "@lenne.tech/eslint-config-angular"
}
```

Similarly, you can extend the configurations for TypeScript and Vue projects by replacing @lenne.tech/eslint-config-angular with @lenne.tech/eslint-config-ts and @lenne.tech/eslint-config-vue respectively.

Make sure to adjust your ESLint configuration based on your project's needs, and consider adding any additional rules or plugins specific to your project.

## Contributing

Contributions to this ESLint configuration package are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/lenneTech/eslint-config).

## License

This package is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it in your projects.


