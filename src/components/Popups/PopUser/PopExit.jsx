import { useNavigate } from "react-router-dom"
import { PopExit, PopExitBlock, PopExitContainer, PopExitExitNo, PopExitExitYes, PopExitFormGroup, PopExitTtl, PopExitTtlH2 } from "./popUser.styled"
import { paths } from "../../../routesPaths"

export const PopUser= ({setIsAuth}) => {
	const navigate = useNavigate()
	const logOut = () => {
		setIsAuth(false)
		navigate(paths.LOGIN)
	}
    return (
        <PopExit id="popExit"> 
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
						</PopExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<PopExitExitYes onClick={logOut} id="exitYes">Да, выйти</PopExitExitYes>
								<PopExitExitNo to={paths.MAIN} id="exitNo">Нет, остаться</PopExitExitNo>
							</PopExitFormGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
        </PopExit>
    )
}