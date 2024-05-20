
import './App.css'
import { Header } from './componets/Header/Header'
import { Main } from './componets/Main/Main'
import { PopNewCard } from './componets/Popups/PopNewCard/PopNewCard'
import { PopBrowse } from './componets/Popups/PopBrowse/PopBrowse'
import { PopUser } from './componets/Popups/Popuser/PopExit'
import { tasks } from './data'
import { useEffect, useState } from 'react'
import { GlobalStyle, Wrapper } from './global.styled'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle'


function App() {
	const [cards, setCards] = useState(tasks)
	const [isLoading, setIsLoading] = useState(false)
	const [globalTheme, setGlobalTheme] = useState(true)

	const addCard = (e) => {
		e.preventDefault()
		const newCard = {
			id: cards[cards.length -1].id + 1,
			date: '30.1.2023',
			topic: "Web Design",
			title: "Новая задача",
			status: "Без статуса",
		}

		setCards([...cards, newCard])
	}

	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])

  return (
    <ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<Wrapper>
			<PopUser/>
			<PopNewCard/>
			<PopBrowse/>
			<Header setGlobalTheme = {setGlobalTheme} globalTheme = {globalTheme} addCard={addCard} />
			<Main isLoading={isLoading} cards={cards}/>
		</Wrapper>
    </ThemeProvider>
  )
}

export default App