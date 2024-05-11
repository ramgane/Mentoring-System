const { default: mongoose } = require('mongoose');
require('dotenv').config();
const { MONGOURL } = process.env;
mongoose.set("strictQuery",true);

mongoose.connect(MONGOURL, {
}).then(() => {
  console.log('connected to mongodb...');
}).catch((err) => {
  console.error('Failed to connect to mongodb:', err);
  process.exit(1);
});

