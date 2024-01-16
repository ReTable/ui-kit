---
"@tabula/ui-analytics": minor
---

update behaviour of hooks

Changes for `useUiTrackId`:

- it allows to provide child id
- if child id is not provided or an empty string, then parent id returned

Changes for `useUiTrackIds`:

- it returns parent id itself if id is empty string
