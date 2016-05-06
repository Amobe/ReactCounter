module.exports = {
    "extends": [
        "airbnb-base",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "installedESLint": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "semi": [2, "never"],
        "strict": 0,
        "quotes": [ 2, "single" ],
        "eol-last": [ 0 ],
        "no-mixed-requires": [ 0 ],
        "no-underscore-dangle": [ 0 ],
        "no-console": 0,
        "import/no-unresolved": 0,
        "arrow-body-style": 0,
    },
    "plugins": [
        'react'
    ]
};

