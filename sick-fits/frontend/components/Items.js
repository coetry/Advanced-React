import { Query } from "react-apollo"
import gql from "graphql-tag"
import Item from "./Item"
import theme from "../utils/theme"

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
      price
      image
    }
  }
`

export default () => (
  <div className="items">
    <p>Items!</p>
    <Query query={ALL_ITEMS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>loading ...</p>
        if (error) return <p>uh oh</p>
        if (data) {
          return (
            <div className="item-list">
              {data.items.map(item => {
                return <Item key={item.id} item={item} />
              })}
            </div>
          )
        }
      }}
    </Query>
    <style jsx>
      {`
        .items {
          text-align: center;
        }
        .item-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 60px;
          max-width: ${theme.maxWidth};
        }
      `}
    </style>
  </div>
)
