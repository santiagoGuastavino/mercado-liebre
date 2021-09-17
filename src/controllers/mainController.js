let { readJson } = require('./helper');

let mainController = {
    home: (req,res) => {
        let articles = readJson('products.json');
        let visited = articles.filter(article => {
            return article.category == 'visited';
        });
        let inSale = articles.filter(article => {
            return article.category == 'in-sale';
        });
        res.render('index', {
            title: 'Mercado Liebre',
            visited,
            inSale
        });
    },

    search: (req,res) => {
        let articles = readJson('products.json');
        let searchResults = [];
        let searchInput = req.query.search.toUpperCase();
        res.render('./search-results', {
            title: 'Resultados de búsqueda',
            searchResults
        });
    }
};

module.exports = mainController;