import { styled } from "styled-components";
import { Subttl } from "../../global.styled";
import { DayPicker } from "react-day-picker";

export const TitleDayPicker = styled.p`
    margin-top: 10px;
`;

export const SpanDayPicker = styled.span`
    color: #000000;
`;

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }
`;

export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    @media screen and (max-width: 660px){
        padding: 0;
    }
    ${Subttl}
`;

export const DayPick = styled(DayPicker)`
    --rdp-cell-size: 22px;
    --rdp-caption-font-size: 14px;
    --rdp-background-color: #EAEEF6;
    --rdp-background-color-dark: #94A6BE;
    --rdp-accent-color: #94A6BE;
    font-size: 10px;
    color: #94A6BE;
    margin: 0;
`;

export const CalendarBlock = styled.div`
    display: block;
`;

export const CalendarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
    @media screen and (max-width: 660px) {
        padding: 0;
    }
`;

export const CalendarMonth = styled.div`
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavAction = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavActionSvg = styled.svg`
    fill: #94A6BE;
`;

export const CalendarContent = styled.div`
    margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`;

export const CalendarDayName = styled.div`
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`;

export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 660px) {
        width: 344px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;

export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
    @media screen and (max-width: 660px) {
        width: 42px;
        height: 42px;
        font-size: 14px;
    }
`;

export const OtherMonth = styled(CalendarCell)`
    opacity: 0;
`;

export const CellDay = styled(CalendarCell)`
    &:hover {
        color: #94A6BE;
        background-color: #EAEEF6;
    }
`;

export const Current = styled(CalendarCell, CellDay)`
    font-weight: 700;
`;

export const CalendarPeriod = styled.div`
    padding: 0 7px;
    @media screen and (max-width: 660px) {
        padding: 0;
    }
`;

export const CalendarP = styled.p`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`;

export const CalendarPSpan = styled.span`
    color: #000000;
`;