import { randWord } from '@ngneat/falso';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiInnerJoinLIcon, UiInnerJoinMIcon } from '~';

function getDisabledClasses(enabledId: string, disabledId: string): string[] {
  const enabled = screen.getByTestId(enabledId);
  const disabled = screen.getByTestId(disabledId);

  return [...disabled.classList.values()].filter(
    (className) => !enabled.classList.contains(className),
  );
}

describe('UiNodeMIcon', () => {
  it('allows to provide class', () => {
    const className = randWord();

    render(<UiInnerJoinMIcon className={className} testId="subject" />);

    const icon = screen.getByTestId('subject');

    expect(icon).toHaveClass(className);
  });

  it('adds disabled class when `isDisabled` is given', () => {
    render(
      <>
        <UiInnerJoinMIcon testId="enabled-subject" />
        <UiInnerJoinMIcon isDisabled testId="disabled-subject" />
      </>,
    );

    const disabledClasses = getDisabledClasses('enabled-subject', 'disabled-subject');

    expect(disabledClasses).toHaveLength(1);
  });
});

describe('UiNodeLIcon', () => {
  it('allows to provide class', () => {
    const className = randWord();

    render(<UiInnerJoinLIcon className={className} testId="subject" />);

    const icon = screen.getByTestId('subject');

    expect(icon).toHaveClass(className);
  });

  it('adds disabled class when `isDisabled` is given', () => {
    render(
      <>
        <UiInnerJoinLIcon testId="enabled-subject" />
        <UiInnerJoinLIcon isDisabled testId="disabled-subject" />
      </>,
    );

    const disabledClasses = getDisabledClasses('enabled-subject', 'disabled-subject');

    expect(disabledClasses).toHaveLength(1);
  });
});
