'use strict';

var utils = require('../utils/writer.js');
var Notes = require('../service/NotesService');

module.exports.createNote = function createNote (req, res, next) {
  Notes.createNote(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllNotes = function getAllNotes (req, res, next) {
  Notes.getAllNotes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNoteById = function getNoteById (req, res, next) {
  var path = req.swagger.params['id'].value;
  Notes.getNoteById(path)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
