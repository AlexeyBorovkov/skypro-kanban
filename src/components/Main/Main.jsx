
import { Container } from "../../global.styled"
import { LoaderItem } from "../../components/loader/LoaderItem.jsx"
import { Column } from "../Column/Column"
import * as S from './main.styled.js'

export const Main = ({ cards, isLoading, errorMsg }) => {
    const statusTitles = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];
  
    return (
      <S.Main>
        <Container>
          <S.MainBlock>
            {errorMsg ? <p>{errorMsg}</p> : (isLoading ? LoaderItem() : (
              <S.MainContent>
                {statusTitles.map((title, index) => (
                  <Column key={index} title={title} cards={cards.filter(el => el.status === title)} />
                ))}
              </S.MainContent>
            ))}
          </S.MainBlock>
        </Container>
      </S.Main>
    );
  }