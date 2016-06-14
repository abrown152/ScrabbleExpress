var ScrabbleLib = require('../lib/scrabble')

var ScrabbleController = {
  getChart: function(req, res) {
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
