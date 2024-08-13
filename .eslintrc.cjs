module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Customize rules

    // JSX-specific rules
    'react/jsx-no-target-blank': 'off', // Allow links to open in a new tab without "rel=noopener noreferrer"
    'react/jsx-key': 'off', // Disable the requirement for keys in lists
    'react/jsx-no-undef': 'warn', // Warn when using undefined variables in JSX
    'react/jsx-uses-react': 'off', // Not needed for React 17+ as JSX import is handled automatically
    'react/jsx-uses-vars': 'off', // Allow variables used in JSX to not trigger unused variable warnings

    // React-specific rules
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+ as JSX is in scope automatically
    'react/prop-types': 'off', // Disable the requirement for prop types validation
    'react/display-name': 'off', // Don't require display names for components
    'react/no-unknown-property': 'warn', // Warn if an unknown DOM property is used
    'react/no-danger': 'warn', // Warn when using dangerous code like `dangerouslySetInnerHTML`
    'react/no-direct-mutation-state': 'warn', // Warn if state is mutated directly
    'react/no-deprecated': 'warn', // Warn when using deprecated methods in React
    'react/no-find-dom-node': 'warn', // Warn against using findDOMNode, which is considered an anti-pattern
    'react/no-is-mounted': 'warn', // Warn against using `isMounted`, which is deprecated
    'react/no-render-return-value': 'warn', // Warn when using the return value of `ReactDOM.render`
    'react/no-string-refs': 'warn', // Warn against using string refs in React
    'react/no-unescaped-entities': 'off', // Allow unescaped entities like ">" in JSX
    'react/no-children-prop': 'warn', // Warn against passing children as a prop

    // General rules
    'no-unused-vars': 'off', // Allow unused variables without errors
    'no-console': 'off', // Allow console statements (useful for development)
    'no-debugger': 'off', // Allow debugger statements
    'no-undef': 'warn', // Warn when using undefined variables
    'no-unused-expressions': 'warn', // Warn if expressions are unused
    'no-redeclare': 'warn', // Warn if a variable is redeclared
    'no-dupe-keys': 'warn', // Warn if duplicate keys exist in an object
    'no-duplicate-case': 'warn', // Warn if duplicate cases exist in a switch statement
    'no-empty': 'warn', // Warn when empty blocks are used
    'no-ex-assign': 'warn', // Warn against assignment in `catch` block
    'no-extra-boolean-cast': 'warn', // Warn against unnecessary boolean casting
    'no-extra-semi': 'warn', // Warn against unnecessary semicolons
    'no-func-assign': 'warn', // Warn if function declarations are overwritten
    'no-invalid-regexp': 'warn', // Warn if a regular expression is invalid
    'no-irregular-whitespace': 'warn', // Warn if irregular whitespace is used
    'no-sparse-arrays': 'warn', // Warn against sparse arrays
    'no-unreachable': 'warn', // Warn if code is unreachable
    'use-isnan': 'warn', // Warn against comparisons with NaN
    'valid-typeof': 'warn', // Warn if an invalid typeof comparison is made
    'eqeqeq': 'warn', // Warn if `==` or `!=` is used instead of `===` or `!==`

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'warn', // Warn if Hooks are not used correctly
    'react-hooks/exhaustive-deps': 'warn', // Warn if dependencies are not specified correctly in Hooks
  },
};
