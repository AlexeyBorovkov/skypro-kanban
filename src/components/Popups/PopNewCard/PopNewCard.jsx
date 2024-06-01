import { useContext, useState } from "react"
import { addNewCard } from "../../../api/cardsApi"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../routesPaths"
import { UserContext } from "../../../context/userContext"
import { CardsContext } from "../../../context/cardsContext"
import { ErrorPopNewCard } from "../../../pages/RegisterPage/registerPage.styled"
import { CalendarTtl, CategoriesP, CategoriesThemeGreen, CategoriesThemeOrange, CategoriesThemePurple, CategoriesThemes, DP, FormNewArea, FormNewBlock, FormNewCreate, FormNewInput, PopNewCardBlock, PopNewCardCalendar, PopNewCardCategoriesCategories, PopNewCardClose, PopNewCardContainer, PopNewCardContent, PopNewCardDiv, PopNewCardForm, PopNewCardTtl, PopNewCardWrap, RadioInput, SubttlLabel, WrapperRadio } from "./popNewCard.styled"

export const PopNewCard= () => {
    const {user} = useContext(UserContext)
    const {setCards} = useContext(CardsContext)
    const navigate = useNavigate()

    const [topic, setTopic] = useState('')
    const [date, setDate] = useState(new Date())
    const [error, setError] = useState('')
    const [inputValue, setInputValue] = useState({
        title: '',
        status: 'Без статуса',
        description: ''
    })

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }

	const onAddNewCard = () => {
        setError('')

        if(!inputValue.description) {
            return setError('Введите описание задачи')
        }

        const title = inputValue.title || 'Новая задача'
     
		const newTask = {
			...inputValue, topic, title, date
		}

		addNewCard({token: user.token, newTask: newTask})
		.then((response) => {
			setCards(response.tasks)
            navigate(paths.MAIN)
		}).catch((error) => {
            setError(error.message)
		})
	}

    const getDateFormat = (date) => {
        const formatDate = date.toLocaleDateString('ru-RU')
        return <p style={{ marginTop: '10px'}}>Срок исполнения:<br/>{formatDate}</p>
    }

    return (
        <PopNewCardDiv id="popNewCard">
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTtl>Создание задачи</PopNewCardTtl>
                        <PopNewCardClose to={paths.MAIN}>&#10006;</PopNewCardClose>
                        <PopNewCardWrap>
                            <PopNewCardForm className="form-new" id="formNewCard" action="#">
                                <FormNewBlock>
                                    <SubttlLabel htmlFor="formTitle">Название задачи</SubttlLabel>
                                    <FormNewInput onChange={onChangeInput} className="form-new__input" type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                                </FormNewBlock>
                                <FormNewBlock>
                                    <SubttlLabel htmlFor="textArea">Описание задачи</SubttlLabel>
                                    <FormNewArea onChange={onChangeInput} name="description" id="textArea"  placeholder="Введите описание задачи..."></FormNewArea>
                                </FormNewBlock>
                            </PopNewCardForm>
                            <PopNewCardCalendar>
                                <CalendarTtl>Даты</CalendarTtl>
                                <DP mode="single" selected={date} onSelect={setDate} footer={getDateFormat(date)}/>
                            </PopNewCardCalendar>
                        </PopNewCardWrap>
                        <PopNewCardCategoriesCategories>
                            <CategoriesP>Категория</CategoriesP>
                            <CategoriesThemes>
                                <WrapperRadio $isActive={topic === 'Web Design'}>
                                    <CategoriesThemeOrange htmlFor="radio1">Web Design</CategoriesThemeOrange>
                                    <RadioInput onChange={(e) => setTopic(e.target.value)} id="radio1" type="radio" name="keks" value={'Web Design'}/> 
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Research'}>
                                    <CategoriesThemeGreen htmlFor="radio2">Research</CategoriesThemeGreen>
                                    <RadioInput onChange={(e) => setTopic(e.target.value)} className="_green" id="radio2" type="radio" name="keks" value={'Research'}/>
                                </WrapperRadio>
                                <WrapperRadio $isActive={topic === 'Copywriting'}>
                                    <CategoriesThemePurple htmlFor="radio3">Copywriting</CategoriesThemePurple>
                                    <RadioInput onChange={(e) => setTopic(e.target.value)} className="_purple" id="radio3" type="radio" name="keks" value={'Copywriting'}/>
                                </WrapperRadio>
                            </CategoriesThemes>
                        </PopNewCardCategoriesCategories>
                        <ErrorPopNewCard>{error && error}</ErrorPopNewCard>
                        {/* перенести из RP */}
                        <FormNewCreate onClick={onAddNewCard} id="btnCreate">Создать задачу</FormNewCreate>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardDiv>
    )
}