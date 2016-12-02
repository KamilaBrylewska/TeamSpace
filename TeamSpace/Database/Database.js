var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('notes.db');
var Note = require("./Models.js");

var Database = {
    
    initialize : function() {
       rows = db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='notes'",
       function (err, rows) {
            if (err !== null) {
                console.log(err);
            }
            else if (rows === undefined) {
                db.run('CREATE TABLE "notes" ' +
           '("id" INTEGER PRIMARY KEY AUTOINCREMENT, ' +
           '"name" VARCHAR(255), ' +
           '"mess" VARCHAR(255), ' +
           '"author" VARCHAR(255))', function (err) {
                    if (err !== null) {
                        console.log(err);
                    }
                    else {
                        console.log("SQL Table  initialized.");
                    }
                });
            }
            else {
                console.log("SQL Table 'notes' already initialized.");
            }
        });
      
    },
    addNote : function (array) {
        var note = array;
        db.run('INSERT into notes (name, mess, author) values ("' + note.title +'","' + note.content +'", "' + note.author +'")');
       
    },
    deleteNote : function (id) {
        console.log(id);
        db.run('DELETE FROM notes where id=' + id);
      
    },
    getAllNotes: function (res) {
        notes = [];
        
        db.serialize(function () {
            db.each('SELECT id, name, mess, author from notes', function (err, row) {
                var n = new Note();
                console.log(row.id);
                n.id = row.id;
                n.title = row.name;
                n.content = row.mess;
                n.author = row.author;
                notes.push(n);
            }, function () {

                res.render('index', { notes: notes });
         
            })
        })

        
    },

    BodyToNote: function (body) {
        var note = new Note();
        note.title = body.title;
        note.content = body.content;
        note.author = body.author;
        return note;
    }
    
}


module.exports = Database;