const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const NewsLetter = require('../models/newsletter');
const Contact = require('../models/contact');
AdminBro.registerAdapter(AdminBroMongoose)

const express = require('express');
const app = express();

const adminBro = new AdminBro({
    databases: [],
    rootPath: '/admin',
    branding: {
        logo: 'https://firebasestorage.googleapis.com/v0/b/mudmoulds-1e25c.appspot.com/o/mudmoulds%20final%20logo%20blk.png?alt=media&token=729ea8a5-71ef-447b-bc49-074291709885',
        companyName: 'Mud Moulds',
        softwareBrothers: false
    },
    resources: [
        { resource: NewsLetter },
        { resource: Contact }
    ]

});

const router = AdminBroExpress.buildRouter(adminBro);



module.exports = router;