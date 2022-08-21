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
 * @route Search api/search
 * @desc Search the database for a specific land, house, space, 
 * @access Public
 */

router.get('/search/:id', auth, async (req, res) => {
    const id = req.params.id;

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
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;