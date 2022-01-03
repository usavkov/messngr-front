import { useCallback, useState } from "react"

export const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);

  const toggle = useCallback(() => setState(prev => !prev), []);

  const open = useCallback(() => setState(true), []);

  const close = useCallback(() => setState(false), []);

  return [state, toggle, { open, close }]
}
