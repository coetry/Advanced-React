import App, { Container } from "next/app"
import Page from "../components/Page"
import { ThemeProvider } from "styled-components"
import { ApolloProvider } from "react-apollo"
import withData from "../lib/withData"
import theme from "../utils/theme"

class SickFits extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps()
    }
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <Page>
              <Component />
            </Page>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(SickFits)
