const drive = require('../../utility/googleapi');
const {google} = require('googleapis');
const filePath = '/Users/doandung/Desktop/NodeDemoAPP/src/public/img/icon.jpg';
const cookieParser = require("cookie-parser");



class test {

    // [get]  /test
    test(req, res) {
        
        drive.uploadFile(filePath, 'test')
        .then(function(result) {
            const fileId = result.id;
            res.json({
                id: fileId,
                save: true
            })
        })
    }

}

module.exports = new test;