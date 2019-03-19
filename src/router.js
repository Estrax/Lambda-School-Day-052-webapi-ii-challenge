const express = require('express');
const router = express.Router();
const db = require('../data/db');

router.route('/')
    .get((req, res) => {
        db
            .find()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json({ error: "The posts information could not be retrieved." }));
    })
    .post((req, res) => {
        const {title, contents} = req.body;
        if(!title || !contents) res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
        db
            .insert({
                title,
                contents,
                created_at: new Date().toString(),
                updated_at: new Date().toString()
            })
            .then(response => res.status(201).json(response))
            .catch(err => res.status(500).json({ error: "There was an error while saving the post to the database" }));
    });

router.route('/:id')
    .get((req, res) => {
        db
            .findById(req.params.id)
            .then(response => {
                if(response.length === 0) res.status(404).json({ message: "The post with the specified ID does not exist." });
                res.status(200).json(response);
            })
            .catch(err => res.status(500).json({ error: "The post information could not be retrieved." }));
    })
    .put((req, res) => {
        const {title, contents} = req.body;
        if(!title || !contents) res.status(400).json({ errorMessage: "Please provide title and contents for the post." });

        db
            .update(req.params.id, { title, contents, updated_at: new Date().toString() })
            .then(response => {
                if(response === 0) res.status(404).json({ message: "The post with the specified ID does not exist." });
                db
                    .findById(req.params.id)
                    .then(response => {
                        if(response.length === 0) res.status(404).json({ message: "The post with the specified ID does not exist." });
                        res.status(200).json(response);
                    })
                    .catch(err => res.status(500).json({ error: "The post information could not be retrieved." }));
            })
            .catch(err => res.status(500).json({ error: "The post information could not be modified." }));
    })
    .delete((req, res) => {
        db
            .findById(req.params.id)
            .then(post => {
                if(post.length === 0) res.status(404).json({ message: "The post with the specified ID does not exist." });
                db
                    .remove(req.params.id)
                    .then(response => {
                        if(response === 0) res.status(404).json({ message: "The post with the specified ID does not exist." });
                        res.status(200).json({...post, removed: true});
                    })
                    .catch(err => res.status(500).json({ error: "The post could not be removed" }));
            })
            .catch(err => res.status(500).json({ error: "The posts information could not be retrieved." }));
    });

module.exports = router;