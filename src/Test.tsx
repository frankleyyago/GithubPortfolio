import styled from 'styled-components'

type ButtonProps = {
  main: boolean
  fontSize: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const WarnButton = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Button fontSize="18px" main>
        Enviar
      </Button>
      <Button fontSize="14px" main={false}>
        Cancelar
      </Button>
      <WarnButton as="a" main>
        <span>Não clique aqui</span>
      </WarnButton>
    </>
  )
}

export default Test
