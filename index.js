const express = require('express');
const cors = require('cors');
const fs = require('fs');
const handlers = require('D:/VSrepo/Vladick/handlers/handlers')

const whitelist = ['http://localhost:4000'];

function originFunction(origin, callback) {
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    }
    else {
        callback(new Error('Not allowed by CORS'));
    }
}
const corsOptions = {
    origin:originFunction,
}

const app = express();
app.use(cors(corsOptions));

const port = 4000;

const dataPath = __dirname + '\\data';

app.get('/html1', (req, res) => {
    res.sendFile(__dirname + '\\assets\\pages\\page1.html');
})
app.get('/html2', (req, res) => {
    res.sendFile(__dirname + '\\assets\\pages\\page2.html');
})
app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(__dirname + '\\assets\\' + filename);
})
app.get('/objects/:type/:id', (req, res) => {
    const { type, id } = req.params;
    const objects = JSON.parse(fs.readFileSync(dataPath + '\\'+ type +'.json', 'utf-8'));
    const object = objects.find(x => x.id == id);
    if (object) {
        res.json(object);
    } else {
        res.status(404);
    }
})
app.get('/objects/:type', (req, res) => {
    const type = req.params.type;
    const objects = JSON.parse(fs.readFileSync(dataPath + '\\'+ type +'.json', 'utf-8'));
    res.json(objects);
})
app.get('/objects', (req, res) => {
    const objects = {
        ducks: JSON.parse(fs.readFileSync(dataPath + '\\ducks.json', 'utf-8')),
        hens: JSON.parse(fs.readFileSync(dataPath + '\\hens.json', 'utf-8')),
        geese: JSON.parse(fs.readFileSync(dataPath + '\\geese.json', 'utf-8')),
     };
     res.json(objects);
})
app.get('/info', (req, res) => {
    res.sendFile(__dirname + '\\documentation.json');
})

app.listen(port, () => {
    
})