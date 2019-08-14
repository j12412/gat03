import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About me</h1>
    { data.gcms.countries.map( d =>
      <p>{d.name} / {d.code} / {d.continent.name}</p>
    )}
  </Layout>
)

export const query = graphql`
  query {
    gcms {
      countries {
        name
        code
        continent {
          name
        }
      }
    }
  }
`
