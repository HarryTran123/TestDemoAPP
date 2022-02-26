
class SiteController {
    
    //[get] /
    home(req, res) {
        res.render('home');
    }

    //[get] /about
    about(req, res) {
        res.send('New Detail !!');
    }

}

module.exports = new SiteController;