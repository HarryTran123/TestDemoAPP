const express = require('express');
const router = express.Router();

const admin_account = require('../app/controllers/Admin_Account');
const user_account = require('../app/controllers/User_Account');
const adminLoginPanel = require('../app/controllers/AdminLoginPanel');
const catalog = require('../app/controllers/Catalog');


//admin accounts [get]
router.get('/accounts/add', admin_account.add);
router.get('/accounts/admin-Accounts', admin_account.admin);
router.get('/logout', admin_account.logout);
router.get('/accounts/:id/delete', admin_account.delete);
router.get('/accounts/:id/edit', admin_account.edit);
router.get('/accounts/user-Accounts', user_account.user);
router.get('/account/change-password', adminLoginPanel.changpassword)

//admin accounts [post]
router.post('/accounts/save', admin_account.save);
router.post('/check', adminLoginPanel.check);
router.post('/accounts/:id/update', admin_account.update);
router.post('/account/change-password/update', adminLoginPanel.updatepassword)

//catalog [get]
router.get('/catalogs', catalog.show);
router.get('/catalogs/add', catalog.add)
router.get('/catalogs/:id/delete', catalog.delete);
router.get('/catalogs/:id/edit', catalog.edit)

//catalog [post]
router.post('/catalogs/save', catalog.save);
router.post('/catalogs/:id/update', catalog.update);



router.get('/', adminLoginPanel.login);


module.exports = router;