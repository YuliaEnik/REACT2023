module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "root": true,
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
          "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "comma-dangle": ["error", "only-multiline"],
        "react/prop-types": "off",
        "react/display-name": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "prettier/prettier": ["error", { "endOfLine": "auto" }],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-var-reqiures": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
          "pragma": "React",
          "version": "detect"
        }
    }
}
