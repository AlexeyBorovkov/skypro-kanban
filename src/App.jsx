
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard'
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse'
import { PopUser } from './components/Popups/PopUser/PopUser'


function App() {
  return (
    <>
		<div className="wrapper">
			<PopUser/>
			<PopNewCard/>
			<PopBrowse/>
			<Header/>
			<Main/>
		</div>
    </>
  )
}

export default App
