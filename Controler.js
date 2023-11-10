const {produtoManager, compraManager} = require("./Operacoes.js")

const getProducts = (req, resp) => {
    const produtoManager = new produtoManager()
    produtoManager.getAllProduto(req, resp)
}

const getProductById = (req, resp) => {
    const produtoManager = new produtoManager()
    produtoManager.getOneProduto(req, resp)
}

const createProduct = (req, resp) => {
    const produtoManager = new produtoManager()
    produtoManager.insertProduto(req, resp)
}

const deleteProduto = (req, resp) => {
    const produtoManager = new produtoManager()
    produtoManager.deletarProduto(req, resp)
}

const getCompras = (req, resp) => {
    const compraManager = new compraManager()
    compraManager.getAllCompras(req, resp)
}

const getCompraById = (req, resp) => {
    const compraManager = new compraManager()
    compraManager.getOneCompra(req, resp)
}

const getListaById = (req, resp) => {
    const compraManager = new compraManager()
    compraManager.getListaCompra(req, resp)
}

const createCompra = (req, resp) => {
    const compraManager = new compraManager()
    compraManager.getAllUsers(req, resp)
}

const addInList = (req, resp) => {
    const compraManager = new compraManager()
    compraManager.getAllUsers(req, resp)
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduto,
    getCompras,
    getCompraById,
    getListaById,
    createCompra,
    addInList,
}
