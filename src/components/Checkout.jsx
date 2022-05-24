import { Button } from 'semantic-ui-react'

const Checkout = ({ setNavigation }) => {

  const onClickContinue = () => {
    setNavigation('list')
  }

  const onClickPayment = () => {
    setNavigation('payment')
  }

  return <>
    <Button primary onClick={onClickContinue}>Continuar adicionando itens</Button>

    <Button primary onClick={onClickPayment}>Finalizar pedido</Button>
  </>
}

export default Checkout