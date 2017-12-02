const imagesModel = require('../models/imagesModel');

const getAllImages = (callback) => {
  imagesModel.findOne({},(err,data) => {
    if (err) {
      callback(null);
    } else {
      callback(null,data);
    }
  })
}



module.exports = {getAllImages};
