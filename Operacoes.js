const { Produto, Compra, ItemCompra } = require("./settings.js")

class produtoManager{
    async getAllProduto(req, resp){
        try {
            const produtos = await Produto.findAll();
            resp.status(200).json(produtos);
          } catch (error) {
            // Lidar com erros de consulta, se houver
            console.error(error);
            resp.status(500).json({ error: 'Erro ao buscar produtos.' });
          }
        }
        async getOneProduto(req, resp) {
            try {
              const id = parseInt(req.params.id);
              const produto = await Produto.findByPk(id);
              if (produto) {
                resp.status(200).json(produto);
              } else {
                resp.status(404).json({ error: 'Usuário não encontrado.' });
              }
            } catch (error) {
              console.error(error);
              resp.status(500).json({ error: 'Erro ao buscar o usuário.' });
            }
          }
          async insertProduto(req, resp) {
            try {
              const {produtoNome, produtoPreco } = req.body;
              
    
              const newProduto = await User.create({
                nome: produtoNome,
                preco:produtoPreco 
              });
              resp.status(201).json(newProduto);
            } catch (error) {
              console.error(error);
              resp.status(500).json({ error: 'Erro ao adicionar usuário.' });
            }
          }

          async deletarProduto(req, resp){
            try {
                const idProduto = parseInt(req.params.id);
                const produtoDeletado = await Produto.destroy({
                  where: {
                    id: idProduto,
                  },
                });
            
                if (produtoDeletado === 0) {
                  console.log(`Produto com ID ${idProduto} não encontrado.`);
                } else {
                  console.log(`Produto com ID ${idProduto} deletado com sucesso.`);
                }
              } catch (error) {
                console.error('Erro ao deletar produto:', error.message);
                throw error;
              }
          }
}

class compraManager{
    async getAllCompras(req, resp){
        try {
            const compra = await Compra.findAll();
            resp.status(200).json(compra);
          } catch (error) {
            // Lidar com erros de consulta, se houver
            console.error(error);
            resp.status(500).json({ error: 'Erro ao buscar produtos.' });
          }
    }
    async getOneCompra(req, resp) {
        
        try {
          const id = parseInt(req.params.id);
          const produto = await compra.findByPk(id);
          if (produto) {
            resp.status(200).json(produto);
          } else {
            resp.status(404).json({ error: 'Usuário não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar o usuário.' });
        }
    }
    async getListaCompra(req, resp) {
        try {
            const id = parseInt(req.params.id);
            const getListaCompra = await ItemCompra.findAll({
                where: {
                  CompraId: id,
                },
              });
            if (getListaCompra) {
              resp.status(200).json(getListaCompra);
            } else {
              resp.status(404).json({ error: 'Usuário não encontrado.' });
            }
          } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Erro ao buscar o usuário.' });
          }

    }
    async insertCompra(req, resp){
        try {
            const {data} = req.body;
            
  
            const newCompra = await Compra.create({
              data_compr: data,
              
            });
            resp.status(201).json(newCompra);
          } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Erro ao adicionar usuário.' });
          }
    }
    async insertInLista(req, resp){
        try {
            const id = parseInt(req.params.id)
            const {produtoId,quantidadeProduto} = req.body;
            
  
            const newInLista = await ItemCompra.create({
              quantidade: quantidadeProduto,
              compraId : id,
              produtoId : produtoId
            
              
            });
            resp.status(201).json(newInLista);
          } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Erro ao adicionar usuário.' });
          }
    }
    
}

module.exports = { produtoManager, compraManager}