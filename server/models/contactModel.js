const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Veuillez ajouter le nom de votre contact"],
  },
  email: {
    type: String,
    required: [true, "Veuillez ajouter le mail du contact"],
  },
  phone: {
    type: String,
    required: [true, "Veuillez ajouter le numéro du contact"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
