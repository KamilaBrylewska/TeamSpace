var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Database = require("../Database/Database.js");

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/* GET home page. */

router.get('/', function (req, res) {
   
   var notes = Database.getAllNotes(res);
 
});

router.post('/add', function (req, res) {   
    var note = Database.BodyToNote(req.body);
    Database.addNote(note);
    res.redirect('/');
});
router.get('/delete/:id', function (req, res) {
    Database.deleteNote(req.params.id);
    res.redirect('/');
});
router.get('/error', function (req, res) {
    res.render('error', { title: 'Express' });
});
module.exports = router;