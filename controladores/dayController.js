const addProductByDay = (req, res) => {
    res.status(200).json({ mensaje: 'Producto agregado por día' });
  };
  
  const deleteProductByDay = (req, res) => {
    res.status(200).json({ mensaje: 'Producto eliminado por día' });
  };
  
  const getProductsByDay = (req, res) => {
    res.status(200).json({ mensaje: 'Productos obtenidos por día' });
  };
  
  module.exports = {
    addProductByDay,
    deleteProductByDay,
    getProductsByDay
  };
  