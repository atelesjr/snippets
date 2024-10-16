import { ReactElement } from 'react'
import * as S from './styles'

type GlassProps = {
   children: ReactElement
}

const Glass = ({children}: GlassProps) => {
  return (
    <S.Glass>
      { children }
    </S.Glass>
  )
}

export default Glass