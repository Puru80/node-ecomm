const BrandRepository = require('./brand.repository');
const {Brand} = require("./Brand");

class BrandService {
    async create(name, description) {
        const existingBrand = await BrandRepository.findByName(name);
        if (existingBrand) {
            throw new Error('Brand already exists');
        }

        const newBrand = new Brand();
        newBrand.name = name;
        newBrand.description = description;

        await BrandRepository.save([newBrand], { reload: false });

        return newBrand;
    }

    async getAll() {
        return await BrandRepository.findAndCount();
    }

    async getById(id) {
        return await BrandRepository.findOne(id);
    }

    async update(id, name, description) {
        const brand = await BrandRepository.findOne(id);
        if (!brand) {
            throw new Error('Brand not found');
        }

        brand.name = name;
        brand.description = description;
        await BrandRepository.save([brand], { reload: false });

        return brand;
    }

    async delete(id) {
        const brand = await BrandRepository.findOne(id);
        if (!brand) {
            throw new Error('Brand not found');
        }

        await BrandRepository.remove([brand]);

        return brand;
    }
}

module.exports = BrandService;