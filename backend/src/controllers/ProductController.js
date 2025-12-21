const Product = require('../models/ProductModel');

const ProductService = require('../services/ProductService');

const createProduct = async (req, res) => {
    try {
        const { name, image, type, price, countInStock, rating, description } = req.body

        if (!name || !image || !type || !price || !countInStock || !rating || !description) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }

        const response = await ProductService.createProduct(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const ProductId = req.params.id
        const data = req.body
        if (!ProductId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductId is required'
            });
        }
        const response = await ProductService.updateProduct(ProductId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const getDetailsProduct = async (req, res) => {
    try {
        const ProductId = req.params.id
        if (!ProductId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            });
        }
        const response = await ProductService.getDetailsProduct(ProductId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const ProductId = req.params.id
        if (!ProductId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ProductId is required'
            });
        }
        const response = await ProductService.deleteProduct(ProductId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductService.getAllProduct(Number(limit) || 8, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        console.log("Lỗi GetAllProduct:", e);
        return res.status(404).json({
            message: e
        });
    }
}


module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,

};