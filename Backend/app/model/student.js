const { default: mongoose, Schema } = require('mongoose');

const studentSchema = new Schema({
  name: String,
  email: String,
  dob: String,
  maths: String,
  physics: String,
  chemistry: String,
  cutoff: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
