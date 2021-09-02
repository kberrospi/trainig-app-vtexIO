import React from 'react'

import { useLastUnit } from './hooks/useLastUnit'
import { styles } from './styles/styles'

const LastUnit = () => {
  const { unidades } = useLastUnit()
  const { handles } = styles()

  return (
    <>
      {unidades > 0 ? (
        <div className={`${handles.container}`}>
          <span className={`${handles['wrapper-title']}`}> Últimas </span>
          <span className={`${handles['wrapper-value']}`}> {unidades} UD </span>
        </div>
      ) : (
        <div className={`${handles.container}`}>
          <span className={`${handles['wrapper-title']}`}>
            {' '}
            No hay existencias{' '}
          </span>
        </div>
      )}
    </>
  )
}

export default LastUnit
