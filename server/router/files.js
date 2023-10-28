const express = require('express');
const jwtAuth = require('../middleware/jwtAuth');
const {addFile} = require('../controller/file');
const {getCourse,getName,getPage,getData} = require('../controller/file');
const {getBranch,courseAuth} = require('../middleware/getBranch');
const fileRoute = express.Router();

fileRoute.post('/upload', jwtAuth, addFile)
fileRoute.get('/course', getBranch , getCourse)
fileRoute.post('/name',getName)
fileRoute.get('/page',courseAuth,getPage)
fileRoute.post('/data',getData)
module.exports = fileRoute;