import { Card, Descricao, Titulo, BarraAcoes, Botao, Tag } from './styles'

const Tarefa = () => (
  <Card>
    <Titulo>Nome da Tarefa</Titulo>
    <Tag>importante</Tag>
    <Tag>pendente</Tag>
    <Descricao></Descricao>
    <BarraAcoes>
      <Botao>Editar</Botao>
      <Botao>Remover</Botao>
    </BarraAcoes>
  </Card>
)

export default Tarefa
