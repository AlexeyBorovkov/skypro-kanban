import { useState } from "react"
import { Container } from "../../global.styled.js";
import * as S from './header.styled.js'
import { Link } from "react-router-dom";
import { paths } from "../../routesPaths.js";


export const Header = ({ globalTheme, setGlobalTheme, user}) => {
	const [isOpenedModalUserWindow, setIsOpenedModalUserWindow] = useState(false);

	const OpenModal= (event) => {
		event.preventDefault()
		setIsOpenedModalUserWindow(prev => !prev)
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
						<S.HeaderBtnMainNew id="btnMainNew"><Link to={paths.NEW_CARD}>Создать новую задачу</Link></S.HeaderBtnMainNew>
						<S.HeaderUser href="#user-set-target" onClick={(event) => OpenModal(event)}>{user.name}</S.HeaderUser>
							{isOpenedModalUserWindow && (
								<div className="header__pop-user-set pop-user-set" id="user-set-target">
									<p className="pop-user-set__name">{user.name}</p>
									<p className="pop-user-set__mail">{user.login}</p>
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