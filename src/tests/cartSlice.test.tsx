import cartSlice, {
  addGood,
  clearCart,
  removeGood,
  initialState,
} from '../store/reducers/cartSlice';

const data = {
  id: 1,
  name: 'AOS',
  nameRu: 'Ср-во для мытья посуды Апельсин+мята',
  url: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6241142107.jpg',
  sizeType: 'volume',
  size: '450 мл',
  type: ['Уход за руками'],
  barcode: '4604049097548',
  manufacturer: {
    name: 'Grifon',
    number: '460404',
  },
  brand: {
    name: 'AOS',
    number: '4604049097548',
  },
  itemNumber: '4604049097548',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
  price: 48.76,
  amount: 1,
};

describe('Testing Cart Slice', () => {
  test('Add a good from the catalog', () => {
    const prevState = initialState;
    expect(cartSlice(prevState, addGood(data))).toEqual({
      goods: [...initialState.goods, data],
      goodAmount: 1,
      totalAmount: initialState.totalAmount + data.price,
      totalCount: initialState.totalCount + 1,
    });
  });
  test('Remove a good from the catalog', () => {
    const prevState = initialState;
    expect(cartSlice(prevState, removeGood(data))).toEqual({
      goods: [...initialState.goods.filter((item) => item.id !== data.id)],
      goodAmount: 1,
      totalAmount: initialState.totalAmount,
      totalCount: initialState.totalCount,
    });
  });
  test('Clear cart', () => {
    const prevState = initialState;
    expect(cartSlice(prevState, clearCart())).toEqual({
      goods: [],
      goodAmount: 1,
      totalAmount: initialState.totalAmount,
      totalCount: initialState.totalCount,
    });
  });
});
