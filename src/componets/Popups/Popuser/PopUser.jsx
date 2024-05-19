import { PopExit, PopExitBlock, PopExitContainer, PopExitExitNo, PopExitExitYes, PopExitFormGroup, PopExitTtl, PopExitTtlH2 } from "./popUser.styled"

export const PopUser= () => {
    return (
        <PopExit id="popExit"> 
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>
							<PopExitTtlH2>Выйти из аккаунта?</PopExitTtlH2>
						</PopExitTtl>
						<form className="pop-exit__form" id="formExit" action="#">
							<PopExitFormGroup>
								<PopExitExitYes id="exitYes"><a href="modal/signin.html">Да, выйти</a> </PopExitExitYes>
								<PopExitExitNo id="exitNo"><a href="main.html">Нет, остаться</a> </PopExitExitNo>
							</PopExitFormGroup>
						</form>
					</PopExitBlock>
				</PopExitContainer>
        </PopExit>
    )
}