
class FormController {
    
    //[get] /form
    index(req, res) {
        res.render('form');
    }

    //[get] /form/:slug
    show(req, res) {
        res.send('New Detail !!');
    }

}

module.exports = new FormController;