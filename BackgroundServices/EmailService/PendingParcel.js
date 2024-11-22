const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../models/User");
const Parcel = require("../models/Parcel");

dotenv.config();

const SendParcelPendingEmail = async () => {
  const parcels = await Parcel.find({ status: 0 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {ejs.renderFile(
        "templates/deliveredparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageOption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "Your parcel is being processed. ",
            html: data,
          };

          try {
            await sendMail(messageOption);
          } catch (error) {
            console.log(error);
          }
        }
      );

      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageOption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "You ve got a parcel",
            html: data,
          };

          try {
            await sendMail(messageOption);
            await Parcel.findByIdUpdate(parcel._id,{$set: {status:1}})
          } catch (error) {
            console.log(error);
            
          }
        }
      );
    }
  }
}

module.exports = { SendParcelPendingEmail };
