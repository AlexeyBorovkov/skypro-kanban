import { Container } from "../../global.styled"
import { Column } from "../Column/Column"
import * as S from './main.styled.js'

export const Main = ({cards, isLoading}) => {
    return (
        <S.Main> 
            <Container>
                <S.MainBlock>
                    {isLoading ? 'Loading .....' : (
                        <S.MainContent>
                        <Column title={'Без статуса'} cards={cards.filter(el => el.status === 'Без статуса')}/>				
                        <Column title={'Нужно сделать'} cards={cards.filter(el => el.status === 'Нужно сделать')}/>				
                        <Column title={'В работе'} cards={cards.filter(el => el.status === 'В работе')}/>				
                        <Column title={'Тестирование'} cards={cards.filter(el => el.status === 'Тестирование')}/>				
                        <Column title={'Готово'} cards={cards.filter(el => el.status === 'Готово')}/>				
                    </S.MainContent>
                    )}
                </S.MainBlock>
            </Container>
        </S.Main>
    )
}