const bcrypt = require('bcryptjs');
const { array } = require('joi');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const message = require('../messages/message');

class DataService {
  async generateOtp(user) {
    let otp = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000).toString();
    console.log(otp)
    user.otp = await bcrypt.hash(otp, 10);
    user = await user.save();
    return { user, otp };
  }

  async verifyOtp(otp, user, keepLoggedIn) {
    let verify = await bcrypt.compare(otp, user.otp);
    if (!verify) throw new BadRequestError(message.otp.invalid);
    return user.generateAuthToken(keepLoggedIn);
  }



}

module.exports = DataService;