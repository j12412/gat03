import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>List of country name and code</h1>
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
