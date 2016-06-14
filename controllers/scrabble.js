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
    res.render('scrabble/score')
  },

  postScore: function(req, res) {
    var locals = {}
    var word = req.body.title
    var scrabble = new ScrabbleLib()
    locals.word = word
    locals.score = (scrabble.score(word));
    res.render('scrabble/show', locals)
},

  getNameScore: function(req, res) {
  //   // GET /scrabble/score/:name - A dynamic route that scores whatever word is passed into the :name portion of the dynamic route. Will render either
  //   // a page showing the user submitted word and it's score or
  //   // in the case of something it can't score, an error page with an "unscorable word" message
  var locals = {}
  console.log(req.params)
  var word = req.params.name
  var scrabble = new ScrabbleLib()
  locals.word = word
  locals.score = scrabble.score(word)
  res.render('scrabble/show', locals)
  }

}

module.exports = ScrabbleController
