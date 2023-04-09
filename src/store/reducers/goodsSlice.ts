import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Good } from '../../types/Good';
import goodsFromServer from '../../api/data/goodsFromServer.json';

interface GoodsState {
  goods: Good[];
  updatedGoods: Good[];
  filterCategory: string;
  filterParams: {};
}

const initialState: GoodsState = {
  goods: goodsFromServer,
  updatedGoods: goodsFromServer,
  filterCategory: '',
  filterParams: {},
};

const goodsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;

      if (state.filterCategory === '') {
        state.updatedGoods = [...state.goods];
      } else {
        state.updatedGoods = [...state.goods].filter((good) =>
          good.type.includes(action.payload)
        );
      }
    },
    filterByParams: (state, action) => {
      state.filterParams = action.payload;
      const { priceFrom, priceTo, makers, brands } = action.payload;

      const filteredGoods = [...state.goods].filter(
        (good) =>
          good.price >= priceFrom &&
          good.price <= priceTo &&
          (makers.includes(good.manufacturer.name) ||
            brands.includes(good.brand.name))
      );

      state.updatedGoods = filteredGoods;
    },
    sortByName: (state, action: PayloadAction<string>) => {
      state.updatedGoods = [...state.updatedGoods].sort(
        (a, b) => a.name.localeCompare(b.name) * +action.payload
      );
    },
    sortByPriceASC: (state) => {
      state.updatedGoods = [...state.updatedGoods].sort(
        (a, b) => a.price - b.price
      );
    },
    sortByPriceDESC: (state) => {
      state.updatedGoods = [...state.updatedGoods].sort(
        (a, b) => b.price - a.price
      );
    },
  },
});

export const {
  filterByCategory,
  filterByParams,
  sortByName,
  sortByPriceASC,
  sortByPriceDESC,
} = goodsSlice.actions;
export default goodsSlice.reducer;
