import {
    ContainerSign,
    ErrorMsgRed,
    Modal,
    ModalBlock, ModalBtn, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTtl
} from "./registerPage.styled.js";
import {Wrapper} from "../../global.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routesPaths.js";
import { register } from "../../api/auth.js";
import { useState } from "react";

export const RegisterPage = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')

   

    const [inputValue, setInputValue] = useState({
        login: '',
        name: '',
        password: '',
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }
    
    const registerHandler = (e) => {
        e.preventDefault()
        const {login, name, password} = inputValue;
        if(!login || !name || !password) {
           return setErrorMsg('Заполните все поля')
        }
        register(inputValue).then(() => {
            setErrorMsg('')
            navigate(paths.LOGIN)
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
                            <ModalTtl>Регистрация</ModalTtl>
                        </ModalTtl>
                        <ModalFormLogin id="formLogUp" action="#">
                            <ModalInput onChange={onChangeInput} value={inputValue.name} className="first-name" type="text" name="name" id="first-name" placeholder="Имя"/>
                            <ModalInput onChange={onChangeInput} value={inputValue.login} className="login" type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                            <ModalInput onChange={onChangeInput} value={inputValue.password} className="password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                            <ErrorMsgRed>{errorMsg}</ErrorMsgRed>
                            <ModalBtn type="button" id="SignUpEnter"><a onClick={registerHandler}>Зарегистрироваться</a></ModalBtn>
                            <ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to={paths.LOGIN}> Войдите здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSign>
        </Wrapper>
    )
}