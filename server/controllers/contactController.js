const Contact = require("../models/contactModel");
//route get
const getContact = async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ message: "error not found" });
  }
  res.status(200).json(contact);
};
const getContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
};
//route post
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    return res.json({ message: "Erreur, champ de texte non rempli" });
  }
  const alreadyExist = await Contact.exists({ email: email });
  console.log(alreadyExist);
  if (alreadyExist) {
    return res.json({
      message: "Ce contact existe déjà",
    });
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
};
//Route put (update)
const updateContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404);
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
};
//route delete
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404);
  }

  await Contact.findByIdAndDelete(req.params.id);
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
};
