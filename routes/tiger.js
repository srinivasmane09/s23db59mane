var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tiger', { title: 'Search Results tiger' });
});
var express = require('express');
const tiger_controlers= require('../controllers/tiger');
var router = express.Router();
/* GET tigers */
router.get('/', tiger_controlers.tiger_view_all_Page );
module.exports = router;