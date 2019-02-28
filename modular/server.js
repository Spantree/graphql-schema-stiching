const { GraphQLServer } = require("graphql-yoga");
const schema = require("./graphql");

const server = new GraphQLServer({
  schema
});

server.start(4000, () =>
  console.log(`Server is running on http://localhost:${4000}`)
);
