export const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? '#7E7E7E' : 'white',
});

export const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? '#616161' : '#9E9E9E',

  // styles we need to apply on draggables
  ...draggableStyle,
});
