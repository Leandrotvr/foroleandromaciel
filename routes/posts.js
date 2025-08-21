const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Obtener todos los posts
router.get('/', async (req, res) => {
    const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
    res.json(posts);
});

// Crear un nuevo post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;