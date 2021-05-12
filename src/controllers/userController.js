let users = [
    'Juan',
    'Pedro',
    'Darío',
    'Santiago',
    'José',
    'Simón',
    'Alan'
];

let countries = [
    'Argentina',
    'Brasil',
    'Colombia',
    'Ecuador',
    'Uruguay',
    'Chile',
    'Bolivia',
    'Perú',
    'Paraguay'
];

let userController = {
    login: (req,res) => res.render('./users/login'),
    register: (req,res) => res.render('./users/register'),
    list: function (req,res) {
        res.render('./users/list',{'users':users,'countries':countries});
    },
};

module.exports = userController;