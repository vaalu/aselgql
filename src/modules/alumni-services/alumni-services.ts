import { createSchema } from 'graphql-yoga'
 
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      services: [String]
    }
  `,
  resolvers: {
    Query: {
      services: () => ['meetups', 'humanitarian assistances', 'trusts']
    }
  }
})

export const getAlumniServices = () => schema