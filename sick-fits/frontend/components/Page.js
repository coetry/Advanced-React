import styled, { ThemeProvider, injectGlobal } from "styled-components"
import Header from "./Header"
import Meta from "./Meta"

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  laptopBp: "max-width: 1200px"
}

const Inner = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      max-width: ${({ theme }) => theme.maxWidth};
      margin: 0 auto;
      padding: 2rem;
    `}</style>
  </div>
)

const Page = ({ children }) => (
  <div>
    <Meta />
    <Header />
    <Inner>{children}</Inner>
    <style jsx global>
      {`
        html {
          box-sizing: border-box;
          font-size: 10px;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 1.5rem;
        }
      `}
    </style>
  </div>
)
export default Page
