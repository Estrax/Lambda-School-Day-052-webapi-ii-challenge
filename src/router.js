const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.route('/')
    .get(async (req, res) => {
        try {
            const posts = await db.find();
            return res.json(posts);
        } catch(e) {
            return res.status(500).json({ error: "The posts information could not be retrieved." });
        }
    })
    .post(async (req, res) => {
        try {
            const {title, contents} = req.body;
            if(!title || !contents) return res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
            const newPost = await db.insert({
                title,
                contents,
            })
            return res.status(201).json(newPost);
        } catch(e) {
            return res.status(500).json({ error: "There was an error while saving the post to the database" })
        }
    });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const post = await db.findById(req.params.id);
            if(post.length === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json(post[0]);
        } catch(e) {
            return res.status(500).json({ error: "The post information could not be retrieved." });
        }
    })
    .put(async (req, res) => {
        try {
            const {title, contents} = req.body;
            if(!title || !contents) return res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
            const postUpdated = await db.update(req.params.id, { title, contents })
            if(postUpdated === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json(postUpdated);
        } catch(e) {
            return res.status(500).json({ error: "The post information could not be modified." });
        }
    })
    .delete(async (req, res) => {
        try {
            const deletedUser = await db.remove(req.params.id);
            if(deletedUser === 0) return res.status(404).json({ message: "The post with the specified ID does not exist." });
            return res.status(200).json({...post, removed: true});
        } catch(e) {
            return res.status(500).json({ error: "The post could not be removed" })
        }
    });

module.exports = router;