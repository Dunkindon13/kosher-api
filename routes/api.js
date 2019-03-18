const express = require('express');
const router = express.Router();
const restaurant = require('../models/restaurant')
const review = require('../models/review')
const address = require('../models/location')

// region Gets
router.get('/restaurant/:rest_id', async function(req, res) {
    let rest_id = req.params.rest_id
    let to_ret = await restaurant.getRestaurantByID(rest_id)
    res.send(to_ret)
})

router.get('/restaurants', async function (req, res) {
        let rest_to_ret = await restaurant.getAllRestaurants()
        res.send(rest_to_ret)
})

router.get('/reviews/:rest_id', async function (req, res) {
    let rest_id = req.params.rest_id
    let results = await review.getReviewsByRestaurantID(rest_id)
    res.send(results)
})

router.get('/review/:rev_id', async function (req, res) {
    let rev_id = req.params.rev_id
    let results = await review.getReviewByID(rev_id)
    res.send(results)
})

router.get('/location/:loc_id', async function (req, res) {
    let loc_id = req.params.loc_id
    let results = await address.getLocationByID(loc_id)
    res.send(results)
})
// endregion

// region Posts
router.post('/review', async function (req, res) {
})

// router.post('/restaurant', async function (req, res) {})
// router.post('/address', async function (req, res) {})
// endregion

module.exports = router;
