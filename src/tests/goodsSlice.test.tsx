import goodsSlice, {
  initialState,
  sortByPriceASC,
  sortByPriceDESC,
} from '../store/reducers/goodsSlice';

describe('Testing Goods Slice', () => {
  test('Sort goods by price ASC', () => {
    const prevState = initialState;
    expect(goodsSlice(prevState, sortByPriceASC())).toEqual({
      goods: initialState.goods,
      updatedGoods: [...initialState.goods].sort((a, b) => a.price - b.price),
      filterCategory: initialState.filterCategory,
      filterParams: initialState.filterParams,
    });
  });
  test('Sort goods by price DESC', () => {
    const prevState = initialState;
    expect(goodsSlice(prevState, sortByPriceDESC())).toEqual({
      goods: initialState.goods,
      updatedGoods: [...initialState.goods].sort((a, b) => b.price - a.price),
      filterCategory: initialState.filterCategory,
      filterParams: initialState.filterParams,
    });
  });
});
