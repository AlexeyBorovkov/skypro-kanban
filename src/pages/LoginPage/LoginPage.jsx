import {Wrapper} from "../../global.styled.js";
import { ModalFormLoginR} from "./loginPage.styled.js";
import {
    ContainerSign,
    ErrorMsgRed,
    Modal,
    ModalBlock,
    ModalBtn, ModalFormGroup,
    ModalInput,
    ModalTtl
} from "../RegisterPage/registerPage.styled.js";
import { Link } from "react-router-dom";
import { paths } from "../../lib/routesPaths.js";
import { signIn } from "../../api/auth.js";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";

export const LoginPage = () => {

    const [errorMsg, setErrorMsg] = useState('')
    const {loginUser} = useContext(UserContext)

    const [inputValue, setInputValue] = useState({
        login: '',
        password: '',
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }
    
    const LoginHandler = (e) => {
      
        e.preventDefault()
        const {login,password} = inputValue;
        if(!login || !password) {
            return setErrorMsg('Заполните все поля')
        }

        signIn(inputValue).then((response) => {
            setErrorMsg('')
            loginUser(response)
        }).catch((error) => {
            setErrorMsg(error.message)
        })

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
                            <ModalInput onChange={onChangeInput} type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                            <ModalInput onChange={onChangeInput} type="password" name="password" id="formpassword" placeholder="Пароль"/>
                            <ErrorMsgRed>{errorMsg}</ErrorMsgRed>
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