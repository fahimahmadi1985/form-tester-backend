var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', (req, res, next) => { 
  console.log(req.body.fullname)
  user = req.body;
  if (req.body.fullname && req.body.email && req.body.password) {
    res.status(200).render('confirm', { user: user.fullname });
    return;
  }

  res.status(423).render('reg_error');
 })
module.exports = router;
