module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:vue/essential",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "modules": true
        }
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": 0,
    }
}
