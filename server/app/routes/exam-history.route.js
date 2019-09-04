const express = require('express');
const router = express.Router();

const { examHistoryController: controller } = require('../controllers');
const { authMiddleware: auth } = require('../middlewares');

router.get('/',
  auth.requireRole([ 'admin', 'teacher' ]),
  controller.findAll
);

router.get('/enrollments', controller.findEnrolledExams);

router.patch('/start/:_id', controller.start);

router.get('/:_id', controller.findById);

router.put('/:_id', controller.update);

router.delete('/:_id', controller.remove);

module.exports = router;
