const students = {
  1: {
    id: 1,
    name: "Nick"
  },
  2: {
    id: 2,
    name: "Mari"
  },
  3: {
    id: 3,
    name: "Marija"
  }
};
const classes = {
  1: {
    id: 1,
    name: "GraphQL101",
    description: "Learn about the basics of GraphQL",
    students: [1] // The ids of students taking this class
  },
  2: {
    id: 2,
    name: "AdvancedGraphQL",
    description: "Learn about advanced GraphQL topics!",
    students: [2, 3] // The ids of students taking this class
  }
};

const getStudentById = id => students[id];
const getClassById = id => classes[id];
const getStudentClasses = student =>
  Object.values(classes).filter(klass => klass.students.includes(student.id));

module.exports = {
  getStudentById,
  getClassById,
  getStudentClasses
};
