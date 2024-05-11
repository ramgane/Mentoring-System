
const Client = require('../model/Client');
const message = require('../messages/message');

class ClientService {
  async create(clientObj, currentDb) {
    try {
      const client = new (Client.getModel(currentDb))(clientObj);
      return await client.save();
    } catch (error) {
      if (error.code === 11000) {
        console.log('Trying to insert duplicate value for ', error.keyValue);
        return {
          status: 'failed',
          message: message.duplicateError.duplicateKey,
          error: error.message
        };
      } else {
        console.error('Error creating client:', error);
        return {
          status: 'failed',
          message: 'Failed to create client. Please try again later.',
          error: error.message
        };
      }
    }
  }
  async findByEmailAndPassword(email, password, currentDb) {
    try {
      const ClientModel = Client.getModel(currentDb);
      const client = await ClientModel.findOne({ Email: email, Password: password });
      return client;
    } catch (error) {
      console.error('Error finding client by email and password:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  
  
}


module.exports = new ClientService();