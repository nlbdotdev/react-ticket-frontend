var express = require('express');
var router = express.Router();
const { createTask } = require('./controller/taskController') 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-task', createTask)

module.exports = router;
