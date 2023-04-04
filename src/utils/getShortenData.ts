export function getShortenName(name: string) {
  const dot = name.indexOf('.');
  let newName;

  if (name.includes('.')) {
    newName = name.slice(0, dot);
  } else {
    newName = name;
  }

  return newName;
}

export function getShortenDscrptn(text: string) {
  return text.slice(0, 120);
}
