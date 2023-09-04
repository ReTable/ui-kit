import { ComponentType, FC } from 'react';

import { randNumber, randUrl, randWord } from '@ngneat/falso';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  UiButton20Props,
  UiButton24Props,
  UiButton32Props,
  UiButton40Props,
  UiButton48Props,
  UiButtonElement,
} from '~';

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
  UiButton20Props | UiButton24Props | UiButton32Props | UiButton40Props | UiButton48Props,
  | 'as'
  | 'children'
  | 'className'
  | 'icon'
  | 'isDisabled'
  | 'isFrozen'
  | 'role'
  | 'tabIndex'
  | 'title'
> & {
  testId?: string;
};

export type ButtonProps =
  | (BaseButtonProps & { as?: 'button'; type?: 'button' | 'submit' | 'reset' })
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
      it('renders provided element', () => {
        render(<Button as={element}>Button</Button>);

        const button = screen.getByTestId('subject');

        expect(button.nodeName).toBe(element.toUpperCase());
      });

      it('renders provided label', () => {
        const label = randWord();

        render(<Button as={element}>{label}</Button>);

        const button = screen.getByTestId('subject');

        expect(button).toHaveTextContent(label);
      });

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

      describe('attributes', () => {
        describe('aria-disabled', () => {
          it('not exists by default', () => {
            render(<Button as={element}>Button</Button>);

            const button = screen.getByTestId('subject');

            expect(button).not.toHaveAttribute('aria-disabled');
          });

          it('equals to `true` if button is frozen', () => {
            render(
              <Button as={element} isFrozen>
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('aria-disabled', 'true');
          });

          it('equals to `true` if button is disabled', () => {
            render(
              <Button as={element} isDisabled>
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('aria-disabled', 'true');
          });
        });

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
        });

        describe('role', () => {
          it('equals to `button` by default', () => {
            render(<Button as={element}>Button</Button>);

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('role', 'button');
          });

          it('can be provided', () => {
            render(
              <Button as={element} role="link">
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('role', 'link');
          });
        });

        describe('tabIndex', () => {
          it('equals to `0` by default', () => {
            render(<Button as={element}>Button</Button>);

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('tabIndex', '0');
          });

          it('can be provided', () => {
            const tabIndex = randNumber({ min: 1, max: 5 });

            render(
              <Button as={element} tabIndex={tabIndex}>
                Button
              </Button>,
            );

            const button = screen.getByTestId('subject');

            expect(button).toHaveAttribute('tabIndex', tabIndex.toString());
          });

          it('is removed if button is frozen', () => {
            const tabIndex = randNumber({ min: 1, max: 5 });

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
            const tabIndex = randNumber({ min: 1, max: 5 });

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
    describe('attributes', () => {
      describe('disabled', () => {
        it('not existed by default', () => {
          render(<Button as="button">Button</Button>);

          const button = screen.getByTestId('subject');

          expect(button).toBeEnabled();
        });

        it('equals to `true` when button is frozen', () => {
          render(
            <Button as="button" isFrozen>
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).not.toBeEnabled();
        });

        it('equals to `true` when button is disabled', () => {
          render(
            <Button as="button" isDisabled>
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).not.toBeEnabled();
        });
      });

      describe('type', () => {
        it('equals to `button` by default', () => {
          render(<Button as="button">Button</Button>);

          const button = screen.getByTestId('subject');

          expect(button).toHaveAttribute('type', 'button');
        });

        it('can be provided', () => {
          render(
            <Button as="button" type="reset">
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).toHaveAttribute('type', 'reset');
        });
      });
    });
  });

  describe('a', () => {
    describe('attributes', () => {
      describe('href', () => {
        it('can be provided', () => {
          const url = randUrl();

          render(
            <Button as="a" href={url}>
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).toHaveAttribute('href', url);
        });

        it('is removed when button is frozen', () => {
          const url = randUrl();

          render(
            <Button as="a" href={url} isFrozen>
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).not.toHaveAttribute('href');
        });

        it('is removed when button is disabled', () => {
          const url = randUrl();

          render(
            <Button as="a" href={url} isDisabled>
              Button
            </Button>,
          );

          const button = screen.getByTestId('subject');

          expect(button).not.toHaveAttribute('href');
        });
      });
    });
  });
}
