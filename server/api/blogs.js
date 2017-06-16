import { Router } from 'express'

var router = Router()
var marked = require('marked')
var fs = require('fs')
var glob = require('glob-fs')({ gitignore: true })
var mkmeta = require('marked-metadata');

var files = glob.readdirSync('./blogposts/*.md', {})


/* Loop throug the folder "static" and get all the md files */
var metadatat = []
var content = []

for (var i = 0; i < files.length; i++) {
    var md = new mkmeta(files[i])
    md.defineTokens('---', '---')
    metadatat[i] = md.metadata()
    content[i] = md.markdown()
}

/* GET users listing. */
router.get('/blogs', function (req, res, next) {
  res.json(metadatat)
})


/* GET user by ID. */
router.get('/blogs/:blogid', function (req, res, next) {
  var blogid = parseInt(req.params.blogid)
  if (blogid >= 0 && blogid < files.length) {
      res.send(marked(content[blogid], 'utf-8'))
  } else {
    res.sendStatus(404)
  }
})

export default router
