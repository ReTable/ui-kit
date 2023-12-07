import { FC, forwardRef, useCallback, useState } from 'react';

import { useSize } from '~';

export default {
  title: 'use-size',
};

export const InitialSize: FC = () => {
  const [, size] = useSize();

  return (
    <>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </>
  );
};

export const WithDefaultSize: FC = () => {
  const defaultSize = { height: 100, width: 200 };

  const [, size] = useSize(defaultSize);

  return (
    <>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </>
  );
};

export const Resize: FC = () => {
  const [ref, size] = useSize();

  return (
    <>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
      <textarea style={{ resize: 'both' }} ref={ref} />
    </>
  );
};

const WrappedTextarea = forwardRef<HTMLTextAreaElement>((_, forwardedRef) => {
  const [innerRef, size] = useSize();

  const ref = useCallback(
    (element: HTMLTextAreaElement) => {
      if (forwardedRef != null) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(element);
        } else {
          forwardedRef.current = element;
        }
      }

      innerRef(element);
    },
    [forwardedRef, innerRef],
  );

  return (
    <>
      <p>Inner width: {size.width}px</p>
      <p>Inner Height: {size.height}px</p>
      <textarea style={{ resize: 'both' }} ref={ref} />
    </>
  );
});

WrappedTextarea.displayName = 'WrappedTextarea';

export const MultipleRefs: FC = () => {
  const [ref, size] = useSize();

  return (
    <>
      <p>Outer width: {size.width}px</p>
      <p>Outer Height: {size.height}px</p>
      <WrappedTextarea ref={ref} />
    </>
  );
};

export const Update: FC = () => {
  const [key, setKey] = useState(0);

  const [ref, size] = useSize();

  const handleUpdate = useCallback(() => {
    setKey((current) => current + 1);
  }, []);

  return (
    <>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
      <p>
        <button onClick={handleUpdate} type="button">
          Update
        </button>
      </p>
      <textarea key={key} style={{ resize: 'both' }} ref={ref} />
    </>
  );
};
