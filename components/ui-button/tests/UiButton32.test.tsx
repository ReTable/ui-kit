import { FC } from 'react';

import { randUrl, randWord } from '@ngneat/falso';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiButton32 } from '~';

function getDisabledAndFrozenClasses(
  enabledId: string,
  disabledId: string,
  frozenId: string,
): [string, string] {
  const enabled = screen.getByTestId(enabledId);
  const disabled = screen.getByTestId(disabledId);
  const frozen = screen.getByTestId(frozenId);

  const disabledClasses = [...disabled.classList.values()]
    .filter((className) => !enabled.classList.contains(className))
    .join(' ');
  const frozenClasses = [...frozen.classList.values()]
    .filter((className) => !enabled.classList.contains(className))
    .join(' ');

  return [disabledClasses, frozenClasses];
}

const Icon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} data-testid="icon" />
);

describe('UiButton32', () => {
  const variant = 'primaryDesign';

  it('renders button by default', () => {
    render(
      <UiButton32 testId="subject" variant={variant}>
        Button
      </UiButton32>,
    );

    const button = screen.getByTestId('subject');

    expect(button.nodeName).toBe('BUTTON');

    expect(button).toBeEnabled();

    expect(button).toHaveAttribute('tabIndex', '0');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveTextContent('Button');

    expect(button).not.toHaveAttribute('data-track-id');
  });

  describe('button', () => {
    it('renders button when `as` is `button`', () => {
      render(
        <UiButton32 testId="subject" type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('BUTTON');

      expect(button).toBeEnabled();

      expect(button).toHaveAttribute('tabIndex', '0');
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveTextContent('Button');

      expect(button).not.toHaveAttribute('data-track-id');
    });

    it('allows render an icon', () => {
      render(
        <UiButton32 icon={Icon} testId="subject" type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide class', () => {
      const className = randWord();

      render(
        <UiButton32 className={className} testId="subject" type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton32 testId="subject" type="button" variant={variant}>
          {title}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton32 testId="subject" title={title} type="button" variant={variant}>
          {label}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton32 testId="subject" trackId={trackId} type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton32 isDisabled testId="subject" type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton32 isFrozen testId="subject" type="button" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton32 testId="enabled-subject" type="button" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 isDisabled testId="disabled-subject" type="button" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 isFrozen testId="frozen-subject" type="button" variant={variant}>
            Button
          </UiButton32>
        </>,
      );

      const [disabledClasses, frozenClasses] = getDisabledAndFrozenClasses(
        'enabled-subject',
        'disabled-subject',
        'frozen-subject',
      );

      expect(disabledClasses).not.toBe(frozenClasses);
    });
  });

  describe('link', () => {
    it('renders link when `as` is `link`', () => {
      render(
        <UiButton32 as="a" href="#" testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('A');

      expect(button).toHaveAttribute('tabIndex', '0');

      expect(button).not.toHaveAttribute('aria-disabled');
      expect(button).not.toHaveAttribute('data-track-id');
      expect(button).not.toHaveAttribute('rel');
      expect(button).not.toHaveAttribute('target');

      expect(button).toHaveTextContent('Button');
    });

    it('allows render an icon', () => {
      render(
        <UiButton32 as="a" href="#" icon={Icon} testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide className', () => {
      const className = randWord();

      render(
        <UiButton32 as="a" className={className} href="#" testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton32 as="a" href="#" testId="subject" variant={variant}>
          {title}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton32 as="a" href="#" testId="subject" title={title} variant={variant}>
          {label}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton32 as="a" href="#" testId="subject" trackId={trackId} variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton32 as="a" href="#" isDisabled testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toHaveAttribute('href');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton32 as="a" href="#" isFrozen testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toHaveAttribute('href');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton32 as="a" href="#" testId="enabled-subject" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 as="a" href="#" isDisabled testId="disabled-subject" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 as="a" href="#" isFrozen testId="frozen-subject" variant={variant}>
            Button
          </UiButton32>
        </>,
      );

      const [disabledClasses, frozenClasses] = getDisabledAndFrozenClasses(
        'enabled-subject',
        'disabled-subject',
        'frozen-subject',
      );

      expect(disabledClasses).not.toBe(frozenClasses);
    });

    it('renders href attribute', () => {
      const href = randUrl();

      render(
        <UiButton32 as="a" href={href} testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('href', href);
    });

    it('allows to provide target', () => {
      render(
        <UiButton32 as="a" href="#" target="_blank" testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('target', '_blank');
    });

    it('allows to provide rel', () => {
      render(
        <UiButton32 as="a" href="#" rel="noreferrer noopener" testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });

  describe('visual', () => {
    it('renders div when `as` is `visual`', () => {
      render(
        <UiButton32 as="div" testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('DIV');

      expect(button).toHaveAttribute('role', 'button');
      expect(button).toHaveAttribute('tabIndex', '0');

      expect(button).not.toHaveAttribute('aria-disabled');
      expect(button).not.toHaveAttribute('data-track-id');

      expect(button).toHaveTextContent('Button');
    });

    it('allows render an icon', () => {
      render(
        <UiButton32 as="div" icon={Icon} testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide className', () => {
      const className = randWord();

      render(
        <UiButton32 as="div" className={className} testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton32 as="div" testId="subject" variant={variant}>
          {title}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton32 as="div" testId="subject" title={title} variant={variant}>
          {label}
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton32 as="div" testId="subject" trackId={trackId} variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton32 as="div" isDisabled testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton32 as="div" isFrozen testId="subject" variant={variant}>
          Button
        </UiButton32>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton32 as="div" testId="enabled-subject" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 as="div" isDisabled testId="disabled-subject" variant={variant}>
            Button
          </UiButton32>
          <UiButton32 as="div" isFrozen testId="frozen-subject" variant={variant}>
            Button
          </UiButton32>
        </>,
      );

      const [disabledClasses, frozenClasses] = getDisabledAndFrozenClasses(
        'enabled-subject',
        'disabled-subject',
        'frozen-subject',
      );

      expect(disabledClasses).not.toBe(frozenClasses);
    });
  });
});
