const express = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find();
    result.toArray().then((contacts) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
    });
}

const getContactById = async (req, res, next) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: contactId});
    result.toArray().then((contact) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contact);
    });
}

module.exports = {
    getAllContacts,
    getContactById
};