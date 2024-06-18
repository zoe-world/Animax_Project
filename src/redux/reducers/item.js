// redux/slide.js
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  itemInfo: {
    ele: "",
    eleW: "",
    isSelected: false,
    itemInfo: {},
    left: 0,
    tit: "",
    top: 0,
  },
};
export const itemSlice = createSlice({
  name: "item",
  // 초기값
  initialState: { value: initialStateValue },
  reducers: {
    itemOver: (state, action) => {
      state.value = { ...state.value, itemInfo: action.payload };
    },
    itemOut: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { itemOver, itemOut } = itemSlice.actions;

export default itemSlice.reducer;
