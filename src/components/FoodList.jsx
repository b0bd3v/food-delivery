import { List, Image } from 'semantic-ui-react'
import { } from 'semantic-ui-react'
import * as Styled from './FoodList.styles'

const FoodList = ({ foods, selectFood, setNavigation}) => {


  const onClickFood = (food) => {
    selectFood(food)
    setNavigation('item')
  }

  return <Styled.Wrapper>
    <List divided relaxed>
      {foods.map((food) => <List.Item key={food.title}>
          <Image size='tiny' centeredverticalAlign='middle' src={food.image} />
          <List.Content>
            <List.Header as='a' onClick={() => onClickFood(food)}>{food.title}</List.Header>
            <List.Description as='a' onClick={() => onClickFood(food)}>{food.description}</List.Description>
          </List.Content>
        </List.Item>)}
    </List>
  </Styled.Wrapper>
}

export default FoodList