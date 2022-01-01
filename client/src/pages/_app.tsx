import "../styles/globals.css";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";
import type { AppProps } from 'next/app'
const store = setupStore ();

function MyApp ( {Component, pageProps}: AppProps ) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;