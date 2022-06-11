
import { GraphQLClient, request, gql } from 'graphql-request';

const endPoint = 'https://api-ap-south-1.graphcms.com/v2/cl1cftilp0ceg01wb0ncnht6i/master';

const graphcms = new GraphQLClient(endPoint);
export default graphcms;

export const getSingleProduct = async (id) => {
    const query = gql`  
    query getProductsDetails($id: ID) {
        products(where: {id: $id}) {
          description
        }
    }
    `
    const result = await request(endPoint, query, { id });
    return result.products;
}

// export const getSpecificVarietyProduct = async (id) => {
//     const query = gql`  
//     query getVarietiesDetails($id: ID) {
//         varieties(where: {id: $id}) {
//           products {
//             id
//             name
//             image {
//               id
//               url
//             }
//             price
//           }
//         }
//     }  
//     `
//     const result = await request(endPoint, query, { id });
//     return result.varieties;
// }

import { GraphQLClient } from 'graphql-request';
const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl1cftilp0ceg01wb0ncnht6i/master',
);
export default graphcms;

// import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';
// import { gql } from 'graphql-request';
// import graphcms from '../../graphCMS/graphCMS';

// const QUERY = gql`
//   {
//     posts {
//       id
//       title
//       date
//     }
//   }
// `;

// const Home = props => {
//   const getStaticProps = async () => {
//     const { posts } = await graphcms.request(QUERY);
//     console.log(posts);
//   };

//   useEffect(() => {
//     getStaticProps();
//   }, []);
//   return <View style={{ flex: 1 }} />;
// };

// export default Home;

