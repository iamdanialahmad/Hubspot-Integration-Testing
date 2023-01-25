const express = require("express");
const app = express();
const dotenv = require("dotenv");
const {createContact, readContact, updateContact, deleteContact, readAllContact} = require('./Hubspot')

// CRUD Operations

// Contact
readAllContact().then(res => {
    console.log(res)
})

//READ
readContact('201').then(res => {
    console.log(res)
})

//CREATE
const properties = {
    "company": "test2Contact",
    "email": "test2@gmail.com",
    "firstname": "test2",
    "lastname": "test2",
  };

createContact(properties)

//UPDATE
const updateproperties = {
    "company": "UpdatedNameTest2",
    "email": "test2@gmail.com",
    "firstname": "test2update",
    "lastname": "test2",
  };


updateContact('251', updateproperties)


//DELETE or ARCHIVE
deleteContact('201')

readAllContact()



// Companies

