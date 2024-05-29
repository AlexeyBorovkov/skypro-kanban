import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.jsx";
import { paths } from "./routesPaths.js";
import PrivateRoute from "./PriviteRoutes.jsx";
import { useState } from "react";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";
import { PopBrowsePage } from "./pages/PopUps/PopBrowse/PopBrowsePage.jsx";
import { PopExitPage } from "./pages/PopUps/ExitPage/PopExitPage.jsx";

function getLocalStorage() {
    let user = ''
    try {
        user = JSON.parse(localStorage.getItem('user'))
        return user
    }
    catch(error) {
        return ''
    }
}

export const AppRoutes = ({globalTheme, setGlobalTheme}) => {
    const [isAuth, setIsAuth] = useState(getLocalStorage)

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path={paths.MAIN} element={<MainPage isAuth={isAuth} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>}>
                    <Route path={paths.EXIT} element={<PopExitPage setIsAuth={setIsAuth}/>}/>
                    <Route path={paths.CARD_ID} element={<PopBrowsePage/>}/>
                </Route>
            </Route>
            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={paths.REGISTER} element={<RegisterPage/>}/>
            <Route path={paths.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
    )
}