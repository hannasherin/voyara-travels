import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../slice/destinationSlice";
import packageSlice from "../slice/packageSlice";

export const store = configureStore({
  reducer: {
    destinationInfo: destinationSlice,
    packageInfo: packageSlice
  },
});

export default store;


