import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}
`

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({theme}) => theme.body};
`

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`

// export const Hover01 = (element) => styled[element]`
// &:hover {
//   background-color: #33399b;
// }
// `

// export const Hover02 = (element) => styled[element]`
// &:hover {
//   color: #33399b;
// }
// `

export const Hover01 = css`
&:hover {
  background-color: #33399b;
}
`
export const Hover02 = css`
&:hover {
  color: #33399b;
}
`
export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
`

export const Hover04 = css`
&:hover {
  background: #94A6BE;
  color: #FFFFFF;
}
`

const orange = css`
background-color: ${({theme}) => theme.orangeBg}; 
color: ${({theme}) => theme.orangeText};
`

const green = css`
background-color: ${({theme}) => theme.greenBg}; 
color: ${({theme}) => theme.greenText};
`

const purple = css`
background-color: ${({theme}) => theme.purpleBg}; 
color: ${({theme}) => theme.purpleText};
`

export const colorTheme = (color) => css`
${color === 'orange' && orange} 
${color === 'green' && green} 
${color === 'purple' && purple} 
`

export const BtnBg = css`
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
`