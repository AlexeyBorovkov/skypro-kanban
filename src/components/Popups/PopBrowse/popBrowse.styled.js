import styled from "styled-components";
import { BtnBg, Hover01, Hover03, Hover04} from "../../../global.styled";
import { Link } from "react-router-dom";
import { topicColors} from "../../../data";

export const BtnBrowse = styled.button`
${BtnBg}
${Hover01}
`

export const BtnLink = styled(Link)`
color: #FFFFFF;
`

export const PopBrowseDiv = styled.div`
width: 100%;
height: 100%;
min-width: 375px;
min-height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 7;

@media screen and (max-width: 660px) {
top: 70px;
}
`

export const PopBrowseContainer = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
padding: 0 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.4);

@media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
}
`

export const PopBrowseBlock = styled.div`
display: block;
margin: 0 auto;
background-color: #FFFFFF;
max-width: 630px;
width: 100%;
padding: 40px 30px 38px;
border-radius: 10px;
border: 0.7px solid #D4DBE5;
position: relative;

@media screen and (max-width: 660px) {
border-radius: 0;
}
`

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1; 
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  text-align: center;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  
  p {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
}

${props => topicColors[props.$topicColor]};
`

export const PopBrowseStatus = styled.div`
 margin-bottom: 11px;
`

export const StatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const StatusThemes= styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  }

${Hover04}
`

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubttlBrowseLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`

export const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`

export const CategoriesPsubttl = styled.p`
margin-bottom: 14px;
color: #000;
font-size: 14px;
font-weight: 600;
line-height: 1;
`

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

  button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  box-sizing: border-box;
  }


@media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
    button {
    width: 100%;
    height: 40px;
  }
}
`

export const BtnGroup = styled.div`
display: flex;
box-sizing: border-box;


button {
  margin-right: 8px;
  /* width: 120px;
  box-sizing: border-box; */
}

@media screen and (max-width: 495px) {
    width: 100%;

button {
    margin-right: 0px;
  }
}
`

export const BtnBrowseEditBtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;    

 ${Hover03}
`

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

  button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

@media screen and (max-width: 495px) {

  margin-right: 0px;
  width: 100%;

  button {
    width: 100%;
    height: 40px;
  }
}
`

export const PopBrowseError = styled.p`
color: red;
margin-top: 5px;
`