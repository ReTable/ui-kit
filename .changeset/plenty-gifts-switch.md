---
'@tabula/ui-separator-icon': minor
---

added exports of SVG files

For example, you can export URL of files like this:

```tsx
import { uiCommaIconUrl } from "@tabula/ui-separator-icon";
```

It returns the string with relative path to the SVG file, which should be processed by yours bundler.

Also, you can import SVG files directly, from Sass for example:

```scss
.awesome-component {
  background-image: url('@tabula/ui-separator-icon/comma.svg');
}
```

Example above should work with Vite bundler.
