const { getStudentById, getStudentClasses } = require("../../data");

module.exports = {
  Query: {
    student: (_, { id }) => getStudentById(id)
  },
  Student: {
    classes: student => getStudentClasses(student)
  }
};
