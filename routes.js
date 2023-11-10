const express = require('express')
const { getProducts, getProductById, createProduct, deleteProduto, getCompras, getCompraById, getListaById, createCompra, addInList} = require('./Controler')
const router = express.Router()



/*router.get('/', (req, resp) => {
    resp.json({info: 'teste'})
})*/

router.get('/produtos', getProducts)
router.get('/produto/:id', getProductById)
router.post('/produto', createProduct)
router.delete('/produto/:id', deleteProduto)
router.get('/compras', getCompras)
router.post('/compras', createCompra)
router.get('/compras/:id', getCompraById)
router.get('/listacompras/:id',getListaById)
router.get('/listacompras/:id',addInList)

module.exports = router