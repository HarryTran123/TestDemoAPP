const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');



const Client_ID = '661472906530-u8o6vqpk03lr855s41cu59v1le3b0cfq.apps.googleusercontent.com';
const Client_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const Refresh_TOKEN = '1//04kfVjomxNA9FCgYIARAAGAQSNwF-L9IrVXho5mccVs2pp2ejM-crR_qKjxsfdweYYWa0erQqdrz1rExQdD9r2r7nE3sCw3gmKE0';

const oauth2Client = new google.auth.OAuth2(
    Client_ID,
    Client_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: Refresh_TOKEN});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});
// const filePath = '/Users/doandung/Desktop/NodeDemoAPP/src/public/img/icon.jpg';

var globalVariable;

class googleapi {

    
    async uploadFile(filePath, imagename) {
        try {
            
            const response =  await drive.files.create({
                requestBody: {
                    name: imagename,                    
                },
                media: {
                    mimeType: 'image/jpg',
                    body: fs.createReadStream(filePath)
                },
            });

            await drive.permissions.create({
                fileId: response.data.id,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            });

            console.log(response.data);

            return response.data;

        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteFile(fileId) {
        try {
            const response = await drive.files.delete({
                fileId: fileId,
            });
            
            return response.data, response.status;
        } catch (error) {
            console.log(error.message);
        }
    }
}



module.exports = new googleapi();