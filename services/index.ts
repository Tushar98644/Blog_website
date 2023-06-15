import { request, gql } from 'graphql-request'

// interface types {
//   postsConnection: any;
//   result: any
// }

const graphqlAPI = process.env.GRAPHQL_API_URL;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
       `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
}