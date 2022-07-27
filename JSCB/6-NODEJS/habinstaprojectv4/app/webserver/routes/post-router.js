'use strict';

const express = require('express');
const multer = require('multer');
const checkAccountSession = require('../controllers/account/check-account-session');
const createPost = require('../controllers/post/create-post-controller');
const getPosts = require('../controllers/post/get-posts-controller');

const upload = multer();

const router = express.Router();

router.post('/posts', checkAccountSession, upload.single('image'), createPost);
router.get('/posts', checkAccountSession, getPosts);

module.exports = router;
