---
'@tabula/ui-button': minor
---

add support of HTML attributes

The button component forwards HTML properties to the inner element. You can use relevant properties depends on `as`
property.

```tsx
<UiButton24 type="submit">Submit</UiButton24>
<UiButton24 as='a' href='/main.ru.html' hreflang="ru">Translated Page</UiButton24>
<UiButton24 as='link' component={Link} href='/main/ru' hreflang="ru">Translated Page</UiButton24>
<UiButton24 as='div' data-track-id="unique-id">Submit</UiButton24>
```
