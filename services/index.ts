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

export const getRecentPosts = async () => {
  const query = gql`
  query GetRecentPosts {
            posts(last: 3, orderBy: createdAt_ASC) {
              id
              createdAt
              title
              slug
              featuredImage {
                url
              }
            }
          }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
}

export const getSimilarPosts = async ( ) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) 
       {
        id
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  // const variables = {
  //   slug: slug,
  //   categories: categories,
  // };
  const result = await request(graphqlAPI, query);
  return result.posts;
};


