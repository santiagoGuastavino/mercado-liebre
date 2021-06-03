let { readJson, writeJson, lastId } = require('./helper');
let title = '';

let articles = readJson('products.json');

let productController = {
    // index (view all items)
    index: (req,res) => {
        title = 'Todos los productos'
        res.render('products/product-index', {title,articles});
    },

    // show (view one detail)
    show: (req,res) => {
        let productId = req.params.id;
        articles.forEach(article => {
            if (productId == article.id) {
                res.render('products/show', {'title':article.name,article})
            };
        });
    },

    // edit (view current)

    // update (post put)

    // create (view empty)
    create: (req,res) => {
        title = 'Agregar producto';
        res.render('products/create', {title});
    },

    // store (post)
    store: (req,res) => {
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