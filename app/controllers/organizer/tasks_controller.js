module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Task = Nodal.require('app/models/task.js');

  class OrganizerTasksController extends Nodal.Controller {

    index() {

      Task.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Task.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Task.create(this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Task.update(this.params.route.id, this.params.body.data, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Task.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return OrganizerTasksController;

})();
