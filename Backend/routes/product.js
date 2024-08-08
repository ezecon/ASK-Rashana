const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('../models/products.js');

// Multer setup

const cloudinary = require('../Cloudinary.js');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Create an item
router.post('/', upload.single('file'), async (req, res) => {
    const { name, description, price, category } = req.body;
    let photoUrl = null;
    try {
        if (req.file) {
            const result = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                    if (error) {
                        console.error("Cloudinary Upload Error: ", error);
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }).end(req.file.buffer);
            });

            photoUrl = result.secure_url;
        }

        const item = new Item({
            name, description, price, category, image: photoUrl
        });

        const newItem = await item.save();
        res.status(200).json({ item: newItem });
    } catch (err) {
        console.error("Server Error: ", err);  // Log the error
        res.status(500).json({ message: err.message });
    }
});


// Get items
router.get('/', async (req, res) => {


    try {
        const item = await Item.find();
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get item by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Item.findById(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = router;
