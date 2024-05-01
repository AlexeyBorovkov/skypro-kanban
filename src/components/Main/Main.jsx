import { Column } from "../Column/Column"

export const Main = ({cards, isLoading})  => {
    return (
        <main className="main">
            <div className="container"> 
                <div className="main__block">
                {isLoading ? 'Loading...' : (
                        <div className="main__content">
                            <Column title={'Без статуса'} cards={cards.filter(el => el.status === 'Без статуса')}/>
                            <Column title={'Нужно сделать'} cards={cards.filter(el => el.status === 'Нужно сделать')}/>
                            <Column title={'В работе'} cards={cards.filter(el => el.status === 'В работе')}/>
                            <Column title={'Тестирование'} cards={cards.filter(el => el.status === 'Тестирование')}/>
                            <Column title={'Готово'} cards={cards.filter(el => el.status === 'Готово')}/>                        
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
} 