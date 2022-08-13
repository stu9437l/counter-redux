import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./feature/counterSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: CounterSlice.reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
