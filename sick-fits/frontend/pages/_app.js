import App, { Container } from 'next/app'

class SickFits extends App {
  render() {
    const { Component: Page } = this.props
    return <Container>
      <div><code>بسم الله</code></div>
      <Page />
    </Container>
  }
}

export default SickFits
