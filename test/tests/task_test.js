module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class TaskTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should do something', done => {

        expect(null).to.not.exist;
        done();

      });

    }

  }

  return TaskTest;

})();
