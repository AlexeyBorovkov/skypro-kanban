import { useState } from "react";
import * as S from "./calendar.styled";
import { ru } from "date-fns/locale/ru";

export const Calendar = ({date, setDate}) => {

    const [value, setValue] = useState(<S.TitleDayPicker>Выберите срок исполнения.</S.TitleDayPicker>);

    const handleDayClick = (date) => {
        const formatDate = date.toLocaleDateString("RU-ru");
        setValue(<S.TitleDayPicker>Срок исполнения: <S.SpanDayPicker>{formatDate}</S.SpanDayPicker></S.TitleDayPicker>);
    }
  
    return <S.Calendar className="pop-new-card__calendar">
        <S.CalendarTtl>Даты</S.CalendarTtl>
            <S.DayPick onDayClick={handleDayClick} mode="single" selected={date} onSelect={setDate} footer={value} locale={ru} />
    </S.Calendar>;
}