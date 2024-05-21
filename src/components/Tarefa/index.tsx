import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  BarraAcoes,
  Botao,
  Tag,
  BotaoSalvar,
  BotaoCancelarRemover
} from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao value={descricao}></Descricao>
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Tarefa
