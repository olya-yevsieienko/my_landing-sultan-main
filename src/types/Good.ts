export interface Good {
  id: number;
  name: string;
  nameRu: string;
  url: string;
  sizeType: string;
  size: string;
  type: string[];
  barcode: string;
  manufacturer: {
    name: string;
    number: string;
  };
  brand: {
    name: string;
    number: string;
  };
  itemNumber: string;
  description: string;
  price: number;
  amount: number;
}
