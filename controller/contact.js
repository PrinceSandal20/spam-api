const User = require('../models/user');
const Contact = require('../models/contact');

const addContact = async (req, res) => {
  const { name, phoneNumber } = req.body;

  try {
    const newContact = new Contact({
      name,
      phoneNumber,
    });

    const user = await User.findById(req.user.id);

    user.contacts.push(newContact);
    await user.save();

    res.json(newContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getContacts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('contacts');
    res.json(user.contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteContact = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Remove contact
    user.contacts = user.contacts.filter(
      (contact) => contact.id !== req.params.contactId
    );

    await user.save();

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  addContact,
  getContacts,
  deleteContact,
};
