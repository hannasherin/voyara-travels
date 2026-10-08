import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../slice/destinationSlice";

export const store = configureStore({
  reducer: {
    destinationInfo: destinationSlice,
  },
});

export default store;


