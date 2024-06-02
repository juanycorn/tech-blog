// Import necessary modules and models
const router = require('express').Router();
const { Post } = require('../../models');

// Route to create a new post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route to update an existing post by ID
router.put('/:id', async (req, res) => {
    try {
      const post = await Post.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!post) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Route to delete a post by ID
router.delete('/:id', async (req, res) => {
    try {
      const post = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!post) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;