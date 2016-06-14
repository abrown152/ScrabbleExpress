var ScrabbleLib = require('../lib/scrabble')

var ScrabbleController = {
  getChart: function(req, res) {
    // GET /scrabble/chart - shows the letter score chart
    var locals = {}
    var scrabble = new ScrabbleLib()
    locals.score_chart = scrabble.score_hash
    res.render('scrabble/chart', locals)
  },


  getScore: function(req, res) {
  //   // GET /scrabble/score - shows a form allowing a user to submit a word for scoring
    var locals = {}
    var scrabble = new ScrabbleLib()
    locals.word_score = 20
    res.render('scrabble/score', locals)

  },
  //
  postScore: function(req, res) {
  //   // POST /scrabble/score - processes the user input and renders either
  //   // a page showing the user submitted word and it's score or
  //   // in the case of something it can't score, an error page with an "unscorable word" messagerouter.get('/party', Controller.getParty)
  //   var locals = {}
},
  //
  getNameScore: function(req, res) {
  //   // GET /scrabble/score/:name - A dynamic route that scores whatever word is passed into the :name portion of the dynamic route. Will render either
  //   // a page showing the user submitted word and it's score or
  //   // in the case of something it can't score, an error page with an "unscorable word" message
  //   var locals = {}
  }

}

module.exports = ScrabbleController
