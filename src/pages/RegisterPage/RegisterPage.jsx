import {
    ContainerSign,
    Modal,
    ModalBlock, ModalBtn, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTtl
} from "./registerPage.styled.js";
import {Wrapper} from "../../global.styled.js";
import { Link } from "react-router-dom";
import { paths } from "../../routesPaths.js";

export const RegisterPage = () => {
    return (
        <Wrapper>
            <ContainerSign>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            <h2>Регистрация</h2>
                        </ModalTtl>
                        <ModalFormLogin id="formLogUp" action="#">
                            <ModalInput className="first-name" type="text" name="first-name" id="first-name"
                                        placeholder="Имя"/>
                            <ModalInput className="login" type="text" name="login" id="loginReg"
                                        placeholder="Эл. почта"/>
                            <ModalInput className="password-first" type="password" name="password"
                                        id="passwordFirst" placeholder="Пароль"/>
                            <ModalBtn id="SignUpEnter"><Link>Зарегистрироваться</Link></ModalBtn>
                            <ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to={paths.LOGIN}>Войдите здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}