import "../styles/globals.css";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";
import type { AppProps } from 'next/app'
import {persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
const store = setupStore ();
const persistor = persistStore(store)

function MyApp ( {Component, pageProps}: AppProps ) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default MyApp;