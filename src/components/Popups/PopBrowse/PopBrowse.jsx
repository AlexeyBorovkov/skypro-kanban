import { Calendar } from "../../Calendar/Calendar.jsx"
import { paths } from "../../../routesPaths.js"
import { BtnBrowse, BtnBrowseEditBtnBor, BtnGroup, BtnLink, CategoriesPsubttl, CategoriesTheme, FormBrowseArea, FormBrowseBlock, PopBrowseBlock, PopBrowseBtnBrowse, PopBrowseBtnEdit, PopBrowseContainer, PopBrowseContent, PopBrowseDiv, PopBrowseForm, PopBrowseStatus, PopBrowseTopBlock, PopBrowseTtl, PopBrowseWrap,  StatusP, StatusTheme, StatusThemes, SubttlBrowseLabel, ThemeDownCategories } from "./popBrowse.styled.js"
import { useParams } from "react-router-dom"
import { CardsContext } from "../../../context/cardsContext.jsx"
import { useContext, useState } from "react"
import { colors } from "../../../global.styled.js"
import { ru } from "date-fns/locale"

export const PopBrowse = () => {

    const {cards} = useContext(CardsContext)
    const [date, setDate] = useState(new Date())
    const {id} = useParams()
   
    const tasksCard = cards.find((card) => card._id === id);

    const getDateFormat = (date) => {
        const formatDate = date.toLocaleDateString('ru-RU')
        return <p style={{ marginTop: '10px'}}>Срок исполнения:<br/>{formatDate}</p>
    }
    
    return (
        <PopBrowseDiv id="popBrowse">
                <PopBrowseContainer>
                <PopBrowseBlock>
                    <PopBrowseContent>
                        <PopBrowseTopBlock>
                            <PopBrowseTtl>{tasksCard.title}</PopBrowseTtl>
                            <CategoriesTheme $topicColor={`${colors[tasksCard.topic]}`}>
                                <p>{tasksCard.topic}</p>
                            </CategoriesTheme>
                        </PopBrowseTopBlock>
                        <PopBrowseStatus>
                            <StatusP>Статус</StatusP>
                            <StatusThemes>
                                <StatusTheme>
                                    <p>Без статуса</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Нужно сделать</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>В работе</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Тестирование</p>
                                </StatusTheme>
                                <StatusTheme>
                                    <p>Готово</p>
                                </StatusTheme>
                            </StatusThemes>
                        </PopBrowseStatus>
                        <PopBrowseWrap>
                            <PopBrowseForm className="form-browse" id="formBrowseCard" action="#">									
                                <FormBrowseBlock>
                                    <SubttlBrowseLabel htmlFor="textArea01">Описание задачи</SubttlBrowseLabel>
                                    <FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></FormBrowseArea>
                                </FormBrowseBlock>
                            </PopBrowseForm>
                            <Calendar locale={ru} mode="single" selected={date} onSelect={setDate} footer={getDateFormat(date)}/>
                        </PopBrowseWrap>
                        <ThemeDownCategories>
                            <CategoriesPsubttl>Категория</CategoriesPsubttl>
                            <CategoriesTheme>
                                <p className="_orange">Web Design</p>
                            </CategoriesTheme>
                        </ThemeDownCategories>
                        <PopBrowseBtnBrowse>
                            <BtnGroup>
                                <BtnBrowseEditBtnBor>Редактировать задачу</BtnBrowseEditBtnBor>
                                <BtnBrowseEditBtnBor>Удалить задачу</BtnBrowseEditBtnBor>
                            </BtnGroup>
                            
                        </PopBrowseBtnBrowse>
                        <PopBrowseBtnEdit>
                            <BtnGroup>
                                <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                            </BtnGroup>
                            <BtnBrowse><BtnLink to={paths.MAIN}>Закрыть</BtnLink></BtnBrowse>
                        </PopBrowseBtnEdit>                
                    </PopBrowseContent>
                </PopBrowseBlock>
            </PopBrowseContainer>
    </PopBrowseDiv>
    )
}