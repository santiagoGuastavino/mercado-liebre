let articles = require('../database/articles');

let mainController = {
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
        res.render('index',{'title':title,'relevantList':relevantList,'inOfferList':inOfferList});
    },
}

module.exports = mainController;