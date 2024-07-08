const calcularIngestaDiaria = (peso, altura, edad, sexo) => {
    let calorias;
    if (sexo === 'mujer') {
      calorias = 10 * peso + 6.25 * altura - 5 * edad - 161;
    } else {
      calorias = 10 * peso + 6.25 * altura - 5 * edad + 5;
    }
    return calorias;
  };
  
  const dailyRate = (req, res) => {
    try {
      const { peso, altura, edad, sexo } = req.body;
      const calorias = calcularIngestaDiaria(peso, altura, edad, sexo);
      res.status(200).json({ calorias });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al calcular la ingesta diaria' });
    }
  };
  
  const dailyRateById = (req, res) => {
    res.status(200).json({ mensaje: 'Función no implementada' });
  };
  
  module.exports = {
    dailyRate,
    dailyRateById
  };
  