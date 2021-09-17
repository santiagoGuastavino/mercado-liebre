let {
    readJson,
    writeJson,
    lastId,
    paramFinder
} = require('./helper');

let productController = {
    index: (req,res) => {   // GET .show all
        let articles = readJson('products.json');
        res.render('products/product-index', {
            title: 'Todos los productos',
            articles
        });
    },

    show: (req,res) => {    // GET. show one
        let param = req.params.id;
        let articles = readJson('products.json');
        articles.forEach(article => {
            if (param == article.id) {
                res.render('products/show', {
                    title: article.name,
                    article
                });
            };
        });
    },

    edit: (req,res) => {    // GET. form w/ current data
        let param = req.params.id;
        let articles = readJson('products.json');
        let article = articles.find(article => article.id == param);
        res.render('products/edit', {
            title: 'Modificar producto',
            article
        });
    },
    
    update: (req,res) => {  // PUT. from form to existing entry
        let param = req.params.id;
        let articles = readJson('products.json');
        articles.forEach(article => {
            if (param == article.id && req.file) {
                article.name = req.body.name;
                article.price = req.body.price;
                article.discount = req.body.discount;
                article.category = req.body.category;
                article.descripion = req.body.descripion;
                article.image = req.file.filename,
                writeJson('products.json', articles);
                res.redirect('/products');
            } else if (param == article.id && !req.file) {
                article.name = req.body.name;
                article.price = req.body.price;
                article.discount = req.body.discount;
                article.category = req.body.category;
                article.descripion = req.body.descripion;
                writeJson('products.json', articles);
                res.redirect('/products');
            };
        });
    },

    create: (req,res) => {  // GET. create form
        res.render('products/create', {
            title: 'Agregar producto'
        });
    },

    store: (req,res) => {   // POST. from create form to db
        let articles = readJson('products.json');
        let article = {
            id: lastId(articles) + 1,
            ...req.body,
            image: req.file.filename,
        };
        articles.push(article);
        writeJson('products.json', articles);
        res.redirect('/products');
    },

    destroy: (req,res) => {     // DELETE. remove entry
        let param = req.params.id;
        let articles = readJson('products.json');
        let newArticles = articles.filter(article => param != article.id);
        writeJson('products.json',newArticles);
        res.redirect('/products');
    },
};

module.exports = productController;