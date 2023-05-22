const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async deleteOne(req, res) {
        const {toDeleteName} = req.body
        const type = await Brand.destroy({where: {name: toDeleteName}})
        return res.json('done')
    }

}

module.exports = new BrandController()
