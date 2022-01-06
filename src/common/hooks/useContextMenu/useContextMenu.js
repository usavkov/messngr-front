import { useCallback, useMemo, useState } from 'react';

export const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(null);

  const onContextMenu = (event) => {
    event.preventDefault();

    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX - 2,
          mouseY: event.clientY - 4,
        }
        : null,
    );
  };

  const closeMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const anchorPosition = useMemo(() => (
    contextMenu !== null
      ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
      : undefined
  ), [contextMenu]);

  return {
    anchorPosition,
    closeMenu,
    onContextMenu,
    isOpen: contextMenu !== null,
  };
};
