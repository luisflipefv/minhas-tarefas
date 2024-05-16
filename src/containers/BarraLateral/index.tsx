import FiltroCard from '../../components/FiltroCard'
import { Filtros, Aside, Campo } from './styles'

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <Filtros>
        <FiltroCard ativo legenda="Pendentes" contador={1}></FiltroCard>
        <FiltroCard legenda="Concluídas" contador={3}></FiltroCard>
        <FiltroCard legenda="Urgentes" contador={2}></FiltroCard>
        <FiltroCard legenda="Importantes" contador={2}></FiltroCard>
        <FiltroCard legenda="Normal" contador={4}></FiltroCard>
        <FiltroCard legenda="Todas" contador={12}></FiltroCard>
      </Filtros>
    </div>
  </Aside>
)

export default BarraLateral
