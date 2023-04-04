import goodsFromServer from '../api/data/goodsFromServer.json';

type Manufacturers = {
  [key: string]: number;
};

export function getCountManufacturer() {
  const manufacturers: Manufacturers = {};

  for (const good of goodsFromServer) {
    const { manufacturer } = good;
    const name = manufacturer.name;

    if (!manufacturers.hasOwnProperty(name)) {
      manufacturers[name] = 1;
    } else {
      ++manufacturers[name];
    }
  }

  return Object.entries(manufacturers);
}

export function getListOfMakers() {
  const listOfMakers: string[] = [];

  for (const good of goodsFromServer) {
    if (!listOfMakers.includes(good.manufacturer.name)) {
      listOfMakers.push(good.manufacturer.name);
    }
  }

  return listOfMakers;
}
