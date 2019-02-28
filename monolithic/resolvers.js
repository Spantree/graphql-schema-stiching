const { getStudentById, getClassById, getStudentClasses } = require("./data");

module.exports = {
  Query: {
    student: (_, { id }) => getStudentById(id),
    class: (_, { id }) => getClassById(id)
  },
  Student: {
    classes: student => getStudentClasses(student)
  }
};
