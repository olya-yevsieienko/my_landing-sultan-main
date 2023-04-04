import goodsFromServer from '../api/data/goodsFromServer.json';

type Brands = {
  [key: string]: number;
};

export function getCountBrands() {
  const brands: Brands = {};

  for (const good of goodsFromServer) {
    const { brand } = good;
    const name = brand.name;

    if (!brands.hasOwnProperty(name)) {
      brands[name] = 1;
    } else {
      ++brands[name];
    }
  }

  return Object.entries(brands);
}

export function getListOfBrands() {
  const listOfBrands: string[] = [];

  for (const good of goodsFromServer) {
    if (!listOfBrands.includes(good.brand.name)) {
      listOfBrands.push(good.brand.name);
    }
  }

  return listOfBrands;
}
