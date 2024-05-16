import { Card, Contador, Label } from './syles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <Card ativo={props.ativo}>
    <Contador>3</Contador>
    <Label>tarefas</Label>
  </Card>
)

export default FiltroCard
