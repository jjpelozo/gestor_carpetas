const UserAdmin = require("../models/userAdmin");

const registerController = {
  create(req, res) {
    UserAdmin.findOne({email:req.body.email})
    .then((email) => {
    if (email) {
      res.json("email existe");
    } else {
      UserAdmin.create(req.body).then(async (user) => {
        user.password = await user.encryptPassword(user.password);
        user.save();
        res.send(user);
      });
    }
})
    //res.json ("register")
  },
};

module.exports = registerController;
