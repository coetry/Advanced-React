import Link from "next/link"
import theme from "../utils/theme"

const Nav = () => (
  <ul>
    <Link href="/items">
      <a>items</a>
    </Link>
    <Link href="/sell">
      <a>sell</a>
    </Link>
    <Link href="/signup">
      <a>signup</a>
    </Link>
    <Link href="/orders">
      <a>orders</a>
    </Link>
    <Link href="/me">
      <a>me</a>
    </Link>
    <style jsx>
      {`
        ul {
          display: flex;
          justify-content: space-between;
        }
        a,
        a:visited {
          text-decoration: none;
          color: ${theme.black};
          text-transform: uppercase;
          font-weight: 900;
        }
      `}
    </style>
  </ul>
)

export default Nav
