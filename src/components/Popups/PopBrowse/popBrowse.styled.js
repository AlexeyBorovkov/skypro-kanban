import styled from "styled-components";
import { BtnBg, Hover01 } from "../../../global.styled";
import { Link } from "react-router-dom";

export const BtnBrowse = styled.button`
${BtnBg}
${Hover01}
`

export const BtnLink = styled(Link)`
 color: #FFFFFF;
 `

export const CategoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    background-color: #FFE4C2;
    color: #FF6D00;
    
    p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;  
 }
`
export const StatusTheme = styled.div`

`