const clientService = require('../../services/client.service');
const message = require('../../messages/message');
const jwt = require('jsonwebtoken');
const studentService = require('../../services/student.service');
class StudentController {
 
    async create(req, res) {
        try {
          // Check if email already exists
          const existingStudent = await studentService.findByEmail(req.body.email, req.currentDb);
          if (existingStudent) {
            res.status(200).json({ status:false,message: 'User already exists' });
            return;
          }
          // Create student
          const student = await studentService.create(req.body, req.currentDb);
          res.status(200).send({ status:true,message: message.student.created, student, });
        } catch (error) {
          console.error('Error creating student:', error);
          let statusCode = 500;
          let errorMessage = 'Failed to create student. Please try again later.';
    
          res.status(statusCode).send({ error: errorMessage });
        }
      }
      async update(req, res) {
        try {
          const { email } = req.body;
          const updatedData = { ...req.body }; // Assuming req.body contains the updated data
      
          // Check if student exists
          const existingStudent = await studentService.findByEmail(email, req.currentDb);
          if (!existingStudent) {
            res.status(200).json({ status:false,message: 'Student not found'});
            return;
          }
      
          // Update the student
          const result = await studentService.updateByEmail(email, updatedData, req.currentDb);
          res.status(200).json({ message: 'Student updated successfully', result,status:true });
        } catch (error) {
          console.error('Error updating student:', error);
          res.status(500).json({ error: 'Failed to update student. Please try again later.' });
        }
      }
      async getAllStudents(req, res) {
        try {
          const students = await studentService.getAll(req.currentDb);
          res.status(200).json({ students });
        } catch (error) {
          console.error('Error getting all students:', error);
          res.status(500).json({ error: 'Failed to get all students. Please try again later.' });
        }
      }
      async deleteStudent(req, res) {
        try {
          const { email } = req.body;
      
          // Check if student exists
          const existingStudent = await studentService.findByEmail(email, req.currentDb);
          if (!existingStudent) {
            res.status(200).json({ status:false,message: 'Student not found'});
            return;
          }
      
          // Delete the student
          const result = await studentService.deleteByEmail(email, req.currentDb);
          res.status(200).json({ status:true,message: 'Student deleted successfully', result });
        } catch (error) {
          console.error('Error deleting student:', error);
          res.status(500).json({ error: 'Failed to delete student. Please try again later.' });
        }
      }
      
      
      
  
  
  

}

module.exports = new StudentController();