let { readJson, writeJson, lastId } = require('./helper');
let title = '';
let articles = readJson('products.json');

let productController = {
    index: (req,res) => {   // show all
        title = 'Todos los productos';
        res.render('products/product-index', {title,articles});
    },

    show: (req,res) => {    // show one
        let productId = req.params.id;
        articles.forEach(article => {
            if (productId == article.id) {
                res.render('products/show', {'title':article.name,article})
            };
        });
    },

    edit: (req,res) => {    // form w/ current data
        title = 'Modificar producto';
        let productId = req.params.id;
        let article = articles.find(article => article.id == productId);
        res.render('products/edit',{title,article});
    },
    
    update: (req,res) => {  // put, from form to existing entry
        article = {
            ...req.body
        }
        articles.push(article);
        writeJson('products.json',articles);
        res.redirect('/products');
    },  

    create: (req,res) => {  // create form
        title = 'Agregar producto';
        res.render('products/create', {title});
    },

    store: (req,res) => {   // from create form to db
        let article = {
            id: lastId(articles) + 1,
            ...req.body,
        };
        articles.push(article);
        writeJson('products.json',articles);
        res.redirect('/products');
    },  
};

module.exports = productController;

// destroy (post delete)