//exercice 1 :
/* Vous allez créer un serveur express JS qui utilisera le port 5000
et utilisera les packages suivants : jwt, dotenv, express

Vous allez créer 5 routes correspondant aux 5 méthodes suivantes
get /contact
post /contact
update /contact/:id
delete /contact/:id
get /contact/:id
*/
const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");

const connectDB = require("./database/dbConnection");
connectDB();
app.use(express.json());

const corsOption = {
  origin: "https://contact-frontend-gub8.onrender.com",
};
app.use(cors(corsOption));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://contact-frontend-gub8.onrender.com"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.listen(port, () => {
  console.log("Listening on port : " + port);
});
