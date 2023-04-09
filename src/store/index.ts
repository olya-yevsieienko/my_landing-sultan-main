import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import filterSlice from './reducers/filterSlice';
import goodsSlice from './reducers/goodsSlice';

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
