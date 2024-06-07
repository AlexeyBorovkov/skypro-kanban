import { useState } from 'react'

import { GlobalStyle} from './global.styled.js'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.js'
import {AppRoutes} from "./AppRoutes.jsx";


function App() {
  const [globalTheme, setGlobalTheme] = useState(true)

  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<AppRoutes globalTheme={globalTheme} setGlobalTheme={setGlobalTheme}/>
	</ThemeProvider>
  )
}
export default App