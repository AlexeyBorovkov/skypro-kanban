import { useState } from "react"
import { Container } from "../../global.styled.js";
import * as S from './header.styled.js'
import { Link } from "react-router-dom";
import { paths } from "../../routesPaths.js";

// 1:13:14 


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
								<div className="header__pop-user-set pop-user-set" id="user-set-target">
									<p className="pop-user-set__name">Ivan Ivanov</p>
									<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
									<div className="pop-user-set__theme">
										<p>Темная тема</p>
										<input type="checkbox" className="checkbox" name="checkbox" onChange={()=> setGlobalTheme(!globalTheme)}/>
									</div>
									<button type="button" className="_hover03"><Link to={paths.EXIT}>Выйти</Link></button>
								</div>
							)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</Container>			
		</S.Header>
    )
}