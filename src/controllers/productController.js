let articles = require('../database/articles');

let productController = {
    renderArticles: (req,res) => {
        res.render('./products/article',{'articles':articles});
    }
}

module.exports = productController;