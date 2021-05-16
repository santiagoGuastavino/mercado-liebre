let articles = require('../database/articles');

let mainController = {
    articles,
    
    renderHome: (req,res) => {
        let title = 'Mercado Liebre';
        let relevantList = [];
        for (i = 0 ; i < articles.length ; i++) {
            if (articles[i].relevant == true) {
                relevantList.push(articles[i]);
            };
        };
        let inOfferList = [];
        for (i = 0 ; i < articles.length ; i++) {
            if (articles[i].inOffer == true) {
                inOfferList.push(articles[i]);
            };
        };
        res.render('index',{'title':title,'articles':articles,'relevantList':relevantList,'inOfferList':inOfferList});
    },

    search: (req,res) => {
        let title = 'Resultados de búsqueda';
        let searchResults = [];
        let searchInput = req.query.search;
        for (i = 0 ; i < articles.length ; i++) {
            if (articles[i].name.includes(searchInput)) {
                searchResults.push(articles[i]);
            }
        }

        res.render('./products/product-results',{'title':title,'searchResults':searchResults});
    }
}

module.exports = mainController;