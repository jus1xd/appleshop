import "../styles/globals.css";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

const store = setupStore();

function MyApp({ Component, pageProps }) {
  return;
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>;
}

export default MyApp;
