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
const { cloudinary } = require('../../config/cloudinary');


var multer = require('multer');

var storage = multer.memoryStorage();
var upload = multer({ dest: 'storage/' });

/**
 * @route   POST api/posts
 * @desc    Create a addPropPost
 * @access  Private
 */ 


const Upload = async fileStr => {
    try {
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'property_finder',
        });
        //console.log("Upload Response ==> ", uploadResponse);
        return uploadResponse;

    } catch (error) {
        console.log(error)
    }
}

/**
 * @desc adding Land
 */
router.post('/addLand',
    [
        auth,
        [
            check('landArea', 'Land Area is required').not().isEmpty().isNumeric(),
            check('price', 'Price is required').not().isEmpty().isNumeric(),
            check('isSold', 'Is Sold is required').not().isEmpty(),
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let owner = await Owner.findById(req.user.id).select('-password');
            let type = 'person';
            let ownerName;
            if (owner) {
                ownerName = owner.firstName + ' ' + owner.lastName;
            }
            if (!owner) {
                owner = await Agency.findById(req.user.id).select('-password');
                if (owner) {
                    ownerName = ownerName;
                }
                type = 'agency';
            }
            console.log("body sireuce ",req.body.previewSource );
            const promises = [];
            const publicIds = [];
            if (req.body.previewSource !== undefined) {
                const fileStr = req.body.previewSource;
                
                for (let i = 0; i < fileStr.length; i++){
                    promises.push(Upload(fileStr[i]))
                }
            }

            await Promise.all(promises).then(values => {
                values.map((value) => publicIds.push(value.public_id))
            })

            const newLand = new Land({
                ownerType: type,
                landArea: req.body.landArea,
                price: req.body.price,
                isSold: req.body.isSold,
                name: ownerName,
                owner: req.user.id,
                image: publicIds,
                plot : req.body.plot,
                road : req.body.road,
                block : req.body.block,
                postCode : req.body.postCode,
                areaName: req.body.areaName,
                district : req.body.district,
                division : req.body.division,
                contactNo : req.body.contactNo
            });

            const land = await newLand.save();
            return res.json(land);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    });

/**
 * @desc adding House
 */
router.post('/addHouse',
    [
        auth,
        [
            check('landArea', 'Land Area is required').not().isEmpty().isNumeric(),
            check('price', 'Price is required').not().isEmpty().isNumeric(),
            check('isSold', 'Is Sold is required').not().isEmpty(),
            check('noOfFloors', 'No of Floors is required').not().isEmpty().isNumeric(),
            check('type', 'Type of House is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let owner = await Owner.findById(req.user.id).select('-password');
            let type = 'person';
            let ownerName;
            if (owner) {
                ownerName = owner.firstName + ' ' + owner.lastName;
            }
            if (!owner) {
                owner = await Agency.findById(req.user.id).select('-password');
                if (owner) {
                    ownerName = ownerName;
                }
                type = 'agency';
            }

            console.log("in addProp routes ", owner);
            
            const promises = [];
            const publicIds = [];
            if (req.body.previewSource !== undefined) {
                const fileStr = req.body.previewSource;
                
                for (let i = 0; i < fileStr.length; i++){
                    promises.push(Upload(fileStr[i]))
                }
            }

            await Promise.all(promises).then(values => {
                values.map((value) => publicIds.push(value.public_id))
            })


            const newHouse = new House({
                type: req.body.type,
                noOfFloors: req.body.noOfFloors,
                landArea: req.body.landArea,
                price: req.body.price,
                isSold: req.body.isSold,
                ownerType: type,
                name: owner.name,
                avatar: owner.avatar,
                owner: req.user.id,
                image: publicIds,
                parkingSpaceArea : req.body.parkingSpaceArea,
                plot : req.body.plot,
                road : req.body.road,
                postCode : req.body.postCode,
                areaName : req.body.areaName,
                district : req.body.district,
                division : req.body.division,
                contactNo : req.body.contactNo
            });

            const house = await newHouse.save();
            return res.json(house);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    });

/**
 * @desc adding Space
 */
router.post('/addSpace',
    [
        auth,
        [
            check('area', 'Land Area is required').not().isEmpty().isNumeric(),
            check('price', 'Price is required').not().isEmpty().isNumeric(),
            check('isAvailable', 'Is Sold is required').not().isEmpty(),
            check('noOfRooms', 'No of Rooms is required').not().isEmpty().isNumeric(),
            check('sellType', 'Type of House is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let owner = await Owner.findById(req.user.id).select('-password');
            let type = 'person';
            let ownerName;
            if (owner) {
                ownerName = owner.firstName + ' ' + owner.lastName;
            }
            if (!owner) {
                owner = await Agency.findById(req.user.id).select('-password');
                if (owner) {
                    ownerName = ownerName;
                }
                type = 'agency';
            }

            const promises = [];
            const publicIds = [];
            if (req.body.previewSource !== undefined) {
                const fileStr = req.body.previewSource;
                
                for (let i = 0; i < fileStr.length; i++){
                    promises.push(Upload(fileStr[i]))
                }
            }

            await Promise.all(promises).then(values => {
                values.map((value) => publicIds.push(value.public_id))
            })

            const newSpace = new Space({
                type: req.body.type,
                noOfRooms: req.body.noOfRooms,
                area: req.body.area,
                sellType: req.body.sellType,
                price: req.body.price,
                isAvailable: req.body.isAvailable,
                whichFloors: req.body.whichFloors,
                image: publicIds,
                noOfKitchens : req.body.noOfKitchens,
                noOfWashrooms : req.body.noOfWashrooms,
                noOfDiningRooms : req.body.noOfDiningRooms,
                noOfLivingRooms : req.body.noOfLivingRooms,
                noOfServentRooms : req.body.noOfServentRooms,
                apartmentNo : req.body.apartmentNo,
                noOfFloors: req.body.noOfFloors,
                hasLift: req.body.hasLift,
                noOfBalcony: req.body.noOfBalcony,
                parkingSpace: req.body.parkingSpace,
                isAvailable : req.body.isAvailable,
                spaceDetails : req.body.spaceDetails,
                whichFloors : req.body.whichFloors,
                plot : req.body.plot,
                road :  req.body.road,
                block : req.body.block,
                postCode : req.body.postCode,
                areaName : req.body.postCode,
                district : req.body.district,
                division : req.body.division,
                contactNo : req.body.contactNo
            });
            
            const space = await newSpace.save();
            
            return res.json(space);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
});





// //////////////////////////// unnecessary posts

// /**
//  * @route   PUT api/posts/like/:id
//  * @desc    Like a post
//  * @access  Private
//  */ 
// router.put('/like/:id', auth, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);

//         /* Check if it is already liked */
//         if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
//             return res.statis(400).json({ msg: 'Post already liked' });
//         }

//         post.likes.unshift({ user: req.user.id });

//         await post.save();

//         res.json(post.likes);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// /**
//  * @route   PUT api/posts/unlike/:id
//  * @desc    Unlike a post
//  * @access  Private
//  */ 
// router.put('/like/:id', auth, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);

//         /* Check if it is already liked */
//         if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
//             return res.statis(400).json({ msg: 'Post has not yet liked' });
//         }

        
//         /* Get the remove index */
//         const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

//         post.likes.splice(removeIndex, 1);
//         await post.save();

//         res.json(post.likes);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// /**
//  * @route   POST api/posts/comment/:id
//  * @desc    Comments on a post
//  * @access  Private
//  */ 
// router.post('/comment/:id',
//     [
//         auth,
//         [
//             check('text', 'Text is required').not().isEmpty()
//         ]
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         try {
//             const user = await User.findById(req.user.id).select('-password');

//             const post = await Post.findById(req.params.id);

//             const newComment = {
//                 text: req.body.text,
//                 name: user.name,
//                 avatar: user.avatar,
//                 user: req.user.id
//             };

//             post.comments.unshift(newComment);
//             await post.save();

//             return res.json(post.comments);
//         } catch (err) {
//             console.error(err.message);
//             return res.status(500).send('Server Error');
//         }
// });

// /**
//  * @route   DELETE api/posts/comment/:id/:comment_id
//  * @desc    Delete a comment
//  * @access  Private
//  */ 
// router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);

//         /* Now pull out the comment */
//         const comment = post.comments.find(comment => comment.id === req.params.comment_id);


//         /* Make sure comments exists */
//         if (!comment) {
//             return res.status(404).json({ msg: 'Comment not found' });
//         }

//         /* Check user */
//         if (comment.user.toString() !== req.user.id){
//             return res.status(401).json({ msg: 'User not authorized' });
//         }
        
//         /* Get the remove index */
//         const removeIndex = post.comments.map(commet => comment.user.toString()).indexOf(req.user.id);

//         post.comments.splice(removeIndex, 1);
//         await post.save();

//         res.json(post.comments);
//     } catch (err) {
//             console.error(err.message);
//             return res.status(500).send('Server Error');
//         }
// })

module.exports = router;