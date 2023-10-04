import { useCallback, useEffect, useState } from 'react';

type Result = [boolean, boolean, () => void];

export function useStringCollapse(children: string, limit?: number): Result {
  const initialState = limit != null && children.length > limit;

  const [isCollapsed, setIsCollapsed] = useState(initialState);

  useEffect(() => {
    setIsCollapsed(initialState);
  }, [initialState]);

  const onToggle = useCallback(() => {
    setIsCollapsed((value) => !value);
  }, []);

  return [limit != null && children.length > limit, isCollapsed, onToggle];
}
