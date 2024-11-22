const nodemail = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function createTransporter (config){
    const transporter = nodemailer.createTransporter((config))
    return transporter;
}

let configurations = {
    service: "gmail",
    host:"smtp.gmail.com",
    port:587,
    requireTLS:true,
    auth:{
       user: process.env.EMAIL,
       pass: process.env.PASSWARD
    },
};

const sendMail = async(messageoption) =>{

    const transporter = await createTransporter(configurations);
    await transporter.verify();I
    await transporter.sendMail(messageoption, (err, info) =>{
       if(err){
         console.log(err)
       }

       console.log(info.response);
    })
};


module.exports=sendMail;