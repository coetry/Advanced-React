import ItemStyles from "./styles/ItemStyles"
import PriceTag from "./styles/PriceTag"
import Title from "./styles/Title"
import formatMoney from "../lib/formatMoney"
import Link from "next/link"

export default ({ item }) => (
  <ItemStyles>
    <img src={item.image} width={150} />
    <Title>
      <Link href={{ pathname: "/", query: { id: item.id } }}>
        <a>{item.title}</a>
      </Link>
    </Title>
    <PriceTag>${item.price}</PriceTag>
    <p>{item.description}</p>
    <div className="buttonList">
      <Link href={{ pathname: "update", query: { id: item.id } }}>
        <a>Edit</a>
      </Link>
      <button>Add To Cart</button>
      <button>Delete</button>
    </div>
  </ItemStyles>
)
