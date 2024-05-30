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
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routesPaths.js";
import { signIn } from "../../api/auth.js";
import { useState } from "react";

export const LoginPage = ({setIsAuth}) => {

    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')

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
            setIsAuth(response.user)
            localStorage.setItem('user', JSON.stringify(response.user))
            navigate(paths.MAIN)
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