
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard'
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse'
import { PopUser } from './components/Popups/PopUser/PopUser'
import { tasks } from './data'
import { useEffect, useState } from 'react'


function App() {
	const [cards, setCards] = useState(tasks)
	const [isLoading, setIsLoading] = useState(false)

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
    <>
		<div className="wrapper">
			<PopUser/>
			<PopNewCard/>
			<PopBrowse/>
			<Header addCard={addCard} />
			<Main isLoading={isLoading} cards={cards}/>
		</div>
    </>
  )
}

export default App