import FiltroCard from '../../components/FiltroCard'
import { Filtros, Aside, Campo } from './styles'

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <Filtros>
        <FiltroCard ativo></FiltroCard>
        <FiltroCard></FiltroCard>
        <FiltroCard></FiltroCard>
        <FiltroCard></FiltroCard>
        <FiltroCard></FiltroCard>
        <FiltroCard></FiltroCard>
      </Filtros>
    </div>
  </Aside>
)

export default BarraLateral
