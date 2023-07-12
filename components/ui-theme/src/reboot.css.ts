import { GlobalStyleRule, globalStyle } from '@vanilla-extract/css';

import { monospace, sansSerif } from './fontFaces.css';
import { layers } from './layers.css';

// region Helpers

function join(rawSelector: string[] | string) {
  return Array.isArray(rawSelector) ? rawSelector.join(', ') : rawSelector;
}

function resetStyle(selectors: string[] | string, rule: GlobalStyleRule) {
  globalStyle(join(selectors), {
    '@layer': {
      [layers.reset]: rule,
    },
  });
}

function where(selectors: string[] | string, pseudo = '') {
  return `:where(${join(selectors)})${pseudo}`;
}

// endregion

// region Document

resetStyle(['*', ':after', ':before'], {
  // NOTE: NOTE: Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
  boxSizing: 'border-box',
});

resetStyle(where('html'), {
  width: '100%',
  height: '100%',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
});

// endregion

// region Sections

resetStyle(where('body'), {
  width: '100%',
  height: '100%',
  // NOTE: Remove the margin in all browsers.
  margin: '0',
  // NOTE: As a best practice, apply a default `body-background`.
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: sansSerif,
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '22px',
});

resetStyle(where(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']), {
  // NOTE: Remove top margins from headings.
  //
  //       By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke
  //       the top margin for easier control within type scales as it avoids
  //       margin collapsing.
  marginTop: '0',
  marginBottom: '0.5em',
  color: 'rgba(0, 0, 0, 0.85)',
  fontWeight: '500',
});

resetStyle(where('p'), {
  // NOTE: Reset margins on paragraphs.
  //
  //       Similarly, the top margin on `<p>`s get reset. However, we also reset
  //       the bottom margin to use `em` units instead of `em`.
  marginTop: 0,
  marginBottom: '1em',
});

// endregion

// region Grouping content

resetStyle(where('pre'), {
  // NOTE: Remove browser default top margin.
  marginTop: 0,
  // NOTE: Reset browser default of `1em` to use `em`s.
  marginBottom: '1em',
  // NOTE: Don't allow content to break outside.
  overflow: 'auto',
  fontFamily: monospace,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12px',
  lineHeight: '16px',
});

resetStyle(where('hr'), {
  // NOTE: Add the correct box sizing in Firefox.
  boxSizing: 'content-box',
  height: '0',
  // NOTE: Correct the inheritance of border color in Firefox.
  color: 'inherit',
  // NOTE: Normalize visual style.
  border: '0',
  borderTop: '1px solid',
  borderTopColor: 'inherit',
});

resetStyle(where(['ol', 'ul', 'dl']), {
  marginTop: 0,
  marginBottom: '1em',
});

resetStyle(`${where(['dl', 'ol', 'ul'])} ${where(['dl', 'ol', 'ul'])}`, {
  // NOTE: Remove the margin on nested lists in Chrome, Edge, and Safari.
  marginBlockEnd: 0,
  marginBlockStart: 0,
});

resetStyle(where('dt'), {
  fontWeight: 500,
});

resetStyle(where('dd'), {
  marginBottom: '0.5em',
  // NOTE: Undo browser default.
  marginLeft: 0,
});

resetStyle(where('blockquote'), {
  margin: '0 0 1em',
});

// endregion

// region Text-level semantics

resetStyle(where('abbr[title]'), {
  // NOTE: Add correct text decoration in Chrome, Edge, Opera and Safari.
  textDecorationLine: 'underline',
  textDecorationStyle: 'dotted',
  textDecorationSkipInk: 'auto',
  // NOTE: Add explicit cursor to indicate changed behaviour.
  cursor: 'help',
});

resetStyle(where(['b', 'strong']), {
  // NOTE: Add the correct font weight in Chrome, Edge and Safari.
  fontWeight: 'bolder',
});

resetStyle(where(['code', 'kbd', 'samp']), {
  fontFamily: monospace,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12px',
  lineHeight: '16px',
});

resetStyle(where('small'), {
  // NOTE: Add the correct font size in all browsers.
  fontSize: '80%',
});

resetStyle(where(['sub', 'sup']), {
  position: 'relative',
  fontSize: '75%',
  // NOTE: Prevent `sub` and `sup` elements from affecting the line height in
  //       all browsers.
  lineHeight: 0,
  verticalAlign: 'baseline',
});

resetStyle(where('sub'), {
  bottom: '-0.25em',
});

resetStyle(where('sup'), {
  top: '-0.5em',
});

resetStyle(where('mark'), {
  padding: '0.2em',
  backgroundColor: '#feffe6',
});

// endregion

// region Tabular data

resetStyle(where('table'), {
  // Prevent double borders.
  borderCollapse: 'collapse',
  // NOTE: Correct table border color in Chrome, Edge, and Safari.
  borderColor: 'currentColor',
  //NOTE: Remove text indentation from table contents in Chrome, Edge,
  //      and Safari.
  textIndent: 0,
});

resetStyle(where('caption'), {
  captionSide: 'bottom',
});

// endregion

// region Images

resetStyle(where('img'), {
  verticalAlign: 'middle',
});

resetStyle(where('figure'), {
  // NOTE: Apply a consistent margin strategy.
  margin: '0 0 1em',
});

// endregion

// region Forms

resetStyle(where(['button', 'input', 'optgroup', 'select', 'textarea']), {
  // NOTE: Remove the margin on controls in Safari.
  margin: 0,
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
});

resetStyle(
  where([
    'button',
    'input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i])',
  ]),
  {
    // NOTE: Correct the inability to style buttons in Safari.
    WebkitAppearance: 'button',
  },
);

resetStyle(
  where(
    [
      'button',
      'input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i])',
    ],
    ':not(:disabled)',
  ),
  {
    // NOTE: Add "hand" cursor to non-disabled button elements.
    cursor: 'pointer',
  },
);

resetStyle(where('[role="button" i]'), {
  // NOTE: Set the cursor for non-`<button>` buttons.
  cursor: 'pointer',
});

resetStyle(
  where([
    'input[type="date" i]',
    'input[type="datetime-local" i]',
    'input[type="email" i]',
    'input[type="month" i]',
    'input[type="number" i]',
    'input[type="password" i]',
    'input[type="tel" i]',
    'input[type="text" i]',
    'input[type="time" i]',
    'input[type="url" i]',
  ]),
  {
    WebkitAppearance: 'none',
  },
);

resetStyle(where('input[type="search" i]'), {
  /* NOTE: Correct the outline style in Safari. */
  outlineOffset: '-2px',
  /* NOTE: Correct the odd appearance in Chrome, Edge, and Safari. */
  WebkitAppearance: 'none',
});

resetStyle(where('fieldset'), {
  // NOTE: Browsers set a default `min-width: min-content;` on `<fieldset>`,
  //       unlike e.g. `<div>`s, which have `min-width: 0;` by default.
  //       So we reset that to ensure fieldset behave more like a standard
  //       block element.
  //       See https://github.com/twbs/bootstrap/issues/12359 and
  //       https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
  minWidth: 0,
  // NOTE: Reset the default outline behavior of fieldset so they don't affect
  //       page layout.
  padding: 0,
  margin: 0,
  border: 0,
});

resetStyle(where('legend'), {
  display: 'block',
  width: '100%',
  marginBottom: '0.5em',
  padding: 0,
  fontSize: '1.5em',
  lineHeight: 'inherit',
});

resetStyle(where('output'), {
  display: 'inline-block',
});

resetStyle(where('progress'), {
  // NOTE: Add the correct vertical alignment in Chrome, Edge, and Firefox.
  verticalAlign: 'baseline',
});

resetStyle(where('textarea'), {
  WebkitAppearance: 'none',
  // NOTE: Remove the margin in Firefox and Safari.
  margin: 0,
  // NOTE: Textarea should really only resize vertically so they don't break
  //       their (horizontal) containers.
  resize: 'vertical',
});

resetStyle(
  where(
    [
      'button',
      'input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i])',
    ],
    '::-moz-focus-inner',
  ),
  {
    // NOTE: Remove inner border and padding from Firefox, but don't restore the
    //       outline like Normalize.
    borderStyle: 'none',
    padding: 0,
  },
);

resetStyle(where(':-moz-ui-invalid'), {
  // NOTE: Remove the additional :invalid styles in Firefox.
  boxShadow: 'none',
});

resetStyle('::-webkit-color-swatch-wrapper', {
  // NOTE: Remove padding around color pickers in webkit browsers.
  padding: 0,
});

resetStyle(
  [
    '::-webkit-datetime-edit-day-field',
    '::-webkit-datetime-edit-fields-wrapper',
    '::-webkit-datetime-edit-hour-field',
    '::-webkit-datetime-edit-minute',
    '::-webkit-datetime-edit-month-field',
    '::-webkit-datetime-edit-text',
    '::-webkit-datetime-edit-year-field',
  ],
  {
    // NOTE: Fix height of inputs with a type of datetime-local, date, month,
    //       week, or time.
    padding: 0,
  },
);

resetStyle('::-webkit-input-placeholder', {
  // NOTE: Correct the text style of placeholders in Chrome, Edge,
  //       and Safari.
  color: 'inherit',
  opacity: 0.54,
});

resetStyle('::file-selector-button', {
  /* NOTE: Correct the inability to style clickable types in iOS and Safari. */
  WebkitAppearance: 'button',
  /* NOTE: Change font properties to `inherit` in Safari. */
  font: 'inherit',
});

resetStyle(':not(:disabled)::file-selector-button', {
  cursor: 'pointer',
});

resetStyle('::-webkit-inner-spin-button', {
  // NOTE: Correct the cursor style of increment and decrement buttons
  //       in Safari.
  height: 'auto',
});

resetStyle('::-webkit-search-cancel-button', {
  // NOTE: Remove the inner padding and cancel buttons in Chrome and Safari
  //       on macOS.
  WebkitAppearance: 'none',
});

// endregion

// region Links

resetStyle(where('a'), {
  color: '#1890ff',
  textDecoration: 'none',
  outline: 0,
  cursor: 'pointer',
  /* NOTE: Remove gaps in links underling in Safari 8+. */
  WebkitTextDecorationSkip: 'objects',
});

resetStyle(where('a:hover'), {
  color: '#40a9ff',
});

resetStyle(where('a:active'), {
  color: '#096dd9',
});

resetStyle(where(['a:active', 'a:hover']), {
  textDecoration: 'none',
  outline: 0,
});

resetStyle(where('a:focus'), {
  textDecoration: 'none',
  outline: 0,
});

resetStyle(where('a[disabled]'), {
  color: 'rgba(0, 0, 0, 0.25)',
  cursor: 'not-allowed',
});

// endregion

// region Interactive

resetStyle(where('dialog'), {
  backgroundColor: '#fff',
  border: 'solid',
  color: '#000',
  height: 'fit-content',
  left: '0',
  margin: 'auto',
  padding: '1em',
  position: 'absolute',
  right: '0',
  width: 'fit-content',
});

resetStyle(where('dialog:not([open])'), {
  display: 'none',
});

resetStyle(where('iframe'), {
  // NOTE: Remove border from iframe.
  border: '0',
});

resetStyle(where('summary'), {
  // NOTE: Correct display in all browsers.
  display: 'list-item',
  cursor: 'pointer',
});

resetStyle('::selection', {
  color: '#fff',
  background: '#1890ff',
});

// endregion
