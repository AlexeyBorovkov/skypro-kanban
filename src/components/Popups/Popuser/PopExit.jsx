import { PopExit, PopExitBlock, PopExitContainer, PopExitExitNo, PopExitExitYes, PopExitFormGroup, PopExitTtl, PopExitTtlH2 } from "./popUser.styled"
import { paths } from "../../../lib/routesPaths"
import { useContext } from "react"
import { UserContext } from "../../../context/userContext"

export const PopUser= () => {
	const {logOutUser} = useContext(UserContext)

    return (
        <PopExit id="popExit"> 
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
						</PopExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<PopExitExitYes onClick={logOutUser} id="exitYes">Да, выйти</PopExitExitYes>
								<PopExitExitNo to={paths.MAIN} id="exitNo">Нет, остаться</PopExitExitNo>
							</PopExitFormGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
        </PopExit>
    )
}