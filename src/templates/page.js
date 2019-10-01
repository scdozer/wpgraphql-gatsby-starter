import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import { PageTitle } from "../styles"

const Page = ({ data }) => {
  const { title, content } = data.wpgraphql.page
  return (
    <div>
      <Layout>
      <h1>{title}</h1>
      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    </div>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`