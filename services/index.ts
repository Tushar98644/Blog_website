import { request, gql } from 'graphql-request'

interface types{
    postsConnection: any;
    result: any
}

const graphqlAPI =process.env.GRAPHQL_API_URL;

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

    const result:types = await request(graphqlAPI,query);
    console.log(result.postsConnection.edges);
    return result.postsConnection.edges;
}