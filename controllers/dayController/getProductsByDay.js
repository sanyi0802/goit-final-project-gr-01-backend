const { day } = require("../../schema/daySchema");

const getProductsByDay = async (req, res) => {
  try {
    const getProductOfTheDay = await day.find({
      user: req.user,
      date: req.body.date,
    });
    return res.status(200).json(getProductOfTheDay);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getProductsByDay;
