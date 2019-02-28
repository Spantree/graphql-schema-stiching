const { mergeSchemas } = require("graphql-tools");

const studentSchema = require("./student");
const classSchema = require("./class");

module.exports = mergeSchemas({ schemas: [studentSchema, classSchema] });
