import { useRef, useState } from "react";

export const useDragAndDrop = (playlist) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragabbleList, setDragabbleList] = useState(playlist);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...dragabbleList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setDragabbleList(copyListItems);
  };

  return { dragStart, dragEnter, drop, dragabbleList, setDragabbleList };
};
