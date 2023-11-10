const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST, // A porta do MySQL, se não for a padrão (3306)
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

// Definindo o modelo de Produto
const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

// Definindo o modelo de Compra
const Compra = sequelize.define('Compra', {
  data_compra: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Definindo o modelo de Item de Compra
const ItemCompra = sequelize.define('ItemCompra', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Relacionamentos
Produto.belongsToMany(Compra, { through: ItemCompra });
Compra.belongsToMany(Produto, { through: ItemCompra });

sequelize.sync({ force: true }) // Use force: true apenas em ambiente de desenvolvimento para recriar as tabelas
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
});

module.exports = { Produto, Compra, ItemCompra }

