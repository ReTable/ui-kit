---
'@tabula/ui-data-type-icon': minor
---

added exports of SVG files

For example, you can export URL of files like this:

```tsx
import { uiArrayIconUrl } from "@tabula/ui-data-type-icon";
```

It returns the string with relative path to the SVG file, which should be processed by yours bundler.

Also, you can import SVG files directly, from Sass for example:

```scss
.awesome-component {
  background-image: url('@tabula/ui-data-type-icon/array.svg');
}
```

Example above should work with Vite bundler.
