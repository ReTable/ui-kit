import { FC } from 'react';

import { randUrl, randWord } from '@ngneat/falso';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiButton48 } from '~';

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

describe('UiButton48', () => {
  const variant = 'primary';

  it('renders button by default', () => {
    render(
      <UiButton48 testId="subject" variant={variant}>
        Button
      </UiButton48>,
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
    it('renders button when `type` is `button`', () => {
      render(
        <UiButton48 testId="subject" type="button" variant={variant}>
          Button
        </UiButton48>,
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
        <UiButton48 icon={Icon} testId="subject" type="button" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide class', () => {
      const className = randWord();

      render(
        <UiButton48 className={className} testId="subject" type="button" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton48 testId="subject" type="button" variant={variant}>
          {title}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton48 testId="subject" title={title} type="button" variant={variant}>
          {label}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton48 testId="subject" trackId={trackId} type="button" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton48 isDisabled testId="subject" type="button" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton48 isFrozen testId="subject" type="button" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton48 testId="enabled-subject" type="button" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 isDisabled testId="disabled-subject" type="button" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 isFrozen testId="frozen-subject" type="button" variant={variant}>
            Button
          </UiButton48>
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
    it('renders link when `type` is `link`', () => {
      render(
        <UiButton48 href="#" testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
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
        <UiButton48 href="#" icon={Icon} testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide className', () => {
      const className = randWord();

      render(
        <UiButton48 className={className} href="#" testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton48 href="#" testId="subject" type="link" variant={variant}>
          {title}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton48 href="#" testId="subject" title={title} type="link" variant={variant}>
          {label}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton48 href="#" testId="subject" trackId={trackId} type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton48 href="#" isDisabled testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toHaveAttribute('href');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton48 href="#" isFrozen testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toHaveAttribute('href');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton48 href="#" testId="enabled-subject" type="link" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 href="#" isDisabled testId="disabled-subject" type="link" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 href="#" isFrozen testId="frozen-subject" type="link" variant={variant}>
            Button
          </UiButton48>
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
        <UiButton48 href={href} testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('href', href);
    });

    it('allows to provide target', () => {
      render(
        <UiButton48 href="#" target="_blank" testId="subject" type="link" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('target', '_blank');
    });

    it('allows to provide rel', () => {
      render(
        <UiButton48
          href="#"
          rel="noreferrer noopener"
          testId="subject"
          type="link"
          variant={variant}
        >
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('rel', 'noreferrer noopener');
    });
  });

  describe('visual', () => {
    it('renders div when `type` is `visual`', () => {
      render(
        <UiButton48 testId="subject" type="visual" variant={variant}>
          Button
        </UiButton48>,
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
        <UiButton48 icon={Icon} testId="subject" type="visual" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');
      const icon = screen.getByTestId('icon');

      expect(button).toContainElement(icon);
    });

    it('allows to provide className', () => {
      const className = randWord();

      render(
        <UiButton48 className={className} testId="subject" type="visual" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveClass(className);
    });

    it('uses children as title by default', () => {
      const title = randWord();

      render(
        <UiButton48 testId="subject" type="visual" variant={variant}>
          {title}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(title);
    });

    it('allows to provide title', () => {
      const label = randWord();
      const title = randWord();

      render(
        <UiButton48 testId="subject" title={title} type="visual" variant={variant}>
          {label}
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('title', title);

      expect(button).toHaveTextContent(label);
    });

    it('allows to provide track id', () => {
      const trackId = randWord();

      render(
        <UiButton48 testId="subject" trackId={trackId} type="visual" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('data-track-id', trackId);
    });

    it('allows to disable button', () => {
      render(
        <UiButton48 isDisabled testId="subject" type="visual" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('allows to freeze button', () => {
      render(
        <UiButton48 isFrozen testId="subject" type="visual" variant={variant}>
          Button
        </UiButton48>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).not.toHaveAttribute('tabIndex');
    });

    it('has different classes for disabled and frozen states', () => {
      render(
        <>
          <UiButton48 testId="enabled-subject" type="visual" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 isDisabled testId="disabled-subject" type="visual" variant={variant}>
            Button
          </UiButton48>
          <UiButton48 isFrozen testId="frozen-subject" type="visual" variant={variant}>
            Button
          </UiButton48>
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
