const Product = require("../models/ProductModel");

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, price, countInStock, rating, description } = newProduct

        try {
            const checkProduct = await Product.findOne({ name: name })
            if (checkProduct !== null) {
                return resolve({
                    status: 'OK',
                    message: 'the name of product is already in use'
                })
            }
            const created = await Product.create({ name, image, type, price, countInStock, rating, description })
            if (created) {
                return resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: created
                });
            }
            return resolve({ status: 'ERR', message: 'Could not create product' })
        } catch (e) {
            reject(e);
        }
    });
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findById(id)
            if (checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'the product is not defined'
                })
            }
            const updated = await Product.findByIdAndUpdate(id, data, { new: true })
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updated
            });
        } catch (e) {
            reject(e);
        }
    });
}
const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findById(id)
            if (checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'the product is not defined'
                })
            }
            await Product.findByIdAndDelete(id)
            return resolve({
                status: 'OK',
                message: 'DELETE PRODUCT'
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findById(id)
            if (product === null) {
                return resolve({
                    status: 'OK',
                    message: 'the product is not defined'
                })
            }
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: product
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            //const totalProduct = await Product.count()
            const totalProduct = await Product.countDocuments()
            if (filter) {
                const label = filter[0]
                const allObjectFilter = await Product.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit);
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProduct,
                    total: allObjectFilter,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                });
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort);
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProduct,
                    total: allProductSort,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit)
                });
            }
            const allProduct = await Product.find().limit(limit).skip(page * limit)
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            });

        } catch (e) {
            reject(e);
        }
    });
}



module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
};