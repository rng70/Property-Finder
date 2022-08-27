const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Agency = require('../../models/Agency');
const Owner = require('../../models/Owner');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

/**
 * @route   GET api/auth
 * @desc    Test route
 * @access  Public
 */

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      const agency = await Agency.findById(req.user.id).select('-password');
      if (!agency) {
        const owner = await Owner.findById(req.user.id).select('-password');
        if (!owner) {
          return res.status(400).json({ msg: 'User not found' });
        }
        return res.json(owner);
      }
      return res.json(agency);
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST api/auth
 * @desc    Authenticate user & get token
 * @access  Public
 */
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      /**
       * @desc Case-1: Check if the user exists
       * @desc Case-2: Match the email and password
       * @desc Case-3: Return jsonwebtokens
       */

      /* Case-1: Check if the user exists */
      let user = await User.findOne({ email: email });

      if (!user) {
        user = await Agency.findOne({ email: email });
        if (!user) {
          user = await Owner.findOne({ email: email });
          if (!user) {
            return res
              .status(400)
              .json({ errors: [{ msg: 'Invalid Credentials' }] });
          }
        }
      }

      /* Case-2: Match the email and password */
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      /* Case-3: Return jsonwebtokens */
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('JWT_SECRET'),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server failure');
    }
  }
);

module.exports = router;
