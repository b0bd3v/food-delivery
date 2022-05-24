import { Button } from 'semantic-ui-react'
import * as Styled from './Footer.styles'

const Footer = ({food}) => {

  const onClickAdd = () => {
    console.log('Adicionado');
  }

  return <Styled.Wrapper>
   {food && <>
    <Button primary onClick={onClickAdd}>Adicionar</Button>
   </>}
  </Styled.Wrapper>
}

export default Footer