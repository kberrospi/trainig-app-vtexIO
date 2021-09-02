/* import gql from "graphql-tag";

export const GET_INVENTORY = gql`
  query getInventory($sku: ID!){
  product(identifier:{field: sku, value:$sku})@context(provider: "vtex.search-graphql"){
    items{
      ean,
      sellers{
        sellerName,
        commertialOffer{
          AvailableQuantity
        }
      }
    }
  }
} ` */
