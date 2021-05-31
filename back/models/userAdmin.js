const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")

const userAdminSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  
  password: {
    type: String,
    required: true,

  },
  roles:[{
      ref:"RolesAdmin",
      type: Schema.Types.ObjectId
  }],

  versionKey: false

});


const UserAdmin = mongoose.model("UserAdmin", userAdminSchema);

UserAdmin.prototype.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password,salt)
}

UserAdmin.prototype.comparePassword = async (password, receivedPassword)=>{
  return await bcrypt.compare(password, receivedPassword)
}


module.exports = UserAdmin;
