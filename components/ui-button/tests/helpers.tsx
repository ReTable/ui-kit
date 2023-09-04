import { ComponentType, FC } from 'react';

import { randWord } from '@ngneat/falso';
import { render, screen } from '@testing-library/react';
import { randomInt } from 'crypto';
import { describe, expect, it } from 'vitest';

import { UiButton20Props, UiButtonElement } from '~';

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

type BaseButtonProps = Pick<
  UiButton20Props,
  'as' | 'children' | 'className' | 'icon' | 'isDisabled' | 'isFrozen' | 'tabIndex' | 'title'
> & {
  testId?: string;
};

export type ButtonProps =
  | (BaseButtonProps & { as?: 'button' })
  | (BaseButtonProps & { as: 'a'; href?: string })
  | (BaseButtonProps & { as: 'div' });

type ButtonComponent = ComponentType<ButtonProps>;

export function suiteOf(Button: ButtonComponent): void {
  it('renders button by default', () => {
    render(<Button>Button</Button>);

    const button = screen.getByTestId('subject');

    expect(button.nodeName).toBe('BUTTON');

    expect(button).toBeEnabled();

    expect(button).toHaveAttribute('tabIndex', '0');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveTextContent('Button');
  });

  for (const element of ['button', 'a', 'div'] as UiButtonElement[]) {
    describe(element, () => {
      it('allows render an icon', () => {
        render(
          <Button as={element} icon={Icon}>
            Button
          </Button>,
        );

        const button = screen.getByTestId('subject');
        const icon = screen.getByTestId('icon');

        expect(button).toContainElement(icon);
      });

      it('has different classes for disabled and frozen states', () => {
        render(
          <>
            <Button as={element} testId="enabled-subject">
              Button
            </Button>
            <Button as={element} isDisabled testId="disabled-subject">
              Button
            </Button>
            <Button as={element} isFrozen testId="frozen-subject">
              Button
            </Button>
          </>,
        );

        const [disabledClasses, frozenClasses] = getDisabledAndFrozenClasses(
          'enabled-subject',
          'disabled-subject',
          'frozen-subject',
        );

        expect(disabledClasses).not.toBe(frozenClasses);
      });

      describe('attributes', () => {
        describe('class', () => {
          it('can be provided', () => {
            const className = randWord();

            render(
              <Button as={element} className={className}>
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveClass(className);
          });
        });

        describe('tabIndex', () => {
          it('equals to `0` by default', () => {
            render(<Button as={element}>Button</Button>);

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('tabIndex', '0');
          });

          it('can be provided', () => {
            const tabIndex = randomInt(1, 5);

            render(
              <Button as={element} tabIndex={tabIndex}>
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('tabIndex', tabIndex.toString());
          });

          it('is removed if button is frozen', () => {
            const tabIndex = randomInt(1, 5);

            render(
              <>
                <Button as={element} isFrozen testId="default-subject">
                  Button
                </Button>
                <Button as={element} isFrozen tabIndex={tabIndex} testId="custom-subject">
                  Button
                </Button>
              </>,
            );

            const defaultButton = screen.getByTestId('default-subject');
            const customButton = screen.getByTestId('custom-subject');

            expect(defaultButton).not.toHaveAttribute('tabIndex');
            expect(customButton).not.toHaveAttribute('tabIndex');
          });

          it('is removed if button is disabled', () => {
            const tabIndex = randomInt(1, 5);

            render(
              <>
                <Button as={element} isDisabled testId="default-subject">
                  Button
                </Button>
                <Button as={element} isDisabled tabIndex={tabIndex} testId="custom-subject">
                  Button
                </Button>
              </>,
            );

            const defaultButton = screen.getByTestId('default-subject');
            const customButton = screen.getByTestId('custom-subject');

            expect(defaultButton).not.toHaveAttribute('tabIndex');
            expect(customButton).not.toHaveAttribute('tabIndex');
          });
        });

        describe('title', () => {
          it('uses string children as title by default', () => {
            const title = randWord();

            render(
              <>
                <Button as={element} testId="string">
                  {title}
                </Button>
                <Button as={element} testId="react-node">
                  <span>{title}</span>
                </Button>
              </>,
            );

            const string = screen.getByTestId('string');
            const reactNode = screen.getByTestId('react-node');

            expect(string).toHaveAttribute('title', title);
            expect(reactNode).not.toHaveAttribute('title');
          });

          it('allows to provide title', () => {
            const label = randWord();
            const title = randWord();

            render(
              <Button as={element} title={title}>
                {label}
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('title', title);

            expect(button).toHaveTextContent(label);
          });
        });
      });
    });
  }

  describe('button', () => {
    it('renders button when `as` is `button`', () => {
      render(<Button as="button">Button</Button>);

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('BUTTON');

      expect(button).toBeEnabled();

      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveTextContent('Button');
    });

    it('allows to disable button', () => {
      render(
        <Button as="button" isDisabled>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
    });

    it('allows to freeze button', () => {
      render(
        <Button as="button" isFrozen>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).not.toBeEnabled();
    });
  });

  describe('a', () => {
    it('renders link when `as` is `a`', () => {
      render(
        <Button as="a" href="#">
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('A');

      expect(button).toHaveAttribute('href', '#');

      expect(button).not.toHaveAttribute('aria-disabled');

      expect(button).toHaveTextContent('Button');
    });

    it('allows to disable button', () => {
      render(
        <Button as="a" href="#" isDisabled>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');

      expect(button).not.toHaveAttribute('href');
    });

    it('allows to freeze button', () => {
      render(
        <Button as="a" href="#" isFrozen>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');

      expect(button).not.toHaveAttribute('href');
    });
  });

  describe('div', () => {
    it('renders div when `as` is `div`', () => {
      render(<Button as="div">Button</Button>);

      const button = screen.getByTestId('subject');

      expect(button.nodeName).toBe('DIV');

      expect(button).toHaveAttribute('role', 'button');

      expect(button).not.toHaveAttribute('aria-disabled');

      expect(button).toHaveTextContent('Button');
    });

    it('allows to disable button', () => {
      render(
        <Button as="div" isDisabled>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('allows to freeze button', () => {
      render(
        <Button as="div" isFrozen>
          Button
        </Button>,
      );

      const button = screen.getByTestId('subject');

      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });
}
