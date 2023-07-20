---
'@tabula/ui-icon': patch
---

generate correct component names

The `svgr` usually generate `Svg<FileName>` component names.

Now we generate `Ui<FileName>Icon` component names.

This naming is more intuitive for using with React Dev Tools.
