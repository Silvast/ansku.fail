import { Router } from 'express'

var router = Router()
var marked = require('marked')
var fs = require('fs')
var glob = require('glob-fs')({ gitignore: true })

var files = glob.readdirSync('./static/*.md', {})

// Mock Users
const blogs2 = [
  { title: 'Eka otsikko apista', description: 'Hihhuli' },
  { title: 'Toka otsikko apista', description: 'Hahhuli' }
]

const blogs = [
  { blogmd: ' # Marked in browser\n\nRendered by **marked**.' } ,
  { blogmd: ' # Toka mdotsikko\n\napista leipistä apista' }
]

/* GET users listing. */
router.get('/blogs', function (req, res, next) {
  res.json(blogs2)
})

/* List files, title, date */

/* GET user by ID. */
router.get('/blogs/:blogid', function (req, res, next) {
  var blogid = parseInt(req.params.blogid)
  if (blogid >= 0 && blogid < blogs.length) {
    /*res.send(marked(fs.readFileSync('./static/eka.md', 'utf-8'))) */
    res.send(marked(fs.readFileSync(files[0], 'utf-8')))
  } else {
    res.sendStatus(404)
  }
})

export default router
