let { readJson, writeJson, lastId } = require('./helper');
let title = '';
let articles = readJson('products.json');

let productController = {
    index: (req,res) => {   // GET .show all
        title = 'Todos los productos';
        res.render('products/product-index', {title,articles});
    },

    show: (req,res) => {    // GET. show one
        let productId = req.params.id;
        articles.forEach(article => {
            if (productId == article.id) {
                res.render('products/show', {'title':article.name,article})
            };
        });
    },

    edit: (req,res) => {    // GET. form w/ current data
        title = 'Modificar producto';
        let productId = req.params.id;
        let article = articles.find(article => article.id == productId);
        res.render('products/edit',{title,article});
    },
    
    update: (req,res) => {  // PUT. from form to existing entry
        let productId = req.params.id;
        articles.forEach(article => {
            if (productId == article.id) {
                article.name = req.body.name;
                article.price = req.body.price;
                article.discount = req.body.discount;
                article.category = req.body.category;
                article.descripion = req.body.descripion;
                article.image = req.file.filename,
                writeJson('products.json',articles);
                res.redirect('/products');
            };
        });
    },

    create: (req,res) => {  // GET. create form
        title = 'Agregar producto';
        res.render('products/create', {title});
    },

    store: (req,res) => {   // POST. from create form to db
        let article = {
            id: lastId(articles) + 1,
            ...req.body,
            image: req.file.filename,
        };
        articles.push(article);
        writeJson('products.json',articles);
        res.redirect('/products');
    },

    destroy: (req,res) => {     // DELETE. remove entry
        let productId = req.params.id;
        let newArticles = articles.filter(article => productId != article.id);
        writeJson('products.json',newArticles);
        res.redirect('/products');
    },
};

module.exports = productController;