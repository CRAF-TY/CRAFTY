const bcrypt = require( "bcrypt");
const prisma = require ("../lib/prisma.js")
require("dotenv").config()


 const SignUp = async  (req,res) =>{
    try {
      const body =  await req.body;
      console.log(body);
      const { 
        Role,
        Name,
        LastName,
        BuisnessName,
        Email,
        DateOfBirth,
        Password} =body
      const user = await prisma.user.findFirst({
        where: {
          Email: Email
        },
      })
     
      if (user?.Email)   return res.status(205).send({ message: " email allready exist !" });
      console.log(body);
      const salt = await bcrypt.genSalt(10);
      var hashedpassowrd = await bcrypt.hash(Password, salt)
      const newData = await prisma.user.create({
        data: { 
            
            Role: Role ,
            Name: Name,
            LastName: LastName,
            BuisnessName:BuisnessName,
            Email: Email,
            DateOfBirth: DateOfBirth  ,
            Password: hashedpassowrd ,
        },
      });
      if(!newData)  return res.status(408).send({ message: " failed to signup" });
  return res.status(201).send({ message: "Success Register " });
    } catch (error) {
      console.log(error);
      return   res.status(408).send({ error:error});
    }
  }
  module.exports = SignUp ;