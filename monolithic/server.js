const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./typeDefinitions.graphql",
  resolvers
});

server.start(4000, () =>
  console.log(`Server is running on http://localhost:${4000}`)
);
