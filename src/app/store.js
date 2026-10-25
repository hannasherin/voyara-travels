import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../slice/destinationSlice";
import packageSlice from "../slice/packageSlice";
import bookingSlice from  "../slice/bookingSlice"

export const store = configureStore({
  reducer: {
    destinationInfo: destinationSlice,
    packageInfo: packageSlice,
    bookingInfo:bookingSlice
  },
});

export default store;


