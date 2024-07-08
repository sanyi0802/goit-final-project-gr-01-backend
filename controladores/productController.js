const getProducts = (req, res) => {
    res.status(200).json({ mensaje: 'Productos obtenidos' });
  };
  
  module.exports = {
    getProducts
  };
  