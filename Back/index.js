/*
 * Require
 */
const express = require('express');
const { Server } = require('http');
const mongoose = require('mongoose');
const socket = require('socket.io');
// const bcrypt = require('bcrypt');
const UserModel = require('./models/Users');
const NoteModel = require('./models/Notes');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);


/**
 * MongoDB
 */

// Connexion a MongoDB sur la DB "astronote"
mongoose.connect('mongodb://localhost/astronote', (err) => {
  if (err) {
    throw err;
  }
});

/**
 * Socket.io
 */
io.on('connection', (socket) => {
  let MinTimeBeforeMatch = null;

  console.log('Connected !', socket.id);

  // now you can access user info through socket.request.user
  // socket.request.user.logged_in will be set to true if the user was authenticated
  socket.emit('success', {
    message: 'success logged in!',
    user: socket.request.user,
  });

  socket.on('send_login', ({ email, password }) => {
    UserModel.findOne({ email })
      .exec((err, user) => {
        if (err) throw err;
        else if (user.password === password) {
          socket.emit('success_login', user);
        }
        else {
          socket.emit('error_login');
        }
      })
  })

  socket.on('create_note', ({ author, title, content }) => {
    // On crée une instance du Model Note
    const note = new NoteModel();
    // On défini ces propriétés
    note.author = author;
    note.title = title;
    note.content = content;

    // On le sauvegarde dans MongoDB !
    note.save((err) => {
      if (err) {
        throw err;
      }
      NoteModel.find({}, (error, notes) => {
        if (error) throw error;
        io.emit('set_notes', notes);
      })
    });
  })

  socket.on('get_notes', () => {
    NoteModel.find({}, (error, notes) => {
      if (error) throw error;
      io.emit('set_notes', notes);
    })
  })

  socket.on('delete_note', ({ id }) => {
    NoteModel.deleteOne({ _id: id }, (err, test) => {
      if (err) throw err;
      NoteModel.find({}, (error, notes) => {
        if (error) throw error;
        io.emit('set_notes', notes);
      })
    })
  })

  socket.on('update_note', ({ id, newNote }) => {
    NoteModel.findOneAndUpdate({ _id: id }, { 
      author: newNote.author,
      title: newNote.title,
      content: newNote.content,
     }, (err) => {
       if (err) throw err;
       NoteModel.find({}, (error, notes) => {
         if (error) throw error;
         io.emit('set_notes', notes);
       })
     })
  })
});

/*
 * Server
 */
server.listen(3001, () => {
  console.log('listening on *:3001');
});
