const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const studentsSchema = new Schema(
  {
    name: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    lastName: String,
    email: String,
    age: Number
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Student = model("Student", studentsSchema);

module.exports = Student;
