import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  {
    wordPress {
      pages {
        nodes {
          uri
          title
          link
          id
        }
      }
    }
  }
`;

const Home = ({data}) => {
  const info = data.wordPress.pages.nodes;
  return (
    <div>
      {
        info.map(infos => {
          return <h1>{infos.title}<a href={infos.uri}>{infos.title}</a></h1>
        })
      }
     </div>
  );
};

export default Home;
