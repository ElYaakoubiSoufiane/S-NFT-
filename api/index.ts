require("dotenv").config({ path: './.env' });
import express, { Request, Response, Router } from 'express';
// import cors from "cors";
const cors = require("cors");
const app = express();
app.use(express.static("../../Frontend"))
app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// const stripe = require('stripe')('sk_test_51Ob3OODYnDpmKN8R1k7V6163qlEHFmQaVRTXXgNdTJ0oN89kQByj8cij95mG9p44G8Pj4wlYFXVjciqKHXAm1Zoo00qa4uL0GD');
// // This example sets up an endpoint using the Express framework.
// // Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// try {
//   mongoose.connect(process.env.DB_URL, {}).then(() => {
//     app.listen(
//       process.env.PORT || 5000, () => { console.log("Listening on port ${process.env.PORT}...") }
//     );
//   });

//   app.get("/", (req, res) => {
//     res.json("hzllo");
//   })
//   console.log("Connected to database successfully");
// } catch (error) {
//   console.log(error);
//   console.log("Could not connect database!");
// }



// app.post('/createPaymentIntent', async (req, res) => {
//   // Use an existing Customer ID if this is a returning customer.
//   const customer = await stripe.customers.create();
//   const ephemeralKey = await stripe.ephemeralKeys.create(
//     { customer: customer.id },
//     { apiVersion: '2023-10-16' }
//   );
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1099,
//     currency: 'eur',
//     customer: customer.id,
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.json({
//     paymentIntent: paymentIntent.client_secret,
//     ephemeralKey: ephemeralKey.secret,
//     customer: customer.id,
//     publishableKey: 'pk_test_51Ob3OODYnDpmKN8R8iAetLdazqre5NAGycmNADOTVCFROkUY7oqGQ1gdLrP5h4lEMfytOsnxq2uQXnubpJdmFKQA005diGufQc'
//   });
// });
// process.on("unhandledRejection", (err) => {
//   console.log(err);
//   server.close(() => {
//     process.exit(1)
//   })

// })
app.listen(
  process.env.PORT || 5000, () => { console.log("Listening on port ${process.env.PORT}...") }
);

app.get("/", (req, res) => {

  res.send("you can GET")

})
const stripe = require('stripe')('sk_test_51Ob3OODYnDpmKN8R1k7V6163qlEHFmQaVRTXXgNdTJ0oN89kQByj8cij95mG9p44G8Pj4wlYFXVjciqKHXAm1Zoo00qa4uL0GD');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/createPaymentIntent', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2023-10-16' }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51Ob3OODYnDpmKN8R8iAetLdazqre5NAGycmNADOTVCFROkUY7oqGQ1gdLrP5h4lEMfytOsnxq2uQXnubpJdmFKQA005diGufQc'
  });
});