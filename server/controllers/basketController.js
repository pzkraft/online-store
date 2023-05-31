const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async addItem(req, res, next) {
        try {
            let {basketId, deviceId} = req.body
            const item = await BasketDevice.create({basketId, deviceId});

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new BasketController()