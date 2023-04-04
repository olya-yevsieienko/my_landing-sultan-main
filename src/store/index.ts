import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import filterSlice from './filterSlice';
import goodsSlice from './goodsSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  goods: goodsSlice,
  filter: filterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
