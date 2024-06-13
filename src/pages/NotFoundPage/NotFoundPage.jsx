import { Link } from "react-router-dom"
import { Wrapper } from "../../global.styled"
import { paths } from "../../lib/routesPaths"

export const NotFoundPage = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <h2>Not found, sorry...</h2>
            <button><Link to={paths.MAIN}>Перейти на главную страницу</Link></button>
        </Wrapper>
    )
}