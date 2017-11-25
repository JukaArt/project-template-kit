module.exports = {
  "ignoreFiles": [
    "./dist/**/*",
    "./node_modules/**/*"
  ],
  "rules": {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
      "ignore": ["stylelint-commands", "after-comment"]
    } ],
    "declaration-colon-space-after": "always",
    "declaration-block-no-duplicate-properties": true,
    "indentation": [2, {
      "except": ["value"]
    }],
    "max-empty-lines": 2,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ],
    "unit-whitelist": ["em", "rem", "%", "s", "px", "deg", "ms", "s", "vw", "vh"],
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 0,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never"
  }
};
