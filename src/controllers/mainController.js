let { readJson } = require('./helper');

let articles = readJson('products.json');

let visited = articles.filter(article => {
    return article.category == 'visited';
});

let inSale = articles.filter(article => {
    return article.category == 'in-sale';
});

let mainController = {
    home: (req,res) => {
        let title = 'Mercado Liebre';
        res.render('index',{title,visited,inSale});
    },

    search: (req,res) => {
        // let title = 'Resultados de búsqueda';

        // let searchResults = [];
        // let searchInput = req.query.search;
        // for (i = 0 ; i < articles.length ; i++) {
        //     if (articles[i].name.includes(searchInput)) {
        //         searchResults.push(articles[i]);
        //     };
        // };

        // res.render('./products/product-results',{title});
        res.send('EN CONSTRUCCIÓN');
    }
}

module.exports = mainController;