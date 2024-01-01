const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog');

router.get('/blogs', blogController.getAllBlogs);
router.post('/blogs/:blogId/like', blogController.likeBlog);
router.post('/blogs/:blogId/share', blogController.shareBlog);
router.post('/blogs/:blogId/comment', blogController.commentOnBlog);

exports.routes = router;
