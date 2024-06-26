import {AppRoutes} from "./AppRoutes.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

export const LubricanteApp =()=> {
    return (
        <Provider store={store}>
        <AppRoutes/>
        </Provider>
    )
}