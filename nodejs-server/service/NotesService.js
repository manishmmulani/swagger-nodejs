'use strict';

const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/db.json')
const db = low(adapter)

/**
 * Add a note
 * 
 *
 * no response value expected for this operation
 **/
exports.createNote = function(reqBody) {
  return new Promise(function(resolve, reject) {
    const text = reqBody.text || "N/A"
    const notes = db.get('notes');
    const maxId = notes.map('id').max().value();
    console.log(text);
    console.log(maxId);
    resolve(notes.push({"id":maxId+1, "text": text}).write());
  });
}


/**
 * Get all Notes
 * 
 *
 * no response value expected for this operation
 **/
exports.getAllNotes = function() {
  return new Promise(function(resolve, reject) {
    resolve(db.get("notes").value());
  });
}


/**
 * Get note by id
 * 
 *
 * path Integer 
 * no response value expected for this operation
 **/
exports.getNoteById = function(path) {
  return new Promise(function(resolve, reject) {
    resolve(db.get('notes').filter({id : path}).value());
  });
}

