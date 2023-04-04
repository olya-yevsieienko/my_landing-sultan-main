export const getEditedTitle = (title: string) => {
  const start = title.split(' ')[0];
  const end = title.slice(start.length);
  return [start, end];
};
