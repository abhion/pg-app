const express = require('express');
const router = express.Router();

const pgOwnerController = require('../app/controllers/pgOwnerController');
const buildingController = require('../app/controllers/buildingController');
const roomController = require('../app/controllers/roomController');
const tenantController = require('../app/controllers/tenantController');

router.post('/pgowner',  pgOwnerController.create);

router.get('/buildings', buildingController.list)
router.get('/buildings/:id', buildingController.show)
router.post('/buildings', buildingController.create)
router.put('/buildings/:id', buildingController.update)
// router.delete('/buildings/:id', buildingController.delete)

router.get('/rooms', roomController.list)
router.get('/rooms/:id', roomController.show)
router.post('/rooms', roomController.create)
router.put('/rooms/:id', roomController.update)
// router.delete('/rooms/:id', roomController.delete)

router.get('/tenant', tenantController.list)
router.get('/tenant/:id', tenantController.show)
router.post('/tenant', tenantController.create)
router.put('/tenant/:id', tenantController.update)
router.delete('/tenant/:id', tenantController.delete)

module.exports = router;

