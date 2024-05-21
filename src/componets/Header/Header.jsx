import { useState } from "react"
import { Container } from "../../global.styled.js";
import * as S from './header.styled.js'


export const Header = ({addCard, globalTheme, setGlobalTheme}) => {
	const [isOpenedModalUserWindow, setIsOpenedModalUserWindow] = useState(false);

	function handlerOpenModalWindow(event) {
		event.preventDefault()
		setIsOpenedModalUserWindow(perv => !perv)
	}

    return (
        <S.Header>
			<Container>
				<S.HeaderBlock>
					<S.HeaderLogoLight>
						<a href="" target="_self"><img src="/img/logo.png" alt="logo"/></a>
					</S.HeaderLogoLight>
					<S.HeaderLogoDark>
						<a href="" target="_self"><img src="/img/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogoDark>
					<S.HeaderNav>
						<S.HeaderBtnMainNew id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></S.HeaderBtnMainNew>
						<S.HeaderUser href="#user-set-target" onClick={(event) => handlerOpenModalWindow(event)}>Ivan Ivanov</S.HeaderUser>
							{isOpenedModalUserWindow && (
								<S.HeaderPopUserSet id="user-set-target">
									<p>Ivan Ivanov</p>
									<S.UserMail>ivan.ivanov@gmail.com</S.UserMail>
									<div className="pop-user-set__theme">
										<p>Темная тема</p>
										<input type="checkbox" className="checkbox" name="checkbox" onChange={()=> setGlobalTheme(!globalTheme)}/>
									</div>
									<S.UserButton className="_hover03"><a href="#popExit">Выйти</a></S.UserButton>
								</S.HeaderPopUserSet>
							)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>
    )
}