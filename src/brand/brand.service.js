const BrandRepository = require('./brand.repository');
const {Brand} = require("./Brand");
const CategoryService = require('../category/category.service');

class BrandService {
    async create(name, description, categoryIds) {
        const existingBrand = await BrandRepository.findByName(name);
        if (existingBrand) {
            throw new Error('Brand already exists');
        }

        const newBrand = new Brand();
        newBrand.name = name;
        newBrand.description = description;
        newBrand.categories = [];

        if (categoryIds && categoryIds.length > 0) {
            const categoryService = new CategoryService();
            let categories = await categoryService.findByIds(categoryIds);

            if (categories.length !== categoryIds.length) {
                throw new Error('Some categories not found');
            }
        }

        await BrandRepository.save([newBrand], { reload: false });

        return newBrand;
    }

    async getAll() {
        return await BrandRepository.findAndCount();
    }

    async getById(id) {
        return await BrandRepository.findOneById(id);
    }

    async update(id, name, description) {
        const brand = await BrandRepository.findOneById(id);
        if (!brand) {
            throw new Error('Brand not found');
        }

        brand.name = name;
        brand.description = description;
        await BrandRepository.save([brand], { reload: false });

        return brand;
    }

    async delete(id) {
        const brand = await BrandRepository.findOneById(id);
        if (!brand) {
            throw new Error('Brand not found');
        }

        await BrandRepository.remove([brand]);

        return brand;
    }
}

module.exports = BrandService;
