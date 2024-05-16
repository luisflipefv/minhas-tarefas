import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDeTarefas></ListaDeTarefas>
      </Container>
    </>
  )
}

export default App
