import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>
      Duas tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;{' '}
    </p>
    <ul>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
      <li>
        <Tarefa></Tarefa>
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
