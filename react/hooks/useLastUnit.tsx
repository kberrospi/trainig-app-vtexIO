/* eslint-disable */
import { useEffect, useState } from 'react'
import { consulta } from '../helpers/queryArrays'
import { useProduct } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import getInventory from '../graphql/queries/query.getInventory.gql'

export const useLastUnit = () => {
  const { selectedItem } = useProduct()
  const { itemId, ean, sellers } = selectedItem
  const [unidades, setUnidades] = useState(0)
  const sellerName = sellers[0].sellerName
  const { data } = useQuery(getInventory, {
    variables: {
      sku: itemId,
    },
  })

  useEffect(() => {
    if (data) {
      const res = consulta(data.product.items, 'ean', ean)
      if (res) {
        consulta(res.sellers, 'sellerName', sellerName, setUnidades)
      } else {
        const resItem = consulta(data.product.items, 'ean', itemId)
        consulta(resItem.sellers, 'sellerName', sellerName, setUnidades)
      }
    }
  }, [data])

  return {
    unidades,
  }
}
