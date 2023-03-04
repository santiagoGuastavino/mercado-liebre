const {
  readJson,
  writeJson,
  lastId
} = require('./helper')

const productController = {
  index: (req, res) => { // GET .show all
    const articles = readJson('products.json')
    res.render('products/product-index', {
      title: 'Todos los productos',
      articles
    })
  },

  show: (req, res) => { // GET. show one
    const param = req.params.id
    const articles = readJson('products.json')
    articles.forEach(article => {
      if (param === article.id) {
        res.render('products/show', {
          title: article.name,
          article
        })
      };
    })
  },

  edit: (req, res) => { // GET. form w/ current data
    const param = req.params.id
    const articles = readJson('products.json')
    const article = articles.find(article => article.id === param)
    res.render('products/edit', {
      title: 'Modificar producto',
      article
    })
  },

  update: (req, res) => { // PUT. from form to existing entry
    const param = req.params.id
    const articles = readJson('products.json')
    articles.forEach(article => {
      if (param === article.id && req.file) {
        article.name = req.body.name
        article.price = req.body.price
        article.discount = req.body.discount
        article.category = req.body.category
        article.descripion = req.body.descripion
        article.image = req.file.filename
        writeJson('products.json', articles)
        res.redirect('/products')
      } else if (param === article.id && !req.file) {
        article.name = req.body.name
        article.price = req.body.price
        article.discount = req.body.discount
        article.category = req.body.category
        article.descripion = req.body.descripion
        writeJson('products.json', articles)
        res.redirect('/products')
      };
    })
  },

  create: (req, res) => { // GET. create form
    res.render('products/create', {
      title: 'Agregar producto'
    })
  },

  store: (req, res) => { // POST. from create form to db
    const articles = readJson('products.json')
    const article = {
      id: lastId(articles) + 1,
      ...req.body,
      image: req.file.filename
    }
    articles.push(article)
    writeJson('products.json', articles)
    res.redirect('/products')
  },

  destroy: (req, res) => { // DELETE. remove entry
    const param = req.params.id
    const articles = readJson('products.json')
    const newArticles = articles.filter(article => param !== article.id)
    writeJson('products.json', newArticles)
    res.redirect('/products')
  }
}

module.exports = productController
