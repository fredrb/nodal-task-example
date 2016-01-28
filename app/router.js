module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const router = new Nodal.Router();

  const IndexController = Nodal.require('app/controllers/index_controller.js');
  const StaticController = Nodal.require('app/controllers/static_controller.js');
  const Error404Controller = Nodal.require('app/controllers/error/404_controller.js');

  /* generator: begin imports */

  const TasksController = Nodal.require('app/controllers/tasks_controller.js');
  const UsersController = Nodal.require('app/controllers/users_controller.js');
  const OrganizerTaskhandlerController = Nodal.require('app/controllers/organizer/taskhandler_controller.js');

  /* generator: end imports */

  router.route('/', IndexController);
  router.route('/static/*', StaticController);

  /* generator: begin routes */

  router.route('/tasks/:id', TasksController);
  router.route('/users/:id', UsersController);
  router.route('/organizer/taskhandler/:id/:operation', OrganizerTaskhandlerController);

  /* generator: end routes */

  router.route(/.*/, Error404Controller);

  return router;

})();
