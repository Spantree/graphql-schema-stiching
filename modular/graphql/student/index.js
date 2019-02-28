const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const studentResolvers = require("./resolvers");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema(path.join(__dirname, "student.graphql"));

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: studentResolvers
});
