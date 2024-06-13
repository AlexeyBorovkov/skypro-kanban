import * as S from "./registerPage.styled.js";
import {Wrapper} from "../../global.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/routesPaths.js";
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
        if(!login.trim() || !name.trim() || !password.trim()) {
           return setErrorMsg('Заполните все поля')
        }
        if(password.length < 3) {
            return setErrorMsg('Пароль должен содержать минимум 3 символа')
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
            <S.ContainerSign>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <S.ModalTtl>Регистрация</S.ModalTtl>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalInput onChange={onChangeInput} value={inputValue.name} className="first-name" type="text" name="name" id="first-name" placeholder="Имя"/>
                            <S.ModalInput onChange={onChangeInput} value={inputValue.login} className="login" type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                            <S.ModalInput onChange={onChangeInput} value={inputValue.password} className="password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                            <S.ErrorMsgRed>{errorMsg}</S.ErrorMsgRed>
                            <S.ModalBtn type="button" id="SignUpEnter"><a onClick={registerHandler}>Зарегистрироваться</a></S.ModalBtn>
                            <S.ModalFormGroup>
                                <p>Уже есть аккаунт?</p>
                                <Link to={paths.LOGIN}> Войдите здесь</Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSign>
        </Wrapper>
    )
}