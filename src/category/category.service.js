const CategoryRepository = require('./category.repository');
const {Category} = require("./Category");

class CategoryService {
    async create(name, description, categoryies) {
        const existingCategory = await CategoryRepository.findByName(name);
        if (existingCategory) {
            throw new Error('Category already exists');
        }

        const newCategory = new Category();
        newCategory.name = name;
        newCategory.description = description;

        await CategoryRepository.save([newCategory], { reload: false });

        return newCategory;
    }

    async getAll() {
        return await CategoryRepository.findAndCount();
    }

    async getById(id) {
        return await CategoryRepository.findOneById(id);
    }

    async update(id, name, description) {
        const category = await CategoryRepository.findOneById(id);
        if (!category) {
            throw new Error('Category not found');
        }

        category.name = name;
        category.description = description;
        await CategoryRepository.save([category], { reload: false });

        return category;
    }

    async delete(id) {
        const category = await CategoryRepository.findOneById(id);
        if (!category) {
            throw new Error('Category not found');
        }

        await CategoryRepository.remove([category]);

        return category;
    }

    async findByIds(ids) {
        return await CategoryRepository.findByIds(ids);
    }
}

module.exports = CategoryService;
