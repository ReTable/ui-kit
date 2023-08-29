---
'@tabula/ui-theme': minor
---

change color variables names format.

If a color variable is alpha, then we replace `-alpha--<X>` with `--A<X>`:

  - `uiTheme.colors.accentAlpha[60]` to `--tbl--colors--accent--A60`

If a color variable is ended with `--<word><number>`, then we join them with `-`:

  - `uiTheme.colors.accentShades.secondary1` to `--tbl--colors--accent-shades--secondary-1`

And doesn't change variable if it's ended with `--<number>`:

  - `uiTheme.colors.accentSecondaryGrey[800]` to `$colors--accent-secondary-grey--800`

This changes doesn't affect existing color variables.
