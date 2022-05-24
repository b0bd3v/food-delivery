import { Button } from 'semantic-ui-react'
import * as Styled from './Footer.styles'

const Footer = ({food, addInList, list, setNavigation}) => {

  const onClickAdd = () => {
    addInList(food)
  }

  return <Styled.Wrapper>
   {food ? <>
    <Button primary onClick={onClickAdd}>Adicionar</Button>
   </> : <>
    {/* {list.map((food) => <>
      {food.title}
    </>)} */}
    Itens adicionados ({list.length})
   </>}
  </Styled.Wrapper>
}

export default Footer