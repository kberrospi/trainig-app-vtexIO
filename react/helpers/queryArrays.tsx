export const consulta = (
  array: any,
  key: string,
  compare: string,
  setUds?: (num: number) => void
) => {
  const query = array.find((res: any) => res[key] === compare)

  if (setUds) {
    setUds(query.commertialOffer.AvailableQuantity)
  }

  return query
}
