module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/html-self-closing': 'off',
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/maxi-attributes-per-line': ['warn', 3],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 6,
    },
};
