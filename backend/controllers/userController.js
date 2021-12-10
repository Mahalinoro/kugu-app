const express = require('express');
const mongooose = require('mongoose');
const User = require('./models/user');


exports.createUser = (req, res) => {
    const{firstName, lastName} = req.body;
}