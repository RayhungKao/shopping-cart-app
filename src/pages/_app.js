import "@/styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </Provider>
  );
}
