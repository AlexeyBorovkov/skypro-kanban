import * as S from "./calendar.styled";
import { ru } from "date-fns/locale/ru";

export const Calendar = ({value, handleDayClick, dateCalendar, setDateCalendar}) => {

    return <S.Calendar className="pop-new-card__calendar">
        <S.CalendarTtl>Даты</S.CalendarTtl>
        <S.DayPick onDayClick={handleDayClick} mode="single" selected={dateCalendar} onSelect={setDateCalendar} footer={value} locale={ru} />
    </S.Calendar>;
}
