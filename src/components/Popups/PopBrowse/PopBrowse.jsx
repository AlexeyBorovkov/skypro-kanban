import { paths } from "../../../routesPaths.js"
import * as S from "./popBrowse.styled.js"
import { useNavigate, useParams } from "react-router-dom"
import { CardsContext } from "../../../context/cardsContext.jsx"
import { useContext, useEffect, useState } from "react"
import { deleteCard, editCard } from "../../../api/cardsApi.js"
import { UserContext } from "../../../context/userContext.jsx"
import { LoaderItem } from "../../../components/loader/LoaderItem.jsx"
import { Calendar } from "../../Calendar/Calendar.jsx"
import { TitleDayPicker, SpanDayPicker } from "../../Calendar/calendar.styled.js"
import { colors } from "../../../global.styled.js"


export const PopBrowse = () => {

    const {cards, setCards} = useContext(CardsContext)
    const {user} = useContext(UserContext)
    const [date, setDate] = useState(new Date())
  
    const navigation = useNavigate()
    const [error, setError] = useState('')
    const {id} = useParams()
 
    const tasksCard = cards.find((card) => card._id === id);

    const deleteTask = () => {

        deleteCard({token: user.token, id}).then((response) => {
            setError('')
            setCards(response.tasks)
            navigation(paths.MAIN)
        }).catch((error) => {
            setError(error.message)
		})
    }

    const [isActive, setIsActive] = useState(false)

  

    const [editInputTask, setEdtitInputTask] = useState({
        title: '',
        topic: '',
        description: '',
        date: '',
        status: '',
    })

    useEffect(() => {
        if(tasksCard) {
            setEdtitInputTask({
                title: tasksCard.title,
                topic: tasksCard.topic,
                description: tasksCard.description,
                date: tasksCard.date,
                status: tasksCard.status,
            })
        }
    },[tasksCard])

    const onSaveEditTask = () => {

        if(!editInputTask.description) {
            return setError('Введите описание задачи')
        }

        const editTask = {
            title: tasksCard.title,
            topic: tasksCard.topic,
            date: date,
            description: editInputTask.description,
            status: editInputTask.status,
        }

        editCard({token: user.token, editTask: editTask, id})
        .then((response) => {
            setCards(response.tasks);
            navigation(paths.MAIN);
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    const cancellationEdit = () => {
        setEdtitInputTask(tasksCard);
    }

    const getDateFormat = (date) => {
        if(isActive) {
            const formatDate = date.toLocaleDateString('ru-RU')
            return <TitleDayPicker>Срок исполнения:<br/><SpanDayPicker>{formatDate}</SpanDayPicker></TitleDayPicker>
        } else {
            const formatDate = date.toLocaleDateString('ru-RU')
            return <TitleDayPicker>Срок исполнения:<br/><SpanDayPicker>{formatDate}</SpanDayPicker></TitleDayPicker>
        }
    }

    return (
        <S.PopBrowseDiv id="popBrowse">
            <S.PopBrowseContainer>
                <S.PopBrowseBlock>
                        {tasksCard ?
                            <S.PopBrowseContent>
                            <S.PopBrowseTopBlock>
                                <S.PopBrowseTtl>{tasksCard.title}</S.PopBrowseTtl>
                                <S.CategoriesTheme $topicColor={`${colors[tasksCard.topic]}`}>
                                    <p>{tasksCard.topic}</p>
                                </S.CategoriesTheme>
                            </S.PopBrowseTopBlock>
                            <S.PopBrowseStatus>
                                <S.StatusP>Статус</S.StatusP>
                                {isActive ? <S.StatusThemes>
                                    <S.StatusTheme $isActiv={editInputTask.status === 'Без статуса'}>
                                        <S.StatusThemeP htmlFor="status1">Без статуса</S.StatusThemeP>
                                        <S.PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status1" value={'Без статуса'}/>
                                    </S.StatusTheme>
                                    <S.StatusTheme $isActiv={editInputTask.status === 'Нужно сделать'}>
                                        <S.StatusThemeP htmlFor="status2">Нужно сделать</S.StatusThemeP>
                                        <S.PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status2" value={'Нужно сделать'}/>
                                    </S.StatusTheme>
                                    <S.StatusTheme $isActiv={editInputTask.status === 'В работе'}>
                                        <S.StatusThemeP htmlFor="status3">В работе</S.StatusThemeP>
                                        <S.PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status3" value={'В работе'}/>
                                    </S.StatusTheme>
                                    <S.StatusTheme $isActiv={editInputTask.status === 'Тестирование'}>
                                        <S.StatusThemeP htmlFor="status4">Тестирование</S.StatusThemeP>
                                        <S.PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status4" value={'Тестирование'}/>
                                    </S.StatusTheme>
                                    <S.StatusTheme $isActiv={editInputTask.status === 'Готово'}>
                                        <S.StatusThemeP htmlFor="status5">Готово</S.StatusThemeP>
                                        <S.PopBrowseRadioInput onChange={(e) => {setEdtitInputTask({...editInputTask, status: e.target.value})}} type="radio" name="status" id="status5" value={'Готово'}/>
                                    </S.StatusTheme>
                                </S.StatusThemes> :                             
                                <S.StatusThemes>
                                    <S.StatusTheme>
                                        <S.StatusThemeP>{tasksCard.status}</S.StatusThemeP>
                                    </S.StatusTheme>
                                </S.StatusThemes>}
                            </S.PopBrowseStatus>
                            <S.PopBrowseWrap>
                                <S.PopBrowseForm className="form-browse" id="formBrowseCard" action="#">									
                                    <S.FormBrowseBlock>
                                        <S.SubttlBrowseLabel htmlFor="textArea01">Описание задачи</S.SubttlBrowseLabel>
                                        {isActive ? 
                                        <S.FormBrowseArea onChange={(e) => {setEdtitInputTask({...editInputTask, description: e.target.value})}} value={editInputTask.description} name="text" id="textArea01" placeholder="Введите описание задачи..."></S.FormBrowseArea> :
                                        <S.FormBrowseArea name="text" id="textArea01" value={editInputTask.description}  readOnly placeholder="Введите описание задачи..."></S.FormBrowseArea>} 
                                    </S.FormBrowseBlock>
                                </S.PopBrowseForm>
                                {isActive ? 
                                <Calendar mode="single" required selected={date} onSelect={setDate} footer={getDateFormat(date)}/> :
                                <Calendar selected={date}  footer={getDateFormat(date)}/>}
                            </S.PopBrowseWrap>
                            <S.ThemeDownCategories>
                                <S.CategoriesPsubttl>Категория</S.CategoriesPsubttl>
                                <S.CategoriesTheme>
                                    <p className="_orange">Web Design</p>
                                </S.CategoriesTheme>
                            </S.ThemeDownCategories>
                            {isActive ? 
                            <S.PopBrowseBtnEdit>
                            <S.BtnGroup>
                                <S.BtnBrowse onClick={onSaveEditTask}><S.BtnLink>Сохранить</S.BtnLink></S.BtnBrowse>
                                <S.BtnBrowseEditBtnBor onClick={cancellationEdit}>Отменить</S.BtnBrowseEditBtnBor>
                                <S.BtnBrowseEditBtnBor onClick={deleteTask}>Удалить задачу</S.BtnBrowseEditBtnBor>
                            </S.BtnGroup>
                            <S.BtnBrowse><S.BtnLink to={paths.MAIN}>Закрыть</S.BtnLink></S.BtnBrowse>
                            </S.PopBrowseBtnEdit> :
                            <S.PopBrowseBtnBrowse>
                            <S.BtnGroup>
                                <S.BtnBrowseEditBtnBor onClick={()=>{setIsActive(true)}}>Редактировать задачу</S.BtnBrowseEditBtnBor>
                                <S.BtnBrowseEditBtnBor onClick={deleteTask}>Удалить задачу</S.BtnBrowseEditBtnBor>
                            </S.BtnGroup>
                            <S.BtnBrowse><S.BtnLink to={paths.MAIN}>Закрыть</S.BtnLink></S.BtnBrowse>
                            </S.PopBrowseBtnBrowse>}
                        <S.PopBrowseError>{error && error}</S.PopBrowseError>            
                        </S.PopBrowseContent> : 
                        <LoaderItem/>}
                </S.PopBrowseBlock>
            </S.PopBrowseContainer>
    </S.PopBrowseDiv>
    )
}