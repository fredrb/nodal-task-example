module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Task = Nodal.require('app/models/task.js');

  class OrganizerTaskhandlerController extends Nodal.Controller {

    show() {
      Task.find(this.params.route.id, (err, model) => {
        if (err) {
          return this.render(err);
        }

        model.__run__(this.params.route.operation, "635895397000000000", (err) => {
          this.render(err || "Started this Task");
        });
      });
    }

    get() {
      this.render('Task handler controller');
    }

    post() {

      this.render();

    }

    put() {

      this.render();

    }

    del() {

      this.render();

    }

  }

  return OrganizerTaskhandlerController;

})();
