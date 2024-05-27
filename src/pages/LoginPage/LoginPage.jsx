import {Wrapper} from "../../global.styled.js";
import { ModalFormLoginR} from "./loginPage.styled.js";
import {
    ContainerSign,
    Modal,
    ModalBlock,
    ModalBtn, ModalFormGroup,
    ModalInput,
    ModalTtl
} from "../RegisterPage/registerPage.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routesPaths.js";

export const LoginPage = ({setIsAuth}) => {

    const navigate = useNavigate()

    const LoginHandler = () => {
        setIsAuth(true)
        navigate(paths.MAIN)
    }
    return (
        <Wrapper>
            <ContainerSign>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Вход</h2>
                        </ModalTtl>
                        <ModalFormLoginR id="formLogIn" action="#">
                            <ModalInput type="text" name="login" id="formlogin"
                                   placeholder="Эл. почта"/>
                            <ModalInput type="password" name="password" id="formpassword"
                                   placeholder="Пароль"/>
                            <ModalBtn onClick={LoginHandler} id="btnEnter">Войти</ModalBtn>
                            <ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLoginR>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}