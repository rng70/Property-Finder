const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const User = require('../../models/User');
const Agency = require('../../models/Agency');
const Owner = require('../../models/Owner');
const { check, validationResult } = require('express-validator');

/**
 * @route   POST api/users
 * @desc    Register user
 * @access  Public
 */ 

router.post('/regUser', [
    check('fname', 'First Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more charactes').isLength({ min: 6 }),
    check('phone', 'Please enter a valid phone number').isLength({ min: 11 }).startsWith('01'),
    check('nid', 'Please enter a valid nid number').isLength({ min: 10 })
    
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, phone, nid } = req.body;
    
    try {
        /**
        * @desc Case-1: Check if the user exists
        * @desc Case-2: Get user gravatar
        * @desc Case-3: Encrypt Password
        * @desc Case-4: Return jsonwebtokens
        */
        
        /* Case-1: Check if the user exists */
        let userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        /* Case-2: Get user gravatar */
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        /* If everything goes well create new user */
        user = new User({
            firstName,
            lastName,
            email,
            avatar,
            password,
            phone,
            nid
        })

        /* Case-3: Encrypt Password */
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        /* Now save the user to the database */
        await user.save();

        /* Case-4: Return jsonwebtokens */
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 3600000
            },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            });
        // res.send('User registered')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server failure');
    }
});


/**
 * @route   POST api/regAgency
 * @desc    Register agency
 * @access  Public 
 */ 

router.post('/regAgency', [
    check('name', 'First Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more charactes').isLength({ min: 6 }),
    check('tradeLicenseNO', 'Please enter a valid phone number').isLength({ min: 8 }),
    check('yearOfEstablishment', 'Please enter a valid nid number').isDate()
    
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, tradeLicenseNO, yearOfEstablishment } = req.body;
    
    try {
        /**
        * @desc Case-1: Check if the user exists
        * @desc Case-2: Get user gravatar
        * @desc Case-3: Encrypt Password
        * @desc Case-4: Return jsonwebtokens
        */
        
        /* Case-1: Check if the agency exists */
        let userExists = await Agency.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        /* Case-2: Get user gravatar */
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        /* If everything goes well create new agency */
        agecy = new Agency({
            name,
            email,
            avatar,
            password,
            tradeLicenseNO,
            yearOfEstablishment
        })

        /* Case-3: Encrypt Password */
        const salt = await bcrypt.genSalt(10);
        agecy.password = await bcrypt.hash(password, salt);

        /* Now save the user to the database */
        await agecy.save();

        /* Case-4: Return jsonwebtokens */
        const payload = {
            agecy: {
                id: agecy.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 3600000
            },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            });
        // res.send('User registered')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server failure');
    }
});

/**
 * @route   POST api/regOwner
 * @desc    Register owner
 * @access  Public 
 */ 

router.post('/regOwner', [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more charactes').isLength({ min: 6 }),
    check('phone', 'Please enter a valid phone number').isLength({ min: 11 }).startsWith('01'),   
    check('nid', 'Please enter a valid nid number').not().isEmpty()
    
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, phone, nid } = req.body;
    
    try {
        /**
        * @desc Case-1: Check if the user exists
        * @desc Case-2: Get user gravatar
        * @desc Case-3: Encrypt Password
        * @desc Case-4: Return jsonwebtokens
        */
        
        /* Case-1: Check if the owner exists */
        let userExists = await Owner.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        /* Case-2: Get user gravatar */
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        /* If everything goes well create new agency */
        owner = new Owner({
            firstName,
            lastName,
            email,
            avatar,
            password,
            phone,
            nid
        })

        /* Case-3: Encrypt Password */
        const salt = await bcrypt.genSalt(10);
        owner.password = await bcrypt.hash(password, salt);

        /* Now save the user to the database */
        await owner.save();

        /* Case-4: Return jsonwebtokens */
        const payload = {
            owner: {
                id: owner.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 3600000
            },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.json({ token });
            });
        // res.send('User registered')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server failure');
    }
});

module.exports = router;