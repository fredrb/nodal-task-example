module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTask extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016012800034381;
    }

    up() {

      return [
        this.createTable("tasks", [
          {"name":"name","type":"string"},
          {"name":"description","type":"string"},
          {"name":"min_minutes","type":"int"},
          {"name":"prio","type":"int"},
          {"name":"user_id", "type":"int"},
          {"name":"start", "type":"int"}
        ])
      ];

    }

    down() {

      return [
        this.dropTable("tasks")
      ];

    }

  }

  return CreateTask;

})();
