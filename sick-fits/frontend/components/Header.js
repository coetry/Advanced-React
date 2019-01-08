import Nav from "./Nav"
import Link from "next/link"
import styled from "styled-components"
import theme from "../utils/theme"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = () => {
  console.log("changing")
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  console.log("done")
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const Logo = ({ children }) => (
  <h1>
    <Link href="/">
      <a>Sick Fits</a>
    </Link>
    <style jsx>{`
      h1 {
        font-size: 4rem;
        margin-left: 2rem;
        position: relative;
        z-index: 2;
        transform: skew(-7deg);
      }
      a {
        padding: 0.5rem 1rem;
        background: ${theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
      }
      @media (${theme.laptopBp}) {
        h1 {
          margin: 0;
          text-align: center;
        }
      }
    `}</style>
  </h1>
)

const StyledHeader = ({ children }) => <header>{children}</header>

const Header = () => (
  <header>
    <div className="bar">
      <Logo />
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
    <style jsx>{`
      .bar {
        border-bottom: 10px solid ${theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
      }
      .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 10px solid ${theme.lightgrey};
      }
      @media (${theme.laptopBp}) {
        .bar {
          grid-template-columns: 1fr;
          justify-content: center;
        }
      }
    `}</style>
  </header>
)

export default Header
