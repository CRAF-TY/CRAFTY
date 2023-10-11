const bcrypt = require( "bcrypt");
const prisma = require ("../lib/prisma.js")
require("dotenv").config()


 const SignUp = async  (req,res) =>{
   
    try {
      const body =  await req.body;
      console.log(body,"boodyyy");
      
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
          email: Email
        },
      })
     
      if (user?.email)   return res.status(205).send({ message: " email allready exist !" });
      console.log(body);
      const salt = await bcrypt.genSalt(10);
      var hashedpassowrd = await bcrypt.hash(Password, salt)
      const newData = await prisma.user.create({
        data: { 
            
            role: Role ,
            name: Name,
            lastName: LastName,
            buisnessName:BuisnessName,
            email: Email,
            dateOfBirth: DateOfBirth  ,
            password: hashedpassowrd ,
        },
      });
      if(!newData)  return res.status(208).send({ message: " failed to signup" });
     return res.status(201).send({ message: "Success Register " });
     } catch (error) {
      console.log(error);
      return   res.status(408).send({ error:error});
    }
  }
  module.exports = SignUp ;