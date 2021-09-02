import React from 'react'

import { Props } from './interfaces/interfaces'
import { useProductContext } from './hooks/useProductContext'
import { styles } from './styles/styles'

const TrainingApp = ({ name, showTitle = true }: Props) => {
  const { props } = useProductContext(name)
  const { handles } = styles()

  return (
    <>
      {props.name !== '' ? (
        <div className={`${handles.container}`}>
          <span className={`${handles['wrapper-title']}`}>
            {' '}
            {`${showTitle ? props.name : ''}`}&nbsp;{' '}
          </span>
          <span className={`${handles['wrapper-value']}`}>
            {' '}
            {props.values.join()}{' '}
          </span>
        </div>
      ) : (
        <span> </span>
      )}
    </>
  )
}

export default TrainingApp
