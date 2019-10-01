import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Post = ({ data }) => {
  const { title, content } = data.wpgraphql.post
  return (
    <div>
      <Layout>
      <h1>{title}</h1>
      <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    </div>
  )
}

export default Post

export const pageQuery = graphql`
query GET_POST($id: ID!) {
    wpgraphql {
        post(id: $id) {
            title
            content
        }
    }
  }
`