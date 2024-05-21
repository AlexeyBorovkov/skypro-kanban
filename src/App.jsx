import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './componets/Header/Header.jsx'
import { Main } from './componets/Main/Main.jsx'
import { PopBrowse } from './componets/Popups/PopBrowse/PopBrowse.jsx'
import { PopNewCard } from './componets/Popups/PopNewCard/PopNewCard.jsx'
import { PopUser } from './componets/Popups/PopExit/PopExit.jsx'
import { tasks } from './data.js'
import { GlobalStyle, Wrapper } from './global.styled.js'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './themeStyle.js'


function App() {
	const [cards, setCards] = useState(tasks);
	const [isLoading, setIsLoading] = useState(false)
	const [globalTheme, setGlobalTheme] = useState(true)

	const addCard = (event) => {
		event.preventDefault()
		const newCard = {
			id: cards[cards.length - 1].id + 1,
			date: '05/05/2024',
			topic: 'Web Design',
			title: 'Название задачи',
			status: 'Без статуса',
		}
		setCards(
			[...cards, newCard ]
		)
	}

	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 500)
	}, [])

  return (
	<ThemeProvider theme={globalTheme ? lightTheme : darkTheme}>
		<GlobalStyle/>
		<Wrapper>
			{/* pop-up start */}
			<PopBrowse/>
			<PopNewCard/>
			<PopUser/>
			{/* pop-up end */}
			<Header globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} addCard={addCard}/>
			<Main isLoading={isLoading} cards={cards}/>	
		</Wrapper>
	</ThemeProvider>
  )
}
export default App