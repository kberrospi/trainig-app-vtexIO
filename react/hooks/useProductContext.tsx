/* eslint-disable */
import { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { PropsProd } from '../interfaces/interfaces'

export const useProductContext = (name: string) => {
  const productContextValue = useProduct()
  const [props, setProps] = useState({
    name: '',
    values: [],
  })

  useEffect(() => {
    const { properties } = productContextValue.product
    const property = properties.find((obj: PropsProd) => obj.name === name)
    property && setProps(property)
  }, [])

  return {
    props,
  }
}
