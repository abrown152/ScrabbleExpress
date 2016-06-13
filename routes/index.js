var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /scrabble/chart - shows the letter score chart
router.get('/scrabble/chart', ScrabbleController.chart)

// GET /scrabble/score - shows a form allowing a user to submit a word for scoring
router.get('/scrabble/score', ScrabbleController.score)

// POST /scrabble/score - processes the user input and renders either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" messagerouter.get('/party', Controller.getParty)
router.post('/scrabble/score', ScrabbleController.score)

// GET /scrabble/score/:name - A dynamic route that scores whatever word is passed into the :name portion of the dynamic route. Will render either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" message
router.get('/scrabble/score/:name', ScrabbleController.score)


module.exports = router;
