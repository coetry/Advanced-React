import React from "react"
import { Mutation } from "react-apollo"
import Form from "./styles/Form"
import gql from "graphql-tag"

export default class extends React.Component {
  state = {
    title: "",
    description: "",
    image: "",
    price: 0
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === "number" ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </fieldset>
      </Form>
    )
  }
}
