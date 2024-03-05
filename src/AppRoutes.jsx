import {Route, Routes} from "react-router-dom";
import {LubricanteRoutes} from "./routes/LubricanteRoutes.jsx";

export const AppRoutes =()=> {
    return(
        <Routes>
            <Route path={'/*'} element={<LubricanteRoutes/>}/>
        </Routes>
    )
}