const { getClassById } = require("../../data");

module.exports = {
  Query: {
    class: (_, { id }) => getClassById(id)
  }
};
