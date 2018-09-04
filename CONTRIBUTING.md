## Style Guide

### Formatting
* Indent with 2 spaces (no tabs).
* Dashes instead of underscores or camel case: `$data-table` not `$data_table` or `$dataTable`.
* Use meaningful and full names: `$input-text-color` not `$input-text` or `$inptxtc`.
* Use two dashes for variable modifier: `$input-text-color--hover`.
* Use space between property and value: `width: 20px` not `width:20px`.
* Use space around operators: `$spacing-l / 2`, `@if($spacing-l <= 20px)` not `$spacing-l/2`, `@if($spacing-l<=20px)`.
* Use parentheses around individual operations in shorthand declarations: `padding: ($spacing-l / 2) ($spacing-l * 2)`.
* Use a `%` unit for the amount/weight when using Sass's color functions: `darken($color, 20%)`, not `darken($color, 20)`.
* Don't add a unit specification after `0` values, unless required by a mixin.
* No trailing whitespace. Blank lines should not have any space.
* Prefer hsl color codes `hsl(330, 30%, 20%)`.

### Order
* Order CSS declarations in first by display properties, then offsets, then other properties by alphabet.
  ```
  .btn
    display: flex
    align-items: baseline
    justify-content: space-between
    margin: -16px auto
    padding: 8px 16px
    font-size: 14px
    color: $header-text-color
  ```
* Place `transition` and `z-index` properties in the end.
* Place `@extend` and `@include` at the top of declaration list.
* Place `@media` queries directly after the declaration list.

### Selectors
* Avoid nesting more than 3 selectors deep.
* Avoid using comma delimited selectors.
* Avoid nesting within a media query.

### SCSS Guide
* Use space before `{`
* Use a trailing comma after each item in a map, including the last item.
