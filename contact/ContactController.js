// ContactController.js
var express = require('express');
    router = express.Router(),
    bodyParser = require('body-parser'),
    Contact = require('./Contact');

router.use(bodyParser.urlencoded({ extended: true }));

// CREATES A NEW CONTACT
router.post('/', function (req, res) {
    Contact.create({
            name : req.body.name,
            phone : req.body.phone,
            address : req.body.address
        },
        function (err, contact) {
            if (err) return res.status(500).send("There was a problem adding the contact to the database.");
            res.status(200).send(contact);
        });
});

// RETURNS ALL THE CONTACTS IN THE DATABASE
router.get('/', function (req, res) {
    Contact.find({}, function (err, contacts) {
        if (err) return res.status(500).send("There was a problem finding the contacts.");
        res.status(200).send(contacts);
    });
});

// GET A SINGLE CONTACT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) return res.status(500).send("There was a problem finding the contact.");
        if (!contact) return res.status(404).send("No contact found.");
        res.status(200).send(contact);
    });
});

// DELETE A CONTACT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err, contact) {
        if (err) return res.status(500).send("There was a problem deleting the contact.");
        res.status(200).send("Contact "+ contact.name +" was deleted.");
    });
});

// UPDATE A SINGLE CONTACT IN THE DATABASE
router.put('/:id', function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, contact) {
        if (err) return res.status(500).send("There was a problem updating the contact.");
        res.status(200).send(contact);
    });
});

module.exports = router;
