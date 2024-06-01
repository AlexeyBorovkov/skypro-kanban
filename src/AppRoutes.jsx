import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import { paths } from "./routesPaths.js";
import PrivateRoute from "./PriviteRoutes.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";
import { PopBrowsePage } from "./pages/PopUps/PopBrowse/PopBrowsePage.jsx";
import { PopExitPage } from "./pages/PopUps/ExitPage/PopExitPage.jsx";
import { PopNewCardPage } from "./pages/PopUps/PopNewCardPage/PopNewCardPage.jsx";




export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    

    return (
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path={paths.MAIN} element={<MainPage globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}>
                    <Route path={paths.EXIT} element={<PopExitPage/>}/>
                    <Route path={paths.CARD_ID} element={<PopBrowsePage/>}/>
                    <Route path={paths.NEW_CARD} element={<PopNewCardPage/>}/>
                </Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    )
}