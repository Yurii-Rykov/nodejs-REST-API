const express = require('express')
const {ctrlWrapper} = require('../../helpers/')

const router = express.Router()

const { getAll, getById, createContact, deleteId, updateContact,  } = require('../../controlers');
const {validateBody, authenticate} = require('../../middlewares');
const {schemas} = require('../../models/contact');

router.get('/', authenticate, ctrlWrapper(getAll))

router.get('/:id', authenticate, ctrlWrapper(getById));

router.post('/', authenticate, validateBody(schemas.addShema), ctrlWrapper(createContact))

router.delete('/:id', authenticate, ctrlWrapper(deleteId))

router.put('/:id', authenticate, validateBody(schemas.updateShema), ctrlWrapper(updateContact))

router.put('/:id/favorite', authenticate, validateBody(schemas.favoriteShema), ctrlWrapper(updateContact))

module.exports = router
