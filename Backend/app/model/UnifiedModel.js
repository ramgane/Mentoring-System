const { default: mongoose } = require('mongoose');

class UnifiedModel {
  constructor(modelName, modelSchema) {
    this.modelName = modelName;
    this.modelSchema = modelSchema;
    
    mongoose.connections.map((conn) => {
      conn.model(modelName, modelSchema);
    });
  }

  getModel(currentDb) {    
    if (currentDb === 'stage') {
      return mongoose.connections[1].models[this.modelName];
    } else if (currentDb === 'demo') {
      return mongoose.connections[2].models[this.modelName];
    } else {
      return mongoose.connections[0].models[this.modelName];
    }
  }
  getUDC(){
    return mongoose.connections[3].models[this.modelName];
  }
  getModelFromOrigin(origin) {    
    if (origin === process.env.STAGE_TEAM_URL ||
        origin === process.env.STAGE_MASHER_URL) {
      return mongoose.connections[1].models[this.modelName];
    } else if (
      origin === process.env.DEMO_MASHER_URL ||
      origin === process.env.DEMO_TEAM_URL) {
      return mongoose.connections[2].models[this.modelName];
    } else {
      return mongoose.connections[0].models[this.modelName];
    }
  }
}

module.exports = UnifiedModel;