const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const classResolvers = require("./resolvers");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema(path.join(__dirname, "class.graphql"));

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: classResolvers
});
