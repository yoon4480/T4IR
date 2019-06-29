var express = require('express');
var router = express.Router();

/* POST users listing. */
router.get('/', function(req, res, next) {
  if(req.session.email) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  }
});

module.exports = router;