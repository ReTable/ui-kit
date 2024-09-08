import {
  ChangeEventHandler,
  ForwardedRef,
  MouseEvent,
  MouseEventHandler,
  MutableRefObject,
} from 'react';

export type ChangeValueHandler = ChangeEventHandler<HTMLInputElement>;
export type ClearValueHandler = (
  event?: MouseEvent<HTMLButtonElement>,
  focusToField?: boolean,
) => void;

export type InputElement = HTMLInputElement | null;
export type InputRef = MutableRefObject<InputElement>;

export type RequiredProps = {
  onChange: ChangeValueHandler;
  onClear: ClearValueHandler;
  value: string;
};

export type Props = RequiredProps & {
  autoFocus?: boolean;
  className?: string;
  // FIXME: Should we replace it with `React.forwardedRef`? Or we have
  //        reasons to use ref on `SearchInput` itself?
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  inputClassName?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  showClearControl?: boolean;
};
