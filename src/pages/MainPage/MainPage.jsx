import {Main} from "../../components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {tasks} from "../../data.js";
import {Wrapper} from "../../global.styled.js";
import {PopNewCard} from "../../components/Popups/PopNewCard/PopNewCard.jsx";
import {Header} from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";


export const MainPage = ({globalTheme, setGlobalTheme}) => {
    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)

    const addCard = (event) => {
        event.preventDefault()
        const newCard = {
            id: cards[cards.length - 1].id + 1,
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
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return(
        <Wrapper>
            <Outlet/>
            <PopNewCard/>
            <Header set globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
            <Main isLoading={isLoading} cards={cards}/>
        </Wrapper>
    )
}