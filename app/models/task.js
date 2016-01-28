module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class Task extends Nodal.Model {
    start(startime, callback) {

      try {
        debugger;
        super.set('start', startime);
        super.save();
      }
      catch(err) {
        callback(err);
      }

      callback(null);
    }

    __run__(command, params, callback) {
      let commands = {
        "start" : this.start
      }

      commands[command](params, callback);
    }

  }

  Task.setDatabase(Nodal.require('db/main.js'));
  Task.setSchema(Nodal.my.Schema.models.Task);

  Task.validates('name', 'First letter must be capital letter',
    (v) => v != null && v[0] == v[0].toUpperCase());

  Task.joinsTo(User, { multiple : true });

  return Task;

})();
