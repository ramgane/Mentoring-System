const Student = require('../model/student');
const message = require('../messages/message');

class StudentServices {
  async create(studentObj, currentDb) {
    try {
      const newStudent = new Student(studentObj);
      return await newStudent.save();
    } catch (error) {
      if (error.code === 11000) {
        console.log('Trying to insert duplicate value for ', error.keyValue);
        return {
          status: 'failed',
          message: message.duplicateError.duplicateKey,
          error: error.message
        };
      } else {
        console.error('Error creating student:', error);
        return {
          status: 'failed',
          message: 'Failed to create student. Please try again later.',
          error: error.message
        };
      }
    }
  }
  async updateByEmail(email, updatedData, currentDb) {
    try {
      const result = await Student.findOneAndUpdate({ email }, updatedData, { new: true });
      return result;
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  }
  
  async getAll(currentDb) {
    try {
      const students = await Student.find();
      return students;
    } catch (error) {
      console.error('Error getting all students:', error);
      throw error;
    }
  }
  async deleteByEmail(email, currentDb) {
    try {
      const result = await Student.findOneAndDelete({ email });
      return result;
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  }
  
  
  async findByEmail(email, currentDb) {
    try {
      const student = await Student.findOne({ email });
      return student;
    } catch (error) {
      console.error('Error finding student by email ', error);
      throw error;
    }
  }
}

module.exports = new StudentServices();
