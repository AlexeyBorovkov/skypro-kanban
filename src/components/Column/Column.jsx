
import { Card } from "../Card/Card"
import { Cards } from "../Card/card.styled"
import { ColumnTitle, MainColumn } from "./column.styled"

export const Column = ({title, cards}) => {
    return (
        <MainColumn className="column">
            <ColumnTitle>
                <p>{title}</p>
            </ColumnTitle>
            <Cards>
                {cards.map(el => <Card key={el.id} card={el}/>)}
            </Cards>
        </MainColumn>	
    )
}
