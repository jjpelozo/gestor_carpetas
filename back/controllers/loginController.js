const UserAdmin = require("../models/userAdmin")
const jwt = require('jsonwebtoken');


const loginController = {
    find(req, res){
    UserAdmin.findOne({email : req.body.email})
        .then( async (user) => {
            if(!user) {
                return res.status(400).send("usuario no existente")
            }
           
           const valid = await user.comparePassword(
            req.body.password,
            user.password
          );

            if(!valid) {
                return res.status(401).send("invalid credentials")
            } 
 
            const token = jwt.sign({ _id: user._id }, "techo")
            return res.status(200).json({ token, user })

        })
    }
}

module.exports = loginController

/* const loginController = async (req, res)=> {
    console.log (req.body)
    res.json ("login")
    
}



module.exports = loginController; */