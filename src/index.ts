import { ApolloServer } from 'apollo-server'
import { schema as typeDefs } from './schema.gql'
import { upstream } from './upstream'

new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      getTiles: upstream.tiles.list,
    },
  },
})
  .listen()
  .then((param: { url: string }) => {
    console.log(`🚀  Server ready at ${param.url}`)
  })
