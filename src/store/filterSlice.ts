import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterSlice {
  isFilterOpen: boolean;
}

const initialState: FilterSlice = {
  isFilterOpen: false,
};

const filterSlise = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<boolean>) => {
      state.isFilterOpen = action.payload;
    },
  },
});

export const { setFilterStatus } = filterSlise.actions;
export default filterSlise.reducer;
