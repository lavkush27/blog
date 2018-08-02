var express = require('express');
var app = express();
var router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var blogPost = require('./src/DataSchema/schema')
var port = 7000
app.use(express.static('./build'))
app.use(express.static('static'))
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/blogData', { useNewUrlParser: true });
app.get('/', function (req, res) {
    res.render("index");
});
app.listen(port, function () {
    console.log('running at localhost: ' + port);
});

app.post('/api/blogs', function (req, res) {
    blogPost.create(req.body).then(function (data) {
        res.json(data);
    })
})

app.get('/api/blogs', function (req, res) {
    blogPost.find({}).then(function (data) {
        res.json(data)
    })
})


app.delete('/api/blogs/:id', function (req, res) {
    let id = req.params.id
    blogPost.remove({ _id: id }).then(function (data) {
        res.json(data)
    })
})

app.put('/api/blogs/:id', function (req, res) {
    let id = req.params.id
    console.log(id);
    console.log(req.body.title + "----" + req.body.text);
    blogPost.findByIdAndUpdate(id, {
        value: req.body.text, title: req.body.title
    }).then(function (data) {
        console.log(data);
        res.send(data);
    })
})