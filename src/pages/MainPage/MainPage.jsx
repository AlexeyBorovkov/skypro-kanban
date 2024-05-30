import {Main} from "../../components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {Wrapper} from "../../global.styled.js";
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard.jsx";
import {Header} from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { getCards } from "../../api/cardsApi.js";


export const MainPage = ({globalTheme, setGlobalTheme, isAuth}) => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const addCard = (event) => {
        event.preventDefault()
        const newCard = {
            _id: cards[cards.length - 1].id + 1,
            date: '05/05/2024',
            topic: 'Web Design',
            title: 'Название задачи',
            status: 'Без статуса',
        }
        setCards(
            [...cards, newCard ]
        )
    }

    useEffect(() => {
        setIsLoading(true)
        getCards(isAuth.token).then((response) => {
            setErrorMsg('')
            setCards(response.tasks)
            setIsLoading(false)
        }).catch((error) => {
            setErrorMsg(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    },[isAuth.token])

    return(
        <Wrapper>
           
            {/* pop-up start */}
            <Outlet/>
            <PopNewCard/>
            {/* pop-up end */}
            <Header isAuth={isAuth} globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
            <Main errorMsg={errorMsg} isLoading={isLoading} cards={cards}/>
        </Wrapper>
    )
}