import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Good } from '../../types/Good';

interface CartState {
  goods: Good[];
  goodAmount: number;
  totalAmount: number;
  totalCount: number;
}

const goodsLocal = localStorage.getItem('goods');
const cartGoods = goodsLocal ? JSON.parse(goodsLocal) : [];

const totalAmountLocal = localStorage.getItem('totalAmount');
const totalAmount = totalAmountLocal ? JSON.parse(totalAmountLocal) : 0;

const totalCountLocal = localStorage.getItem('totalCount');
const totalCount = totalCountLocal ? JSON.parse(totalCountLocal) : 0;

export const initialState: CartState = {
  goods: cartGoods,
  goodAmount: 1,
  totalAmount: totalAmount,
  totalCount: totalCount,
};

const cartSlise = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood: (state, action: PayloadAction<Good>) => {
      const good = state.goods.find((item) => item.id === action.payload.id);

      if (good) {
        good.amount++;
      } else {
        state.goods.push({
          ...action.payload,
          amount: 1,
        });
      }

      let amount = 0;
      if (state.goods.length) {
        state.goods.forEach((good) => (amount += good.price * good.amount));
        state.totalAmount = amount;
        state.totalCount++;
      }

      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
    removeGood: (state, action: PayloadAction<Good>) => {
      state.goods = state.goods.filter((item) => item.id !== action.payload.id);

      let amount = 0;
      state.goods.forEach((good) => (amount += good.price * good.amount));
      state.totalAmount = amount;

      let count = 0;
      state.goods.forEach((good) => (count += good.amount));
      state.totalCount = count;

      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
    incrementQuantity: (state, action: PayloadAction<Good>) => {
      const good = state.goods.find((item) => item.id === action.payload.id);
      if (good) {
        good.amount++;
        state.totalAmount += good.price;
        state.totalCount++;
      }

      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
    decrementQuantity: (state, action: PayloadAction<Good>) => {
      const good = state.goods.find((item) => item.id === action.payload.id);

      if (good && good.amount === 1) {
        good.amount = 1;
      } else if (good && good.amount > 1) {
        good.amount--;
        state.totalAmount -= good.price;
        state.totalCount--;
      }

      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
    addGoodFromCardPage: (state, action: PayloadAction<Good>) => {
      const good = state.goods.find((item) => item.id === action.payload.id);

      if (good) {
        good.amount = good.amount + state.goodAmount;
      } else {
        state.goods.push({
          ...action.payload,
          amount: state.goodAmount,
        });
      }

      let amount = 0;
      if (state.goods.length) {
        state.goods.forEach((good) => (amount += good.price * good.amount));
        state.totalAmount = amount;
        state.totalCount = state.totalCount + state.goodAmount;
      }

      state.goodAmount = initialState.goodAmount;
      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
    incrementQuantityCardPage: (state) => {
      state.goodAmount++;
    },
    decrementQuantityCardPage: (state) => {
      if (state.goodAmount === 1) {
        state.goodAmount = 1;
      } else {
        state.goodAmount--;
      }
    },
    clearCart: (state) => {
      state.goods = initialState.goods;
      state.goodAmount = initialState.goodAmount;
      state.totalAmount = initialState.totalAmount;
      state.totalCount = initialState.totalCount;

      localStorage.setItem(
        'goods',
        JSON.stringify(state.goods.map((item) => item))
      );
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalCount', JSON.stringify(state.totalCount));
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  addGood,
  removeGood,
  addGoodFromCardPage,
  incrementQuantityCardPage,
  decrementQuantityCardPage,
  clearCart,
} = cartSlise.actions;
export default cartSlise.reducer;
