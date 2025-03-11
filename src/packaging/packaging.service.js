const PackagingRepository = require('./packaging.repository');

class PackagingService {

    async createPackaging(packaging) {
        return await PackagingRepository.save([packaging], { reload: false });
    }

    async getPackaging(id) {
        return await PackagingRepository.findOneById(id);
    }

    async findByIds(ids) {
        return await PackagingRepository.findByIds(ids);
    }

    async getAllPackagings() {
        return await PackagingRepository.findAndCount();
    }

    async updatePackaging(id, packaging) {
        return await PackagingRepository.update(id, packaging);
    }

    async deletePackaging(id) {
        return await PackagingRepository.delete(id);
    }
}

module.exports = PackagingService;