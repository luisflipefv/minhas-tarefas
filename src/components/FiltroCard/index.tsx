import { Card, Contador, Label } from './syles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <Label>{legenda}</Label>
  </Card>
)

export default FiltroCard
