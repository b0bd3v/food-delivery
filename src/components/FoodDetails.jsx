import { Image, Header } from 'semantic-ui-react'
import * as Styled from './FoodDetails.styles'

const FoodDetails = ({food}) => {
  return <>
    <Image fluid src={food.image} />
    <Styled.Container fluid>
      <Header as='h2'>{food.title}</Header>
      <p>
        {food.description}
      </p>
      <p>
        Preço: {food.price}
      </p>
    </Styled.Container>
  </>
}

export default FoodDetails