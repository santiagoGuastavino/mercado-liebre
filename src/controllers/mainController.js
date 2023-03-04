const { readJson } = require('./helper')

const mainController = {
  home: (req, res) => {
    const articles = readJson('products.json')
    const visited = articles.filter(article => {
      return article.category === 'visited'
    })
    const inSale = articles.filter(article => {
      return article.category === 'in-sale'
    })
    res.render('index', {
      title: 'Mercado Liebre',
      visited,
      inSale
    })
  },

  search: (req, res) => {
    const articles = readJson('products.json')
    const searchResults = []
    const searchInput = req.query.search.toLocaleLowerCase()
    articles.forEach((el) => {
      const name = el.name.toLocaleLowerCase()
      if (name.includes(searchInput)) {
        searchResults.push(el)
      }
    })
    res.render('./search-results', {
      title: 'Resultados de búsqueda',
      searchResults
    })
  }
}

module.exports = mainController
