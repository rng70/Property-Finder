const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Owner = require('../../models/Owner');
const Agency = require('../../models/Agency');
const Land = require('../../models/Land');
const House = require('../../models/House');
const Space = require('../../models/Space');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

/**
 * @route   GET api/posts
 * @desc    Get all post
 * @access  Conditionaloy Public
 */
router.get('/', auth, async (req, res) => {
    try {
        const lands = await Land.find().sort({ date: -1 });
        const houses = await House.find().sort({ date: -1 });
        const spaces = await Space.find().sort({ date: -1 });
        

        const allPosts = [...lands, ...houses, ...spaces];

        res.json(allPosts);
    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/getLand', auth, async (req, res) => {
    try {
        const lands = await Land.find().sort({ date: -1 });        

        res.json(lands);
    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET api/post/:id
 * @desc    Get all post
 * @access  Conditionaloy Public
 */ 
router.get('/post/:id', auth, async (req, res) => {
    let post = '';
    
    try {
        post = await Land.findById(id);

        if (!post) {
            post = await House.findById(id);
            if (!post) {
                post = await Space.findById(id);
                if (!post) {
                    return res.status(404).json({ msg: 'Nothig found on this :post_id' });
                }
            }
        }

        return res.json(post);
    } catch (err) {
        console.err(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found with this id' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET api/[type==land]/:id
 * @desc    Get all post
 * @access  Conditionaloy Public
 */ 
router.get('/land/:id', auth, async (req, res) => {
    try {
        const post = await Land.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Land not found' });
        }
        res.json(post);
    } catch (err) {
        console.err(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Land not found' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET api/[type==house]/:id
 * @desc    Get all post
 * @access  Conditionaloy Public
 */ 
router.get('/house/:id', auth, async (req, res) => {
    try {
        const post = await House.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'House not found' });
        }
        res.json(post);
    } catch (err) {
        console.err(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'House not found' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   GET api/[type==space]/:id
 * @desc    Get all post
 * @access  Conditionaloy Public
 */ 
router.get('/space/:id', auth, async (req, res) => {
    try {
        const post = await Space.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Space not found' });
        }
        res.json(post);
    } catch (err) {
        console.err(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Space not found' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   DELETE api/[type==land]/:id
 * @desc    Delete post
 * @access  Private
 */ 
router.delete('/land/:id', auth, async (req, res) => {
    try {
        const post = await Land.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Land not found' });
        }

        /* Check user */
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await post.remove();
        res.json({msg: 'Land info removed'});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Land not found' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   DELETE api/[type==house]/:id
 * @desc    Delete post
 * @access  Private
 */ 
router.delete('/house/:id', auth, async (req, res) => {
    try {
        const post = await House.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'House not found' });
        }

        /* Check user */
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await post.remove();
        res.json({msg: 'House info removed'});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'House not found' });
        }
        res.status(500).send('Server Error');
    }
});

/**
 * @route   DELETE api/[type==space]/:id
 * @desc    Delete post
 * @access  Private
 */ 
router.delete('/space/:id', auth, async (req, res) => {
    try {
        const post = await Space.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Space not found' });
        }

        /* Check user */
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await post.remove();
        res.json({msg: 'Space info removed'});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Space not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;