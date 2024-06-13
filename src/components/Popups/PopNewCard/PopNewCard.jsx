import { useContext, useState } from "react"
import { addNewCard } from "../../../api/cardsApi"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../lib/routesPaths"
import { UserContext } from "../../../context/userContext"
import { CardsContext } from "../../../context/cardsContext"
import { ErrorPopNewCard } from "../../../pages/RegisterPage/registerPage.styled"
import * as S from "./popNewCard.styled"
import { Calendar } from "../../Calendar/Calendar.jsx"
import { TitleDayPicker, SpanDayPicker } from "../../Calendar/calendar.styled.js"
import { DateContext } from "../../../context/dateContext";


export const PopNewCard= () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardsContext)
    const navigate = useNavigate()
    const {dateCalendar, setDateCalendar} = useContext(DateContext);
    const [topic, setTopic] = useState('')
    // const [date, setDate] = useState(new Date())
    const [error, setError] = useState('')
    const [value, setValue] = useState(<TitleDayPicker>Выберите срок исполнения.</TitleDayPicker>);

    const handleDayClick = (dateCalendar) => {
        const formatDate = dateCalendar.toLocaleDateString("RU-ru");
        setValue(<TitleDayPicker>Срок исполнения: <SpanDayPicker>{formatDate}</SpanDayPicker></TitleDayPicker>);
    }

    const [inputValue, setInputValue] = useState({
        title: '',
        status: 'Без статуса',
        description: ''
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }

    const onAddNewCard = async () => {
        setError('');
    
        if (!inputValue.description) {
          return setError('Введите описание задачи');
        }
        if (!inputValue.title) {
          return setError('Введите название задачи');
        }
        if (!topic) {
          return setError('Выберете категорию');
        }
    
        const title = inputValue.title || 'Новая задача'
     
		const newTask = {
			...inputValue, topic, title, date: dateCalendar
		}

        try {
            const response = await addNewCard({ token: user.token, newTask });
            setCards(response.tasks);
            navigate(paths.MAIN);
          } catch (error) {
            setError(error.message || 'Произошла ошибка при создании задачи');
          }
	}

    // Date.prototype.toString = function () {
    //     const formatDate = this.toLocaleDateString('ru-RU')
    //     return <TitleDayPicker>Срок исполнения:<br/><SpanDayPicker>{formatDate}</SpanDayPicker></TitleDayPicker>
    // }

    return (
        <S.PopNewCardDiv id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <S.PopNewCardClose to={paths.MAIN}>&#10006;</S.PopNewCardClose>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm className="form-new" id="formNewCard" action="#">
                                <S.FormNewBlock>
                                    <S.SubttlLabel htmlFor="formTitle">Название задачи</S.SubttlLabel>
                                    <S.FormNewInput onChange={onChangeInput} className="form-new__input" type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <S.SubttlLabel htmlFor="textArea">Описание задачи</S.SubttlLabel>
                                    <S.FormNewArea onChange={onChangeInput} name="description" id="textArea"  placeholder="Введите описание задачи..."></S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <S.PopNewCardCalendar>
                                <Calendar dateCalendar={dateCalendar} setDateCalendar={setDateCalendar} handleDayClick={handleDayClick} value={value}/>
                            </S.PopNewCardCalendar>
                        </S.PopNewCardWrap>
                        <S.PopNewCardCategoriesCategories>
                            <S.CategoriesP>Категория</S.CategoriesP>
                            <S.CategoriesThemes>
                                <S.WrapperRadio $isActive={topic === 'Web Design'}>
                                    <S.CategoriesThemeOrange htmlFor="radio1">Web Design</S.CategoriesThemeOrange>
                                    <S.RadioInput onChange={(e) => setTopic(e.target.value)} id="radio1" type="radio" name="keks" value={'Web Design'}/> 
                                </S.WrapperRadio>
                                <S.WrapperRadio $isActive={topic === 'Research'}>
                                    <S.CategoriesThemeGreen htmlFor="radio2">Research</S.CategoriesThemeGreen>
                                    <S.RadioInput onChange={(e) => setTopic(e.target.value)}  id="radio2" type="radio" name="keks" value={'Research'}/>
                                </S.WrapperRadio>
                                <S.WrapperRadio $isActive={topic === 'Copywriting'}>
                                    <S.CategoriesThemePurple htmlFor="radio3">Copywriting</S.CategoriesThemePurple>
                                    <S.RadioInput onChange={(e) => setTopic(e.target.value)}  id="radio3" type="radio" name="keks" value={'Copywriting'}/>
                                </S.WrapperRadio>
                            </S.CategoriesThemes>
                        </S.PopNewCardCategoriesCategories>
                        <ErrorPopNewCard>{error && error}</ErrorPopNewCard>
                        <S.FormNewCreate onClick={onAddNewCard} id="btnCreate">Создать задачу</S.FormNewCreate>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardDiv>
    )
}