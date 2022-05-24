import { Header as SemanticHeader } from 'semantic-ui-react'
import * as Styled from './Header.styles'


const Header = ({ title }) => {
  return <Styled.Wrapper>
    <SemanticHeader as='h1'>{title}</SemanticHeader>
  </Styled.Wrapper>
}


export default Header